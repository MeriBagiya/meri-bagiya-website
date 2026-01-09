import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import toast from 'react-hot-toast';

function PlantDiseaseIdentifier() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreview(null);
      toast.error('Please select an image file.');
    }
  };

  const handleIdentify = async () => {
    if (!selectedFile) {
      toast.error('Please select an image to identify.');
      return;
    }

    setLoading(true);
    setResult(null);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = async () => {
      const base64Image = reader.result.split(',')[1];

      try {
        const response = await fetch('/api/identify-disease', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: base64Image }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        setResult(responseData.diseases);
        setLoading(false);
        toast.success('Identification complete!');
      } catch (error) {
        console.error('Error identifying plant disease:', error);
        setLoading(false);
        toast.error('Failed to identify plant disease. Please try again.');
      }
    };
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
    setLoading(false);
  };

  return (
    <>
      <SEO
        title="Plant Disease Identifier - AI-Powered Tool | Meri Bagiya"
        description="Upload a photo of your plant to identify diseases with our AI-powered tool. Get instant results and care recommendations."
        keywords="plant disease identifier, plant disease checker, identify plant problems, leaf spot, plant health"
        breadcrumbs={[
          { name: 'Home', url: 'https://meribagiya.com/' },
          { name: 'Tools', url: 'https://meribagiya.com/tools' },
          { name: 'Plant Disease Identifier', url: 'https://meribagiya.com/tools/plant-disease-identifier' }
        ]}
      />

      {/* Subheader */}
      <section
        id="subheader"
        className="jarallax text-light"
        style={{ backgroundImage: 'url(/assets/images/background/subheader-green.webp)' }}
      >
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-12">
              <div className="subtitle wow fadeInUp mb-3">AI-Powered Tool</div>
              <h1 className="wow fadeInUp" data-wow-delay=".2s">Plant Disease Identifier</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container">
        <ul className="crumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li className="active">Plant Disease Identifier</li>
        </ul>
      </div>

      {/* Main Content */}
      <section className="pt-0">
        <div className="container">
          <div className="row">
            {/* Upload Section */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="card-title mb-4">Upload Plant Image</h4>
                  <div
                    className="mb-3 text-center p-4 border-2 border-dashed"
                    style={{ borderRadius: '10px', backgroundColor: '#f8f9fa' }}
                  >
                    <input
                      type="file"
                      id="file-upload"
                      className="d-none"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      className="btn btn-main mb-3"
                      style={{ borderRadius: '25px', cursor: 'pointer' }}
                    >
                      <i className="icofont-upload-alt me-2"></i> Choose Image
                    </label>
                    {preview && (
                      <div className="mt-3">
                        <img
                          src={preview}
                          alt="Selected Plant"
                          style={{ maxHeight: '200px', maxWidth: '100%', borderRadius: '10px' }}
                        />
                      </div>
                    )}
                    <p className="text-muted small mb-0 mt-2">
                      For best results, use a clear image of the affected leaf or area.
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-success"
                      onClick={handleIdentify}
                      disabled={!selectedFile || loading}
                      style={{ borderRadius: '25px', padding: '12px' }}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Identifying...
                        </>
                      ) : (
                        <>
                          <i className="icofont-search-2 me-2"></i> Identify Disease
                        </>
                      )}
                    </button>
                    <button className="btn btn-secondary" onClick={handleReset} style={{ borderRadius: '25px', padding: '12px' }}>
                      <i className="icofont-refresh me-2"></i> Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="card-title mb-4">Identification Results</h4>
                  {loading && (
                    <div className="text-center">
                      <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-3 text-muted">Analyzing your plant...</p>
                    </div>
                  )}
                  {!loading && !result && (
                    <div className="text-center py-5">
                      <i className="icofont-search-alt-1" style={{ fontSize: '64px', color: '#4a7c59' }}></i>
                      <p className="mt-3 text-muted">Results will be displayed here.</p>
                    </div>
                  )}
                  {result && (
                    <div>
                      {result.map((item, index) => (
                        <div key={index} className={`card mb-3 ${index === 0 ? 'border-success' : 'border-light'}`}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <h5 className={`card-title ${index === 0 ? 'text-success' : ''}`}>
                                {item.name}
                              </h5>
                              <span className={`badge ${index === 0 ? 'bg-success' : 'bg-secondary'}`}>
                                Confidence: {Math.round(item.probability * 100)}%
                              </span>
                            </div>
                            <p className="card-text text-muted small">{item.disease_details.description}</p>
                            {index === 0 && (
                              <a href={item.disease_details.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success">
                                Learn More & Get Care Tips
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default PlantDiseaseIdentifier;
