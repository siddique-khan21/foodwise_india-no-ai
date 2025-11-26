// FoodWise AI Configuration
const AI_CONFIG = {
    API_KEY: 'AIzaSyBCFJq8Wm_QBgasPV0Q2XiMn9s2nje-8jw',
    API_URL: 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent'
};

// Easy API Key Update Function
function updateApiKey(newKey) {
    AI_CONFIG.API_KEY = newKey;
    console.log('✅ API Key Updated Successfully');
}