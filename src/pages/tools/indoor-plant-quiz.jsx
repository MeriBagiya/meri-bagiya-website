import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ToolWhatsAppCTA from '../../components/tools/ToolWhatsAppCTA';
import ToolRelatedServices from '../../components/tools/ToolRelatedServices';
import ToolMoreTools from '../../components/tools/ToolMoreTools';
import { trackEvent } from '../../utils/analytics';

const plantDatabase = [
  { name: 'Snake Plant', scientificName: 'Sansevieria', image: '/assets/images/plants/snake-plant.jpg', difficulty: 'Easy', light: ['low', 'indirect', 'bright'], water: 'low', petSafe: false, benefits: ['air-purification', 'low-maintenance'], price: 'budget', tags: ['bedroom', 'office', 'bathroom'] },
  { name: 'Peace Lily', scientificName: 'Spathiphyllum', image: '/assets/images/plants/peace-lily.jpg', difficulty: 'Easy', light: ['low', 'indirect'], water: 'medium', petSafe: false, benefits: ['air-purification', 'flowers'], price: 'budget', tags: ['bedroom', 'living', 'bathroom'] },
  { name: 'Spider Plant', scientificName: 'Chlorophytum', image: '/assets/images/plants/spider-plant.jpg', difficulty: 'Easy', light: ['indirect', 'bright'], water: 'medium', petSafe: true, benefits: ['air-purification', 'low-maintenance'], price: 'budget', tags: ['living', 'office', 'bedroom'] },
  { name: 'Pothos', scientificName: 'Epipremnum aureum', image: '/assets/images/plants/pothos.jpg', difficulty: 'Easy', light: ['low', 'indirect', 'bright'], water: 'low', petSafe: false, benefits: ['air-purification', 'low-maintenance', 'visual'], price: 'budget', tags: ['living', 'office', 'bathroom', 'balcony'] },
  { name: 'Monstera', scientificName: 'Monstera deliciosa', image: '/assets/images/plants/monstera.jpg', difficulty: 'Medium', light: ['indirect', 'bright'], water: 'medium', petSafe: false, benefits: ['visual', 'air-purification'], price: 'mid', tags: ['living', 'bedroom'] },
  { name: 'Rubber Plant', scientificName: 'Ficus elastica', image: '/assets/images/plants/rubber-plant.jpg', difficulty: 'Easy', light: ['indirect', 'bright'], water: 'medium', petSafe: false, benefits: ['air-purification', 'visual'], price: 'mid', tags: ['living', 'office'] },
  { name: 'Jade Plant', scientificName: 'Crassula ovata', image: '/assets/images/plants/jade-plant.jpg', difficulty: 'Easy', light: ['bright', 'direct'], water: 'low', petSafe: false, benefits: ['low-maintenance', 'visual'], price: 'budget', tags: ['balcony', 'office', 'living'] },
  { name: 'Areca Palm', scientificName: 'Dypsis lutescens', image: '/assets/images/plants/areca-palm.jpg', difficulty: 'Medium', light: ['indirect', 'bright'], water: 'medium', petSafe: true, benefits: ['air-purification', 'visual'], price: 'mid', tags: ['living', 'office', 'balcony'] },
  { name: 'Aloe Vera', scientificName: 'Aloe barbadensis', image: '/assets/images/plants/aloe-vera.jpg', difficulty: 'Easy', light: ['bright', 'direct'], water: 'low', petSafe: false, benefits: ['low-maintenance', 'air-purification'], price: 'budget', tags: ['balcony', 'bedroom', 'office'] },
  { name: 'ZZ Plant', scientificName: 'Zamioculcas zamiifolia', image: '/assets/images/plants/zz-plant.jpg', difficulty: 'Easy', light: ['low', 'indirect'], water: 'low', petSafe: false, benefits: ['low-maintenance', 'air-purification'], price: 'mid', tags: ['office', 'bedroom', 'living'] },
  { name: 'Tulsi (Holy Basil)', scientificName: 'Ocimum tenuiflorum', image: '/assets/images/plants/tulsi.jpg', difficulty: 'Easy', light: ['bright', 'direct'], water: 'medium', petSafe: true, benefits: ['air-purification', 'flowers'], price: 'budget', tags: ['balcony', 'living'] },
  { name: 'Jasmine', scientificName: 'Jasminum', image: '/assets/images/plants/jasmine.jpg', difficulty: 'Medium', light: ['bright', 'direct'], water: 'medium', petSafe: true, benefits: ['flowers', 'visual'], price: 'mid', tags: ['balcony', 'living'] },
  { name: 'Boston Fern', scientificName: 'Nephrolepis exaltata', image: '/assets/images/plants/boston-fern.jpg', difficulty: 'Medium', light: ['indirect'], water: 'high', petSafe: true, benefits: ['air-purification', 'visual'], price: 'mid', tags: ['bathroom', 'living', 'balcony'] },
  { name: 'Fiddle Leaf Fig', scientificName: 'Ficus lyrata', image: '/assets/images/plants/fiddle-leaf-fig.jpg', difficulty: 'Hard', light: ['bright', 'indirect'], water: 'medium', petSafe: false, benefits: ['visual'], price: 'premium', tags: ['living'] },
  { name: 'Bird of Paradise', scientificName: 'Strelitzia', image: '/assets/images/plants/bird-of-paradise.jpg', difficulty: 'Medium', light: ['bright', 'direct'], water: 'medium', petSafe: false, benefits: ['visual', 'flowers'], price: 'premium', tags: ['living', 'balcony'] },
];

const questions = [
  {
    id: 'location',
    question: 'Where do you want to place plants?',
    options: [
      { label: 'Bedroom', value: 'bedroom', icon: 'icofont-bed' },
      { label: 'Living Room', value: 'living', icon: 'icofont-ui-home' },
      { label: 'Balcony', value: 'balcony', icon: 'icofont-sun' },
      { label: 'Office Desk', value: 'office', icon: 'icofont-laptop' },
      { label: 'Bathroom', value: 'bathroom', icon: 'icofont-water-drop' },
    ]
  },
  {
    id: 'light',
    question: 'How much natural light does the space get?',
    options: [
      { label: 'Bright Direct Sunlight (4+ hours)', value: 'direct' },
      { label: 'Bright Indirect Light', value: 'indirect' },
      { label: 'Low Light (near window, filtered)', value: 'low' },
      { label: 'Very Low / No Sunlight', value: 'none' },
    ]
  },
  {
    id: 'water',
    question: 'How often can you water?',
    options: [
      { label: 'Daily', value: 'daily' },
      { label: '2-3 times a week', value: 'moderate' },
      { label: 'Once a week', value: 'weekly' },
      { label: 'I often forget', value: 'forget' },
    ]
  },
  {
    id: 'pets',
    question: 'Do you have pets or small children?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ]
  },
  {
    id: 'experience',
    question: "What's your gardening experience?",
    options: [
      { label: 'Complete Beginner', value: 'beginner' },
      { label: 'Some Experience', value: 'intermediate' },
      { label: 'Expert', value: 'expert' },
    ]
  },
  {
    id: 'priority',
    question: 'What matters most to you?',
    options: [
      { label: 'Air Purification', value: 'air-purification' },
      { label: 'Visual Beauty', value: 'visual' },
      { label: 'Low Maintenance', value: 'low-maintenance' },
      { label: 'Flowers & Fragrance', value: 'flowers' },
    ]
  },
  {
    id: 'budget',
    question: 'Your budget per plant?',
    options: [
      { label: 'Budget-friendly (under \u20B9500)', value: 'budget' },
      { label: 'Mid-range (\u20B9500-\u20B91,500)', value: 'mid' },
      { label: 'Premium (\u20B91,500+)', value: 'premium' },
    ]
  },
];

const faqItems = [
  {
    question: 'What are the best indoor plants for beginners?',
    answer: 'Snake Plant, Pothos, Spider Plant, and ZZ Plant are excellent choices for beginners. These plants are hardy, tolerate neglect, and require minimal care. They can survive in low light conditions and need watering only once a week or less.'
  },
  {
    question: 'Which indoor plants purify air best?',
    answer: 'Snake Plant, Peace Lily, Spider Plant, and Areca Palm are among the best air-purifying indoor plants, as recommended by NASA\'s Clean Air Study. They effectively remove toxins like formaldehyde, benzene, and xylene from indoor air.'
  },
  {
    question: 'Are there pet-safe indoor plants?',
    answer: 'Yes! Spider Plant, Areca Palm, Boston Fern, Jasmine, and Tulsi are all safe for pets and children. Always verify before bringing a new plant home, as many common houseplants like Pothos and Peace Lily can be toxic to cats and dogs.'
  },
  {
    question: 'How often should I water indoor plants?',
    answer: 'It depends on the species, pot size, and environment. Most indoor plants need watering every 5-7 days. Succulents and snake plants can go 2 weeks between watering. Always check the top inch of soil \u2014 if it\'s dry, it\'s time to water. Use our quiz to get personalized care info for each recommended plant.'
  }
];

const relatedServices = [
  { name: 'Indoor Plants', icon: 'icofont-leaf', color: '#4caf50', link: '/services/indoor-plants' },
  { name: 'Plant Rental Home', icon: 'icofont-home', color: '#2196f3', link: '/services/plant-rental-home' },
  { name: 'Plant Care Calendar', icon: 'icofont-calendar', color: '#ff9800', link: '/tools/plant-care-calendar' },
];

const accentColor = '#673ab7';

function getMatchReasons(plant, answers) {
  const reasons = [];

  if (plant.tags.includes(answers.location)) {
    const locationLabels = { bedroom: 'Bedroom', living: 'Living Room', balcony: 'Balcony', office: 'Office', bathroom: 'Bathroom' };
    reasons.push(`Great fit for your ${locationLabels[answers.location] || answers.location}`);
  }

  if (answers.pets === 'yes' && plant.petSafe) {
    reasons.push('Safe for pets and children');
  }

  if (plant.benefits.includes(answers.priority)) {
    const priorityLabels = { 'air-purification': 'excellent air purification', 'visual': 'stunning visual appeal', 'low-maintenance': 'very low maintenance', 'flowers': 'beautiful flowers and fragrance' };
    reasons.push(`Known for ${priorityLabels[answers.priority]}`);
  }

  if (plant.difficulty === 'Easy' && answers.experience === 'beginner') {
    reasons.push('Perfect for beginners');
  }

  if ((answers.water === 'forget' || answers.water === 'weekly') && plant.water === 'low') {
    reasons.push('Tolerates infrequent watering');
  }

  return reasons.slice(0, 3);
}

function calculateScores(answers) {
  return plantDatabase.map(plant => {
    let score = 0;

    // Location match (+3)
    if (plant.tags.includes(answers.location)) {
      score += 3;
    }

    // Light match (+3)
    const lightMapping = {
      direct: ['direct', 'bright'],
      indirect: ['indirect'],
      low: ['indirect', 'low'],
      none: ['low']
    };
    const userLightValues = lightMapping[answers.light] || [];
    if (userLightValues.some(l => plant.light.includes(l))) {
      score += 3;
    }

    // Water match (+2)
    const waterCompatible = {
      daily: ['low', 'medium', 'high'],
      moderate: ['medium', 'high'],
      weekly: ['medium', 'low'],
      forget: ['low']
    };
    const compatibleWater = waterCompatible[answers.water] || [];
    if (compatibleWater.includes(plant.water)) {
      score += 2;
    }

    // Pet safety (+3 or -5)
    if (answers.pets === 'yes') {
      if (plant.petSafe) {
        score += 3;
      } else {
        score -= 5;
      }
    }

    // Experience match (+2)
    const expMatch = {
      beginner: ['Easy'],
      intermediate: ['Easy', 'Medium'],
      expert: ['Easy', 'Medium', 'Hard']
    };
    const allowedDifficulties = expMatch[answers.experience] || [];
    if (allowedDifficulties.includes(plant.difficulty)) {
      score += 2;
    }

    // Benefit/priority match (+2)
    if (plant.benefits.includes(answers.priority)) {
      score += 2;
    }

    // Budget match (+1)
    if (plant.price === answers.budget) {
      score += 1;
    }

    return { ...plant, score };
  }).sort((a, b) => b.score - a.score).slice(0, 5);
}

function getDifficultyColor(difficulty) {
  if (difficulty === 'Easy') return '#28a745';
  if (difficulty === 'Medium') return '#ffc107';
  return '#dc3545';
}

function getLightLabel(lightArr) {
  if (lightArr.includes('direct')) return 'Direct Sunlight';
  if (lightArr.includes('bright')) return 'Bright Light';
  if (lightArr.includes('indirect')) return 'Indirect Light';
  return 'Low Light';
}

function getWaterLabel(water) {
  if (water === 'low') return 'Low (weekly)';
  if (water === 'medium') return 'Moderate (2-3x/week)';
  return 'High (daily)';
}

function getPriceLabel(price) {
  if (price === 'budget') return 'Under \u20B9500';
  if (price === 'mid') return '\u20B9500-\u20B91,500';
  return '\u20B91,500+';
}

function IndoorPlantQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const progress = showResults ? 100 : Math.round((currentStep / questions.length) * 100);

  const handleOptionSelect = (questionId, value) => {
    setSelectedOption(value);
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    trackEvent('quiz_answer', { tool_name: 'indoor_plant_quiz', question: questionId, answer: value });

    setTimeout(() => {
      setSelectedOption(null);
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResults(true);
        trackEvent('quiz_complete', { tool_name: 'indoor_plant_quiz' });
      }
    }, 300);
  };

  const handleRetake = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(null);
    trackEvent('quiz_retake', { tool_name: 'indoor_plant_quiz' });
  };

  const handleGoBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const results = showResults ? calculateScores(answers) : [];

  const getWhatsAppMessage = () => {
    if (!showResults || results.length === 0) {
      return "Hi! I'm taking the indoor plant quiz and need personalized recommendations.";
    }
    const plantNames = results.map(p => p.name).join(', ');
    return `Hi! I took the Indoor Plant Quiz on Meri Bagiya and got these recommendations:\n\n${plantNames}\n\nI'd like to know more about availability and pricing.`;
  };

  const getBuyWhatsAppMessage = (plantName) => {
    return `Hi! I'd like to buy a ${plantName}. I found it through the Indoor Plant Quiz on Meri Bagiya. Please share availability and price.`;
  };

  const getRentWhatsAppMessage = (plantName) => {
    return `Hi! I'd like to rent a ${plantName}. I found it through the Indoor Plant Quiz on Meri Bagiya. Please share rental plans.`;
  };

  return (
    <>
      <SEO
        title="Indoor Plant Recommendation Quiz - Find Your Perfect Plant"
        description="Take our free quiz to find the best indoor plants for your space. Answer 7 questions about light, space, and preferences to get personalized plant recommendations."
        keywords="best indoor plants for bedroom India, low maintenance indoor plants, indoor plant quiz, air purifying plants"
        canonicalUrl="/tools/indoor-plant-quiz"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
          { name: 'Indoor Plant Quiz', url: '/tools/indoor-plant-quiz' }
        ]}
        faqItems={faqItems}
      />

      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/6.webp" className="jarallax-img" alt="Indoor Plant Recommendation Quiz" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li className="active">Indoor Plant Quiz</li>
              </ul>
              <h1>Indoor Plant Recommendation Quiz</h1>
              <p>Answer 7 quick questions to find your perfect indoor plants</p>
            </div>
          </div>
        </div>
        <div className="de-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted fw-bold">
                    {showResults ? 'Results' : `Question ${currentStep + 1} of ${questions.length}`}
                  </small>
                  <small className="text-muted">{progress}% complete</small>
                </div>
                <div className="progress" style={{ height: '8px', borderRadius: '10px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%`, backgroundColor: accentColor, borderRadius: '10px', transition: 'width 0.4s ease' }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* Quiz Questions */}
              {!showResults && (
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-4">
                    {currentStep > 0 && (
                      <button
                        className="btn btn-sm btn-outline-secondary mb-3"
                        onClick={handleGoBack}
                        style={{ borderRadius: '20px' }}
                      >
                        <i className="icofont-arrow-left me-1"></i>
                        Back
                      </button>
                    )}

                    <h4 className="mb-4" style={{ color: accentColor }}>
                      <span className="badge me-2" style={{ backgroundColor: accentColor }}>{currentStep + 1}</span>
                      {questions[currentStep].question}
                    </h4>

                    <div className="row g-3">
                      {questions[currentStep].options.map((option) => (
                        <div key={option.value} className={questions[currentStep].options.length <= 3 ? 'col-12 col-md-4' : 'col-12 col-md-6'}>
                          <div
                            className={`card h-100 ${selectedOption === option.value ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              borderColor: selectedOption === option.value ? accentColor : undefined,
                              backgroundColor: selectedOption === option.value ? 'rgba(103, 58, 183, 0.08)' : undefined,
                              transform: selectedOption === option.value ? 'scale(0.98)' : undefined,
                            }}
                            onClick={() => handleOptionSelect(questions[currentStep].id, option.value)}
                          >
                            <div className="card-body p-3 d-flex align-items-center">
                              {option.icon && (
                                <i
                                  className={`${option.icon} me-3`}
                                  style={{
                                    fontSize: '28px',
                                    color: selectedOption === option.value ? accentColor : '#6c757d',
                                    flexShrink: 0
                                  }}
                                ></i>
                              )}
                              <div>
                                <h6 className="mb-0" style={{ fontSize: '15px', color: selectedOption === option.value ? accentColor : undefined }}>
                                  {option.label}
                                </h6>
                              </div>
                              {selectedOption === option.value && (
                                <i className="icofont-check-circled ms-auto" style={{ color: accentColor, fontSize: '20px', flexShrink: 0 }}></i>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Results */}
              {showResults && results.length > 0 && (
                <>
                  <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px', borderLeft: `4px solid ${accentColor}` }}>
                    <div className="card-body p-4">
                      <div className="text-center mb-4">
                        <i className="icofont-plant" style={{ fontSize: '48px', color: accentColor }}></i>
                        <h3 className="mt-2" style={{ color: accentColor }}>Your Perfect Plants</h3>
                        <p className="text-muted">Based on your answers, here are our top 5 recommendations for you.</p>
                      </div>

                      {results.map((plant, index) => {
                        const reasons = getMatchReasons(plant, answers);
                        return (
                          <div
                            key={index}
                            className="card mb-3 border"
                            style={{ borderRadius: '12px', overflow: 'hidden' }}
                          >
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img
                                  src={plant.image}
                                  alt={plant.name}
                                  className="w-100 h-100"
                                  style={{ objectFit: 'cover', minHeight: '200px' }}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/assets/images/plants/default-plant.jpg';
                                  }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body p-3">
                                  <div className="d-flex justify-content-between align-items-start mb-2">
                                    <div>
                                      <h5 className="mb-0">{plant.name}</h5>
                                      <small className="text-muted fst-italic">{plant.scientificName}</small>
                                    </div>
                                    <span
                                      className="badge"
                                      style={{
                                        backgroundColor: getDifficultyColor(plant.difficulty),
                                        fontSize: '11px'
                                      }}
                                    >
                                      {plant.difficulty}
                                    </span>
                                  </div>

                                  {/* Care Icons */}
                                  <div className="d-flex gap-3 mb-2">
                                    <small className="text-muted">
                                      <i className="icofont-sun me-1" style={{ color: '#ffc107' }}></i>
                                      {getLightLabel(plant.light)}
                                    </small>
                                    <small className="text-muted">
                                      <i className="icofont-water-drop me-1" style={{ color: '#2196f3' }}></i>
                                      {getWaterLabel(plant.water)}
                                    </small>
                                  </div>

                                  {/* Match Reasons */}
                                  {reasons.length > 0 && (
                                    <ul className="list-unstyled mb-2">
                                      {reasons.map((reason, rIdx) => (
                                        <li key={rIdx} className="small mb-1">
                                          <i className="icofont-check-circled me-1" style={{ color: '#28a745' }}></i>
                                          {reason}
                                        </li>
                                      ))}
                                    </ul>
                                  )}

                                  {/* Price Badge */}
                                  <span className="badge bg-light text-dark border mb-3" style={{ fontSize: '11px' }}>
                                    <i className="icofont-price me-1"></i>
                                    {getPriceLabel(plant.price)}
                                  </span>

                                  {/* CTA Buttons */}
                                  <div className="d-flex gap-2 flex-wrap">
                                    <a
                                      href={`https://wa.me/919220404309?text=${encodeURIComponent(getBuyWhatsAppMessage(plant.name))}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-sm btn-success"
                                      style={{ borderRadius: '20px', fontSize: '12px' }}
                                      onClick={() => trackEvent('generate_lead', { tool_name: 'indoor_plant_quiz', action: 'buy', plant: plant.name })}
                                    >
                                      <i className="icofont-whatsapp me-1"></i>
                                      Buy This Plant
                                    </a>
                                    <a
                                      href={`https://wa.me/919220404309?text=${encodeURIComponent(getRentWhatsAppMessage(plant.name))}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-sm btn-outline-success"
                                      style={{ borderRadius: '20px', fontSize: '12px' }}
                                      onClick={() => trackEvent('generate_lead', { tool_name: 'indoor_plant_quiz', action: 'rent', plant: plant.name })}
                                    >
                                      <i className="icofont-whatsapp me-1"></i>
                                      Rent This Plant
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Overall WhatsApp CTA */}
                      <div className="text-center mt-4 p-4 rounded-3" style={{ backgroundColor: 'rgba(103, 58, 183, 0.06)' }}>
                        <h5 style={{ color: accentColor }}>Want All These Plants?</h5>
                        <p className="text-muted small mb-3">Chat with us on WhatsApp to get all 5 plants delivered to your doorstep.</p>
                        <a
                          href={`https://wa.me/919220404309?text=${encodeURIComponent(getWhatsAppMessage())}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-lg text-white"
                          style={{ borderRadius: '25px', padding: '12px 30px', backgroundColor: accentColor }}
                          onClick={() => trackEvent('generate_lead', { tool_name: 'indoor_plant_quiz', action: 'buy_all' })}
                        >
                          <i className="icofont-whatsapp me-2"></i>
                          Get All 5 Plants
                        </a>
                      </div>

                      {/* Retake Button */}
                      <div className="text-center mt-3">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={handleRetake}
                          style={{ borderRadius: '25px', padding: '10px 25px' }}
                        >
                          <i className="icofont-refresh me-2"></i>
                          Retake Quiz
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <ToolWhatsAppCTA
                title="Need Plant Advice?"
                description="Our plant experts can help you choose the perfect indoor plants for your space."
                whatsappMessage="Hi! I'm taking the indoor plant quiz and need personalized recommendations."
              />

              {/* Quick Tips */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-light-bulb me-2" style={{ color: accentColor }}></i>
                    Quick Tips
                  </h5>
                  <ul className="list-unstyled small mb-0">
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Water plants in the morning</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Rotate plants weekly for even growth</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Clean leaves monthly to remove dust</li>
                    <li><i className="icofont-check-circled text-success me-2"></i>Don't overwater — check soil first</li>
                  </ul>
                </div>
              </div>

              <ToolRelatedServices services={relatedServices} />
              <ToolMoreTools currentTool="indoor-plant-quiz" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="text-center mb-4">Frequently Asked Questions</h3>
              <div className="accordion" id="faqAccordion">
                {faqItems.map((faq, index) => (
                  <div key={index} className="accordion-item border-0 mb-2" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`faq${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Ready to Green Up Your Space?</h3>
              <p className="mb-0">Browse our full collection of indoor plants or get expert advice from our team.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/services/indoor-plants" className="btn btn-main" style={{ borderRadius: '25px' }}>
                <i className="icofont-leaf me-2"></i>Browse Indoor Plants
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndoorPlantQuiz;
