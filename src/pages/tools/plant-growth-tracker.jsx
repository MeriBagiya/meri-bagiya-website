import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import SEO from '../../components/SEO';
import { plantTemplates } from '../../data/plantTemplates';
import {
  getTrackedPlants,
  addTrackedPlant,
  deleteTrackedPlant,
  addGrowthRecord,
  addPhotoRecord,
  deletePhotoRecord,
  addBloomCycle,
  endBloomCycle,
  getGrowthAnalytics,
  compressImage,
  healthLabels,
  healthColors
} from '../../utils/plantGrowthStorage';

function PlantGrowthTracker() {
  const [activeTab, setActiveTab] = useState('plants');
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [nickname, setNickname] = useState('');
  const [location, setLocation] = useState('');
  const [initialHeight, setInitialHeight] = useState('');

  // Growth record form
  const [recordHeight, setRecordHeight] = useState('');
  const [recordHealth, setRecordHealth] = useState(4);
  const [recordNotes, setRecordNotes] = useState('');

  // Photo upload
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoCaption, setPhotoCaption] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const data = getTrackedPlants();
    setPlants(data);
  }, []);

  const loadData = () => {
    const data = getTrackedPlants();
    setPlants(data);
    if (selectedPlant) {
      const updated = data.find(p => p.id === selectedPlant.id);
      setSelectedPlant(updated || null);
    }
  };

  const handleAddPlant = () => {
    if (!selectedTemplate) {
      toast.error('Please select a plant type');
      return;
    }

    const newPlant = addTrackedPlant({
      name: selectedTemplate.name,
      scientificName: selectedTemplate.scientificName,
      nickname: nickname || selectedTemplate.name,
      location: location || 'My Garden',
      image: selectedTemplate.image,
      difficulty: selectedTemplate.difficulty,
      currentHeight: initialHeight ? parseFloat(initialHeight) : null,
      currentHealth: 4,
      isCurrentlyBlooming: false
    });

    // Add initial growth record if height provided
    if (initialHeight) {
      addGrowthRecord(newPlant.id, {
        height: parseFloat(initialHeight),
        health: 4,
        notes: 'Initial measurement'
      });
    }

    toast.success(`${newPlant.nickname} added for tracking!`);
    resetAddForm();
    setShowAddModal(false);
    loadData();
  };

  const resetAddForm = () => {
    setSelectedTemplate(null);
    setNickname('');
    setLocation('');
    setInitialHeight('');
  };

  const handleDeletePlant = (plantId, plantName) => {
    if (window.confirm(`Remove ${plantName} from tracking? All growth data will be lost.`)) {
      deleteTrackedPlant(plantId);
      toast.success(`${plantName} removed`);
      if (selectedPlant?.id === plantId) {
        setSelectedPlant(null);
      }
      loadData();
    }
  };

  const handleAddRecord = () => {
    if (!selectedPlant) return;

    if (!recordHeight && !recordNotes) {
      toast.error('Please enter height or notes');
      return;
    }

    addGrowthRecord(selectedPlant.id, {
      height: recordHeight ? parseFloat(recordHeight) : null,
      health: recordHealth,
      notes: recordNotes
    });

    toast.success('Growth record added!');
    setRecordHeight('');
    setRecordHealth(4);
    setRecordNotes('');
    setShowRecordModal(false);
    loadData();
  };

  const handlePhotoSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image too large. Max 10MB');
      return;
    }

    setIsUploading(true);
    try {
      const compressed = await compressImage(file);
      setPhotoPreview(compressed);
    } catch (error) {
      toast.error('Error processing image');
    }
    setIsUploading(false);
  };

  const handleAddPhoto = () => {
    if (!selectedPlant || !photoPreview) return;

    addPhotoRecord(selectedPlant.id, {
      image: photoPreview,
      caption: photoCaption
    });

    toast.success('Photo added to timeline!');
    setPhotoPreview(null);
    setPhotoCaption('');
    setShowPhotoModal(false);
    loadData();
  };

  const handleDeletePhoto = (photoId) => {
    if (window.confirm('Delete this photo?')) {
      deletePhotoRecord(selectedPlant.id, photoId);
      toast.success('Photo deleted');
      loadData();
    }
  };

  const handleStartBloom = () => {
    if (!selectedPlant) return;
    addBloomCycle(selectedPlant.id, {
      flowerColor: '',
      notes: ''
    });
    toast.success('Bloom cycle started!');
    loadData();
  };

  const handleEndBloom = (bloomId) => {
    if (!selectedPlant) return;
    endBloomCycle(selectedPlant.id, bloomId);
    toast.success('Bloom cycle ended');
    loadData();
  };

  const formatDateShort = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short'
    });
  };

  const PlantCard = ({ plant }) => {
    return (
      <div
        className={`card mb-3 border-0 shadow-sm ${selectedPlant?.id === plant.id ? 'border-success border-2' : ''}`}
        style={{ borderRadius: '12px', cursor: 'pointer' }}
        onClick={() => setSelectedPlant(plant)}
      >
        <div className="card-body p-3">
          <div className="d-flex align-items-start">
            <img
              src={plant.image}
              alt={plant.name}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '10px',
                objectFit: 'cover'
              }}
            />
            <div className="ms-3 flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-0">{plant.nickname}</h6>
                  <small className="text-muted">{plant.name}</small>
                </div>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeletePlant(plant.id, plant.nickname);
                  }}
                  style={{ borderRadius: '50%', width: '28px', height: '28px', padding: 0 }}
                >
                  <i className="icofont-trash" style={{ fontSize: '12px' }}></i>
                </button>
              </div>
              <div className="mt-2 d-flex flex-wrap gap-2">
                {plant.currentHeight && (
                  <span className="badge bg-primary bg-opacity-10 text-primary">
                    <i className="icofont-ruler me-1"></i>{plant.currentHeight} cm
                  </span>
                )}
                {plant.currentHealth && (
                  <span
                    className="badge"
                    style={{
                      backgroundColor: `${healthColors[plant.currentHealth]}20`,
                      color: healthColors[plant.currentHealth]
                    }}
                  >
                    <i className="icofont-heart me-1"></i>{healthLabels[plant.currentHealth]}
                  </span>
                )}
                {plant.isCurrentlyBlooming && (
                  <span className="badge bg-danger bg-opacity-10 text-danger">
                    <i className="icofont-flower me-1"></i>Blooming
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AnalyticsCard = ({ analytics }) => {
    if (!analytics) {
      return (
        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
          <div className="card-body text-center py-4">
            <i className="icofont-chart-bar-graph" style={{ fontSize: '48px', color: '#dee2e6' }}></i>
            <p className="text-muted mt-2 mb-0">Add growth records to see analytics</p>
          </div>
        </div>
      );
    }

    return (
      <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
        <div className="card-body">
          <h6 className="card-title mb-3">
            <i className="icofont-chart-growth me-2" style={{ color: '#4a7c59' }}></i>
            Growth Analytics
          </h6>
          <div className="row g-3">
            <div className="col-6">
              <div className="p-3 bg-light rounded-3 text-center">
                <h4 className="mb-0" style={{ color: '#4a7c59' }}>
                  {analytics.totalGrowth > 0 ? '+' : ''}{analytics.totalGrowth}
                </h4>
                <small className="text-muted">cm Total Growth</small>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 bg-light rounded-3 text-center">
                <h4 className="mb-0" style={{ color: '#2196F3' }}>
                  {analytics.growthRate}
                </h4>
                <small className="text-muted">cm/month Rate</small>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 bg-light rounded-3 text-center">
                <h4 className="mb-0" style={{ color: analytics.avgHealth ? healthColors[Math.round(analytics.avgHealth)] : '#6c757d' }}>
                  {analytics.avgHealth || '-'}
                </h4>
                <small className="text-muted">Avg Health</small>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 bg-light rounded-3 text-center">
                <h4 className="mb-0" style={{ color: '#e91e63' }}>
                  {analytics.totalBlooms}
                </h4>
                <small className="text-muted">Bloom Cycles</small>
              </div>
            </div>
          </div>
          {analytics.avgBloomDuration && (
            <div className="mt-3 text-center">
              <small className="text-muted">
                Average bloom duration: <strong>{analytics.avgBloomDuration} days</strong>
              </small>
            </div>
          )}
        </div>
      </div>
    );
  };

  const PhotoTimeline = ({ photos }) => {
    if (!photos || photos.length === 0) {
      return (
        <div className="text-center py-4">
          <i className="icofont-camera" style={{ fontSize: '48px', color: '#dee2e6' }}></i>
          <p className="text-muted mt-2 mb-0">No photos yet. Add your first photo!</p>
        </div>
      );
    }

    return (
      <div className="photo-timeline">
        {photos.map((photo, index) => (
          <div key={photo.id} className="d-flex mb-3">
            <div className="timeline-date text-end me-3" style={{ minWidth: '60px' }}>
              <small className="text-muted">{formatDateShort(photo.date)}</small>
            </div>
            <div className="timeline-content flex-grow-1">
              <div className="position-relative">
                <img
                  src={photo.image}
                  alt={photo.caption || 'Plant photo'}
                  style={{
                    width: '100%',
                    maxHeight: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }}
                />
                <button
                  className="btn btn-danger btn-sm position-absolute"
                  style={{ top: '8px', right: '8px', borderRadius: '50%', width: '28px', height: '28px', padding: 0 }}
                  onClick={() => handleDeletePhoto(photo.id)}
                >
                  <i className="icofont-close" style={{ fontSize: '12px' }}></i>
                </button>
              </div>
              {photo.caption && (
                <p className="mt-2 mb-0 small text-muted">{photo.caption}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const GrowthHistory = ({ records }) => {
    if (!records || records.length === 0) {
      return (
        <div className="text-center py-4">
          <i className="icofont-clock-time" style={{ fontSize: '48px', color: '#dee2e6' }}></i>
          <p className="text-muted mt-2 mb-0">No records yet. Add your first measurement!</p>
        </div>
      );
    }

    return (
      <div className="growth-history">
        {records.slice(0, 10).map((record, index) => (
          <div
            key={record.id}
            className="d-flex align-items-center mb-3 pb-3 border-bottom"
          >
            <div
              className="me-3 d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#4a7c5920'
              }}
            >
              <i className="icofont-ruler" style={{ color: '#4a7c59' }}></i>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {record.height && (
                    <span className="fw-bold me-2">{record.height} cm</span>
                  )}
                  {record.health && (
                    <span
                      className="badge"
                      style={{
                        backgroundColor: `${healthColors[record.health]}20`,
                        color: healthColors[record.health]
                      }}
                    >
                      {healthLabels[record.health]}
                    </span>
                  )}
                </div>
                <small className="text-muted">{formatDateShort(record.date)}</small>
              </div>
              {record.notes && (
                <small className="text-muted d-block mt-1">{record.notes}</small>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const BloomHistory = ({ bloomCycles, isCurrentlyBlooming }) => {
    return (
      <div className="bloom-history">
        {isCurrentlyBlooming && bloomCycles && bloomCycles[0] && !bloomCycles[0].endDate && (
          <div className="alert alert-danger d-flex align-items-center justify-content-between mb-3">
            <div>
              <i className="icofont-flower me-2"></i>
              Currently blooming since {formatDateShort(bloomCycles[0].startDate)}
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleEndBloom(bloomCycles[0].id)}
            >
              End Bloom
            </button>
          </div>
        )}

        {!isCurrentlyBlooming && (
          <button
            className="btn btn-outline-danger btn-sm mb-3 w-100"
            onClick={handleStartBloom}
          >
            <i className="icofont-flower me-1"></i> Start New Bloom Cycle
          </button>
        )}

        {(!bloomCycles || bloomCycles.length === 0) ? (
          <div className="text-center py-3">
            <i className="icofont-flower" style={{ fontSize: '36px', color: '#dee2e6' }}></i>
            <p className="text-muted mt-2 mb-0 small">No bloom cycles recorded</p>
          </div>
        ) : (
          bloomCycles.filter(b => b.endDate).map((bloom, index) => (
            <div key={bloom.id} className="d-flex align-items-center mb-2 p-2 bg-light rounded">
              <i className="icofont-flower me-2" style={{ color: '#e91e63' }}></i>
              <div className="flex-grow-1">
                <small>
                  {formatDateShort(bloom.startDate)} - {formatDateShort(bloom.endDate)}
                </small>
                <small className="text-muted ms-2">
                  ({Math.round((new Date(bloom.endDate) - new Date(bloom.startDate)) / (1000 * 60 * 60 * 24))} days)
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Plant Growth Tracker - Track Height, Health & Blooms | Meri Bagiya"
        description="Free plant growth tracker tool. Monitor plant height, health scores, bloom cycles with photo timeline. Get insights and analytics for your plants."
        keywords="plant growth tracker, plant height tracker, bloom tracker, plant health monitor, plant photo timeline, garden analytics"
        canonicalUrl="/tools/plant-growth-tracker"
        breadcrumbs={[
          { name: 'Home', url: 'https://meribagiya.com/' },
          { name: 'Tools', url: 'https://meribagiya.com/tools' },
          { name: 'Plant Growth Tracker', url: 'https://meribagiya.com/tools/plant-growth-tracker' }
        ]}
        faqItems={[
          { question: "How to track plant growth at home?", answer: "Use our free Plant Growth Tracker to record height, health scores, bloom cycles, and photos over time. All data is stored locally on your device — no account needed." },
          { question: "How fast do indoor plants grow?", answer: "Growth rates vary by species. Snake plants grow 2-3 inches/year, pothos can grow 12+ inches/year, and monstera 1-2 feet/year. Track your plant's actual progress with our tool to see personalized growth analytics." },
          { question: "How do I know if my plant is healthy?", answer: "Healthy plants show vibrant color, new growth, firm stems, and pest-free leaves. Our Growth Tracker lets you score plant health over time and spot trends before problems get serious." }
        ]}
      />

      {/* Subheader */}
      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/6.webp" className="jarallax-img" alt="Plant Growth Tracker" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li className="active">Plant Growth Tracker</li>
              </ul>
              <h1>Plant Growth Tracker</h1>
              <p>Free Tool</p>
            </div>
          </div>
        </div>
        <div className="de-overlay"></div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
              <h3 className="mb-1">Growth Tracker</h3>
              <p className="text-muted mb-0">{plants.length} plant(s) tracked</p>
            </div>
            <button
              className="btn btn-main"
              onClick={() => setShowAddModal(true)}
              style={{ borderRadius: '25px', padding: '10px 25px' }}
            >
              <i className="icofont-plus me-2"></i> Track New Plant
            </button>
          </div>

          <div className="row">
            {/* Plants List */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h6 className="card-title mb-3">My Tracked Plants</h6>
                  {plants.length === 0 ? (
                    <div className="text-center py-4">
                      <i className="icofont-plant" style={{ fontSize: '48px', color: '#dee2e6' }}></i>
                      <p className="text-muted mt-2 mb-0">No plants tracked yet</p>
                      <button
                        className="btn btn-sm btn-main mt-3"
                        onClick={() => setShowAddModal(true)}
                        style={{ borderRadius: '20px' }}
                      >
                        Add First Plant
                      </button>
                    </div>
                  ) : (
                    plants.map(plant => (
                      <PlantCard key={plant.id} plant={plant} />
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Plant Details */}
            <div className="col-lg-8">
              {!selectedPlant ? (
                <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                  <div className="card-body text-center py-5">
                    <i className="icofont-touch" style={{ fontSize: '64px', color: '#dee2e6' }}></i>
                    <h4 className="mt-3 text-muted">Select a plant to view details</h4>
                    <p className="text-muted">Click on a plant from the list to view its growth history and analytics</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Plant Header */}
                  <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center">
                        <img
                          src={selectedPlant.image}
                          alt={selectedPlant.name}
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '12px',
                            objectFit: 'cover'
                          }}
                        />
                        <div className="ms-3 flex-grow-1">
                          <h4 className="mb-1">{selectedPlant.nickname}</h4>
                          <p className="text-muted mb-2">{selectedPlant.name}</p>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge bg-light text-dark">
                              <i className="icofont-location-pin me-1"></i>{selectedPlant.location}
                            </span>
                            <span className="badge bg-light text-dark">
                              <i className="icofont-calendar me-1"></i>Tracking since {formatDateShort(selectedPlant.dateAdded)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mb-4 flex-wrap">
                    <button
                      className="btn btn-success"
                      onClick={() => setShowRecordModal(true)}
                      style={{ borderRadius: '25px' }}
                    >
                      <i className="icofont-plus me-1"></i> Add Record
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowPhotoModal(true)}
                      style={{ borderRadius: '25px' }}
                    >
                      <i className="icofont-camera me-1"></i> Add Photo
                    </button>
                  </div>

                  {/* Analytics */}
                  <AnalyticsCard analytics={getGrowthAnalytics(selectedPlant.id)} />

                  {/* Tabs for History */}
                  <ul className="nav nav-pills mb-3" style={{ gap: '10px' }}>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'photos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('photos')}
                        style={{
                          borderRadius: '25px',
                          backgroundColor: activeTab === 'photos' ? '#4a7c59' : '#e9ecef',
                          color: activeTab === 'photos' ? '#fff' : '#333'
                        }}
                      >
                        <i className="icofont-camera me-1"></i> Photos ({selectedPlant.photos?.length || 0})
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'records' ? 'active' : ''}`}
                        onClick={() => setActiveTab('records')}
                        style={{
                          borderRadius: '25px',
                          backgroundColor: activeTab === 'records' ? '#4a7c59' : '#e9ecef',
                          color: activeTab === 'records' ? '#fff' : '#333'
                        }}
                      >
                        <i className="icofont-ruler me-1"></i> Records ({selectedPlant.growthRecords?.length || 0})
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === 'blooms' ? 'active' : ''}`}
                        onClick={() => setActiveTab('blooms')}
                        style={{
                          borderRadius: '25px',
                          backgroundColor: activeTab === 'blooms' ? '#4a7c59' : '#e9ecef',
                          color: activeTab === 'blooms' ? '#fff' : '#333'
                        }}
                      >
                        <i className="icofont-flower me-1"></i> Blooms ({selectedPlant.bloomCycles?.length || 0})
                      </button>
                    </li>
                  </ul>

                  {/* Tab Content */}
                  <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                    <div className="card-body">
                      {activeTab === 'photos' && (
                        <PhotoTimeline photos={selectedPlant.photos} />
                      )}
                      {activeTab === 'records' && (
                        <GrowthHistory records={selectedPlant.growthRecords} />
                      )}
                      {activeTab === 'blooms' && (
                        <BloomHistory
                          bloomCycles={selectedPlant.bloomCycles}
                          isCurrentlyBlooming={selectedPlant.isCurrentlyBlooming}
                        />
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Tips Section */}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="icofont-ruler me-2" style={{ color: '#4a7c59' }}></i>
                    Measuring Tips
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Measure from soil level to highest point</small>
                    </li>
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Use the same reference point each time</small>
                    </li>
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Measure weekly for best tracking</small>
                    </li>
                    <li>
                      <small><i className="icofont-check-circled text-success me-2"></i>Note any pruning in your records</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="icofont-camera me-2" style={{ color: '#2196F3' }}></i>
                    Photo Tips
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Take photos from the same angle</small>
                    </li>
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Use natural lighting when possible</small>
                    </li>
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Include a reference object for scale</small>
                    </li>
                    <li>
                      <small><i className="icofont-check-circled text-success me-2"></i>Weekly photos show best progress</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="icofont-heart me-2" style={{ color: '#e91e63' }}></i>
                    Health Indicators
                  </h5>
                  <div className="mb-2">
                    <span className="badge me-2" style={{ backgroundColor: '#19875420', color: '#198754' }}>5</span>
                    <small>Excellent - Thriving, vibrant leaves</small>
                  </div>
                  <div className="mb-2">
                    <span className="badge me-2" style={{ backgroundColor: '#28a74520', color: '#28a745' }}>4</span>
                    <small>Good - Healthy with minor issues</small>
                  </div>
                  <div className="mb-2">
                    <span className="badge me-2" style={{ backgroundColor: '#ffc10720', color: '#856404' }}>3</span>
                    <small>Fair - Some yellowing/drooping</small>
                  </div>
                  <div className="mb-2">
                    <span className="badge me-2" style={{ backgroundColor: '#fd7e1420', color: '#fd7e14' }}>2</span>
                    <small>Poor - Significant issues</small>
                  </div>
                  <div>
                    <span className="badge me-2" style={{ backgroundColor: '#dc354520', color: '#dc3545' }}>1</span>
                    <small>Critical - Needs immediate care</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Plant Modal */}
      {showAddModal && (
        <>
          <div
            className="modal-backdrop show"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => { setShowAddModal(false); resetAddForm(); }}
          ></div>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content" style={{ borderRadius: '15px' }}>
                <div className="modal-header border-0">
                  <h5 className="modal-title">
                    <i className="icofont-plus me-2" style={{ color: '#4a7c59' }}></i>
                    Track New Plant
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => { setShowAddModal(false); resetAddForm(); }}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-4">
                    <label className="form-label fw-bold">Select Plant Type</label>
                    <div className="row g-2" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                      {plantTemplates.map(template => (
                        <div key={template.id} className="col-4 col-md-3">
                          <div
                            className={`card h-100 ${selectedTemplate?.id === template.id ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '10px' }}
                            onClick={() => setSelectedTemplate(template)}
                          >
                            <div className="card-body p-2 text-center">
                              <img
                                src={template.image}
                                alt={template.name}
                                style={{
                                  width: '50px',
                                  height: '50px',
                                  borderRadius: '8px',
                                  objectFit: 'cover'
                                }}
                              />
                              <h6 className="mb-0 mt-1" style={{ fontSize: '11px' }}>{template.name}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedTemplate && (
                    <>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Nickname (optional)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={`e.g., "My ${selectedTemplate.name}"`}
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                          style={{ borderRadius: '10px' }}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-bold">Location</label>
                        <select
                          className="form-select"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          style={{ borderRadius: '10px' }}
                        >
                          <option value="">Select location...</option>
                          <option value="Living Room">Living Room</option>
                          <option value="Bedroom">Bedroom</option>
                          <option value="Kitchen">Kitchen</option>
                          <option value="Bathroom">Bathroom</option>
                          <option value="Balcony">Balcony</option>
                          <option value="Terrace">Terrace</option>
                          <option value="Office">Office</option>
                          <option value="Garden">Garden</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-bold">Current Height (cm)</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="e.g., 15"
                          value={initialHeight}
                          onChange={(e) => setInitialHeight(e.target.value)}
                          style={{ borderRadius: '10px' }}
                          min="0"
                          step="0.1"
                        />
                        <small className="text-muted">Measure from soil to highest point</small>
                      </div>
                    </>
                  )}
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => { setShowAddModal(false); resetAddForm(); }}
                    style={{ borderRadius: '25px' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-main"
                    onClick={handleAddPlant}
                    disabled={!selectedTemplate}
                    style={{ borderRadius: '25px' }}
                  >
                    <i className="icofont-plus me-1"></i> Start Tracking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add Record Modal */}
      {showRecordModal && (
        <>
          <div
            className="modal-backdrop show"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setShowRecordModal(false)}
          ></div>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ borderRadius: '15px' }}>
                <div className="modal-header border-0">
                  <h5 className="modal-title">
                    <i className="icofont-ruler me-2" style={{ color: '#4a7c59' }}></i>
                    Add Growth Record
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowRecordModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-bold">Height (cm)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="e.g., 20"
                      value={recordHeight}
                      onChange={(e) => setRecordHeight(e.target.value)}
                      style={{ borderRadius: '10px' }}
                      min="0"
                      step="0.1"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Health Status</label>
                    <div className="d-flex gap-2">
                      {[1, 2, 3, 4, 5].map(level => (
                        <button
                          key={level}
                          type="button"
                          className={`btn flex-grow-1 ${recordHealth === level ? 'btn-success' : 'btn-outline-secondary'}`}
                          onClick={() => setRecordHealth(level)}
                          style={{ borderRadius: '10px' }}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                    <small className="text-muted">
                      Selected: <strong style={{ color: healthColors[recordHealth] }}>{healthLabels[recordHealth]}</strong>
                    </small>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Notes (optional)</label>
                    <textarea
                      className="form-control"
                      placeholder="Any observations..."
                      value={recordNotes}
                      onChange={(e) => setRecordNotes(e.target.value)}
                      style={{ borderRadius: '10px' }}
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowRecordModal(false)}
                    style={{ borderRadius: '25px' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleAddRecord}
                    style={{ borderRadius: '25px' }}
                  >
                    <i className="icofont-plus me-1"></i> Add Record
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add Photo Modal */}
      {showPhotoModal && (
        <>
          <div
            className="modal-backdrop show"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => { setShowPhotoModal(false); setPhotoPreview(null); setPhotoCaption(''); }}
          ></div>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ borderRadius: '15px' }}>
                <div className="modal-header border-0">
                  <h5 className="modal-title">
                    <i className="icofont-camera me-2" style={{ color: '#2196F3' }}></i>
                    Add Photo
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => { setShowPhotoModal(false); setPhotoPreview(null); setPhotoCaption(''); }}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoSelect}
                    style={{ display: 'none' }}
                  />

                  {!photoPreview ? (
                    <div
                      className="border-2 border-dashed rounded-3 p-5 text-center"
                      style={{ borderColor: '#dee2e6', cursor: 'pointer' }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {isUploading ? (
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <>
                          <i className="icofont-camera" style={{ fontSize: '48px', color: '#dee2e6' }}></i>
                          <p className="text-muted mt-2 mb-0">Click to select a photo</p>
                        </>
                      )}
                    </div>
                  ) : (
                    <div>
                      <img
                        src={photoPreview}
                        alt="Preview"
                        style={{
                          width: '100%',
                          maxHeight: '300px',
                          objectFit: 'contain',
                          borderRadius: '10px'
                        }}
                      />
                      <button
                        className="btn btn-sm btn-outline-secondary mt-2"
                        onClick={() => { setPhotoPreview(null); fileInputRef.current.value = ''; }}
                      >
                        <i className="icofont-refresh me-1"></i> Change Photo
                      </button>
                    </div>
                  )}

                  <div className="mt-3">
                    <label className="form-label fw-bold">Caption (optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add a note about this photo..."
                      value={photoCaption}
                      onChange={(e) => setPhotoCaption(e.target.value)}
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => { setShowPhotoModal(false); setPhotoPreview(null); setPhotoCaption(''); }}
                    style={{ borderRadius: '25px' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddPhoto}
                    disabled={!photoPreview}
                    style={{ borderRadius: '25px' }}
                  >
                    <i className="icofont-plus me-1"></i> Add Photo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PlantGrowthTracker;
