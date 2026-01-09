import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import SEO from '../../components/SEO';
import { plantTemplates } from '../../data/plantTemplates';
import {
  getPlants,
  addPlant,
  deletePlant,
  markCareComplete,
  getTasksDueToday,
  getTasksThisWeek,
  initializePlantFromTemplate,
  requestNotificationPermission,
  getNotificationPermission
} from '../../utils/plantCareStorage';

function PlantCareCalendar() {
  const [activeTab, setActiveTab] = useState('today');
  const [plants, setPlants] = useState([]);
  const [todayTasks, setTodayTasks] = useState([]);
  const [weekTasks, setWeekTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [nickname, setNickname] = useState('');
  const [location, setLocation] = useState('');
  const [notificationStatus, setNotificationStatus] = useState('default');

  // Load data on mount
  useEffect(() => {
    loadData();
    checkNotificationPermission();
  }, []);

  const loadData = () => {
    setPlants(getPlants());
    setTodayTasks(getTasksDueToday());
    setWeekTasks(getTasksThisWeek());
  };

  const checkNotificationPermission = async () => {
    const savedPermission = getNotificationPermission();
    if (savedPermission) {
      setNotificationStatus(savedPermission);
    } else if ('Notification' in window) {
      setNotificationStatus(Notification.permission);
    }
  };

  const handleRequestNotifications = async () => {
    const permission = await requestNotificationPermission();
    setNotificationStatus(permission);
    if (permission === 'granted') {
      toast.success('Notifications enabled! You\'ll receive reminders for plant care.');
    } else if (permission === 'denied') {
      toast.error('Notifications blocked. Enable them in browser settings to receive reminders.');
    }
  };

  const handleAddPlant = () => {
    if (!selectedTemplate) {
      toast.error('Please select a plant type');
      return;
    }

    const newPlant = initializePlantFromTemplate(selectedTemplate, nickname, location);
    addPlant(newPlant);
    toast.success(`${newPlant.nickname} added to your garden!`);

    // Reset form
    setSelectedTemplate(null);
    setNickname('');
    setLocation('');
    setShowAddModal(false);
    loadData();
  };

  const handleDeletePlant = (plantId, plantName) => {
    if (window.confirm(`Are you sure you want to remove ${plantName} from your garden?`)) {
      deletePlant(plantId);
      toast.success(`${plantName} removed from your garden`);
      loadData();
    }
  };

  const handleMarkComplete = (plantId, careType, plantName) => {
    markCareComplete(plantId, careType);
    toast.success(`${careType} completed for ${plantName}!`);
    loadData();
  };

  const getCareIcon = (careType) => {
    switch (careType) {
      case 'watering': return 'icofont-water-drop';
      case 'fertilizing': return 'icofont-leaf';
      case 'pruning': return 'icofont-cut';
      case 'repotting': return 'icofont-flower-pot';
      default: return 'icofont-plant';
    }
  };

  const getCareColor = (careType) => {
    switch (careType) {
      case 'watering': return '#2196F3';
      case 'fertilizing': return '#4CAF50';
      case 'pruning': return '#FF9800';
      case 'repotting': return '#9C27B0';
      default: return '#4a7c59';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(date);
    taskDate.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((taskDate - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return `${Math.abs(diffDays)} day(s) overdue`;
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `In ${diffDays} days`;
  };

  const getDaysUntilDue = (nextDue) => {
    if (!nextDue) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(nextDue);
    dueDate.setHours(0, 0, 0, 0);
    return Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
  };

  const TaskCard = ({ task }) => {
    return (
      <div
        className={`card mb-3 border-0 shadow-sm ${task.isOverdue ? 'border-start border-danger border-3' : ''}`}
        style={{ borderRadius: '12px' }}
      >
        <div className="card-body d-flex align-items-center justify-content-between p-3">
          <div className="d-flex align-items-center">
            <div
              className="me-3 d-flex align-items-center justify-content-center"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: `${getCareColor(task.careType)}20`
              }}
            >
              <i
                className={getCareIcon(task.careType)}
                style={{ fontSize: '24px', color: getCareColor(task.careType) }}
              ></i>
            </div>
            <div>
              <h6 className="mb-1" style={{ textTransform: 'capitalize' }}>
                {task.careType}
              </h6>
              <p className="mb-0 text-muted small">{task.plantName}</p>
              <span className={`badge ${task.isOverdue ? 'bg-danger' : 'bg-warning text-dark'}`}>
                {formatDate(task.dueDate)}
              </span>
            </div>
          </div>
          <button
            className="btn btn-success btn-sm"
            onClick={() => handleMarkComplete(task.plantId, task.careType, task.plantName)}
            style={{ borderRadius: '20px', padding: '8px 16px' }}
          >
            <i className="icofont-check me-1"></i> Done
          </button>
        </div>
      </div>
    );
  };

  const PlantCard = ({ plant }) => {
    const careTypes = ['watering', 'fertilizing', 'pruning', 'repotting'];

    return (
      <div className="card mb-3 border-0 shadow-sm" style={{ borderRadius: '12px' }}>
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="mb-1">{plant.nickname || plant.name}</h5>
              <p className="text-muted small mb-0">{plant.name}</p>
              <span className="badge bg-light text-dark">{plant.location}</span>
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleDeletePlant(plant.id, plant.nickname || plant.name)}
              style={{ borderRadius: '50%', width: '32px', height: '32px', padding: 0 }}
            >
              <i className="icofont-trash"></i>
            </button>
          </div>

          <div className="row g-2">
            {careTypes.map(type => {
              const schedule = plant.careSchedule[type];
              const daysUntil = getDaysUntilDue(schedule?.nextDue);
              const isOverdue = daysUntil !== null && daysUntil < 0;
              const isDueToday = daysUntil === 0;

              return (
                <div key={type} className="col-6">
                  <div
                    className={`p-2 rounded-3 ${isOverdue ? 'bg-danger bg-opacity-10' : isDueToday ? 'bg-warning bg-opacity-25' : 'bg-light'}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleMarkComplete(plant.id, type, plant.nickname || plant.name)}
                  >
                    <div className="d-flex align-items-center mb-1">
                      <i
                        className={getCareIcon(type)}
                        style={{ color: getCareColor(type), fontSize: '16px' }}
                      ></i>
                      <span className="ms-2 small text-capitalize">{type}</span>
                    </div>
                    <span className={`small ${isOverdue ? 'text-danger fw-bold' : 'text-muted'}`}>
                      {daysUntil !== null ? formatDate(schedule.nextDue) : 'Not set'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {plant.tips && (
            <div className="mt-3 p-2 bg-light rounded-3">
              <small className="text-muted">
                <i className="icofont-info-circle me-1"></i>
                {plant.tips}
              </small>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Plant Care Calendar - Track Watering & Care Schedules | Meri Bagiya"
        description="Free plant care calendar tool. Track watering, fertilizing, pruning, and repotting schedules. Get reminders for all your plants."
        keywords="plant care calendar, watering schedule, plant tracker, garden planner, plant reminder, fertilizing schedule"
        breadcrumbs={[
          { name: 'Home', url: 'https://meribagiya.com/' },
          { name: 'Tools', url: 'https://meribagiya.com/tools' },
          { name: 'Plant Care Calendar', url: 'https://meribagiya.com/tools/plant-care-calendar' }
        ]}
      />

      {/* Subheader */}
      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/6.webp" className="jarallax-img" alt="Plant Care Calendar" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li className="active">Plant Care Calendar</li>
              </ul>
              <h1>Plant Care Calendar</h1>
              <p>Free Tool</p>
            </div>
          </div>
        </div>
        <div className="de-overlay"></div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container">
          {/* Notification Banner */}
          {notificationStatus !== 'granted' && notificationStatus !== 'unsupported' && (
            <div className="alert alert-info d-flex align-items-center justify-content-between mb-4" role="alert">
              <div>
                <i className="icofont-alarm me-2"></i>
                Enable notifications to get reminders when your plants need care.
              </div>
              <button className="btn btn-primary btn-sm" onClick={handleRequestNotifications}>
                Enable Notifications
              </button>
            </div>
          )}

          {/* Header Actions */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
              <h3 className="mb-1">My Garden</h3>
              <p className="text-muted mb-0">{plants.length} plant(s) tracked</p>
            </div>
            <button
              className="btn btn-main"
              onClick={() => setShowAddModal(true)}
              style={{ borderRadius: '25px', padding: '10px 25px' }}
            >
              <i className="icofont-plus me-2"></i> Add Plant
            </button>
          </div>

          {/* Tabs */}
          <ul className="nav nav-pills mb-4" style={{ gap: '10px' }}>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'today' ? 'active' : ''}`}
                onClick={() => setActiveTab('today')}
                style={{
                  borderRadius: '25px',
                  backgroundColor: activeTab === 'today' ? '#4a7c59' : '#e9ecef',
                  color: activeTab === 'today' ? '#fff' : '#333'
                }}
              >
                Today
                {todayTasks.length > 0 && (
                  <span className="badge bg-danger ms-2">{todayTasks.length}</span>
                )}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'week' ? 'active' : ''}`}
                onClick={() => setActiveTab('week')}
                style={{
                  borderRadius: '25px',
                  backgroundColor: activeTab === 'week' ? '#4a7c59' : '#e9ecef',
                  color: activeTab === 'week' ? '#fff' : '#333'
                }}
              >
                This Week
                {weekTasks.length > 0 && (
                  <span className="badge bg-warning text-dark ms-2">{weekTasks.length}</span>
                )}
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'plants' ? 'active' : ''}`}
                onClick={() => setActiveTab('plants')}
                style={{
                  borderRadius: '25px',
                  backgroundColor: activeTab === 'plants' ? '#4a7c59' : '#e9ecef',
                  color: activeTab === 'plants' ? '#fff' : '#333'
                }}
              >
                My Plants
                <span className="badge bg-secondary ms-2">{plants.length}</span>
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="row">
            <div className="col-lg-8">
              {/* Today Tab */}
              {activeTab === 'today' && (
                <div>
                  {todayTasks.length === 0 ? (
                    <div className="text-center py-5">
                      <i className="icofont-check-circled" style={{ fontSize: '64px', color: '#4CAF50' }}></i>
                      <h4 className="mt-3">All caught up!</h4>
                      <p className="text-muted">No plant care tasks due today.</p>
                    </div>
                  ) : (
                    todayTasks.map((task, index) => (
                      <TaskCard key={`${task.plantId}-${task.careType}`} task={task} />
                    ))
                  )}
                </div>
              )}

              {/* Week Tab */}
              {activeTab === 'week' && (
                <div>
                  {weekTasks.length === 0 ? (
                    <div className="text-center py-5">
                      <i className="icofont-calendar" style={{ fontSize: '64px', color: '#4a7c59' }}></i>
                      <h4 className="mt-3">No tasks this week</h4>
                      <p className="text-muted">Add plants to start tracking their care schedules.</p>
                    </div>
                  ) : (
                    weekTasks.map((task, index) => (
                      <TaskCard key={`${task.plantId}-${task.careType}-${index}`} task={task} />
                    ))
                  )}
                </div>
              )}

              {/* Plants Tab */}
              {activeTab === 'plants' && (
                <div>
                  {plants.length === 0 ? (
                    <div className="text-center py-5">
                      <i className="icofont-flower-pot" style={{ fontSize: '64px', color: '#4a7c59' }}></i>
                      <h4 className="mt-3">No plants yet</h4>
                      <p className="text-muted">Add your first plant to start tracking care schedules.</p>
                      <button
                        className="btn btn-main"
                        onClick={() => setShowAddModal(true)}
                        style={{ borderRadius: '25px' }}
                      >
                        <i className="icofont-plus me-2"></i> Add Your First Plant
                      </button>
                    </div>
                  ) : (
                    <div className="row">
                      {plants.map(plant => (
                        <div key={plant.id} className="col-md-6">
                          <PlantCard plant={plant} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="icofont-info-circle me-2" style={{ color: '#4a7c59' }}></i>
                    Care Guide
                  </h5>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="icofont-water-drop me-2" style={{ color: '#2196F3' }}></i>
                      <strong>Watering</strong>
                    </div>
                    <small className="text-muted">Keep soil moist but not waterlogged. Adjust frequency based on season.</small>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="icofont-leaf me-2" style={{ color: '#4CAF50' }}></i>
                      <strong>Fertilizing</strong>
                    </div>
                    <small className="text-muted">Feed during spring and summer. Reduce or stop in winter.</small>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="icofont-cut me-2" style={{ color: '#FF9800' }}></i>
                      <strong>Pruning</strong>
                    </div>
                    <small className="text-muted">Remove dead leaves and trim for shape. Never cut more than 1/3.</small>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="icofont-flower-pot me-2" style={{ color: '#9C27B0' }}></i>
                      <strong>Repotting</strong>
                    </div>
                    <small className="text-muted">Repot when roots outgrow pot. Best done in spring.</small>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="icofont-light-bulb me-2" style={{ color: '#FFC107' }}></i>
                    Quick Tips
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Check soil before watering</small>
                    </li>
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Use lukewarm water</small>
                    </li>
                    <li className="mb-2">
                      <small><i className="icofont-check-circled text-success me-2"></i>Morning is best for watering</small>
                    </li>
                    <li>
                      <small><i className="icofont-check-circled text-success me-2"></i>Rotate plants for even growth</small>
                    </li>
                  </ul>
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
            onClick={() => setShowAddModal(false)}
          ></div>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content" style={{ borderRadius: '15px' }}>
                <div className="modal-header border-0">
                  <h5 className="modal-title">
                    <i className="icofont-plus me-2" style={{ color: '#4a7c59' }}></i>
                    Add Plant to Your Garden
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowAddModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Plant Selection */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Select Plant Type</label>
                    <div className="row g-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                      {plantTemplates.map(template => (
                        <div key={template.id} className="col-6 col-md-4">
                          <div
                            className={`card h-100 ${selectedTemplate?.id === template.id ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '10px' }}
                            onClick={() => setSelectedTemplate(template)}
                          >
                            <div className="card-body p-2 text-center">
                              <i className="icofont-plant" style={{ fontSize: '32px', color: '#4a7c59' }}></i>
                              <h6 className="mb-0 mt-2 small">{template.name}</h6>
                              <span className={`badge ${template.difficulty === 'Easy' ? 'bg-success' : template.difficulty === 'Medium' ? 'bg-warning text-dark' : 'bg-danger'}`} style={{ fontSize: '10px' }}>
                                {template.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedTemplate && (
                    <>
                      {/* Selected Plant Info */}
                      <div className="alert alert-success mb-4">
                        <strong>{selectedTemplate.name}</strong>
                        <p className="mb-0 small">{selectedTemplate.tips}</p>
                      </div>

                      {/* Nickname */}
                      <div className="mb-3">
                        <label className="form-label fw-bold">Give it a nickname (optional)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={`e.g., "Living Room ${selectedTemplate.name}"`}
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                          style={{ borderRadius: '10px' }}
                        />
                      </div>

                      {/* Location */}
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

                      {/* Care Schedule Preview */}
                      <div className="card bg-light border-0" style={{ borderRadius: '10px' }}>
                        <div className="card-body">
                          <h6 className="card-title">Default Care Schedule</h6>
                          <div className="row g-2">
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="icofont-water-drop me-1" style={{ color: '#2196F3' }}></i>
                                Water: Every {selectedTemplate.careSchedule.watering.frequency} days
                              </small>
                            </div>
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="icofont-leaf me-1" style={{ color: '#4CAF50' }}></i>
                                Fertilize: Every {selectedTemplate.careSchedule.fertilizing.frequency} days
                              </small>
                            </div>
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="icofont-cut me-1" style={{ color: '#FF9800' }}></i>
                                Prune: Every {selectedTemplate.careSchedule.pruning.frequency} days
                              </small>
                            </div>
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="icofont-flower-pot me-1" style={{ color: '#9C27B0' }}></i>
                                Repot: Every {Math.round(selectedTemplate.careSchedule.repotting.frequency / 365)} year(s)
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowAddModal(false)}
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
                    <i className="icofont-plus me-1"></i> Add Plant
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

export default PlantCareCalendar;
