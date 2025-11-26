// FoodWise AI Configuration
const AI_CONFIG = {
    API_KEY: '',
    API_URL: 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent'
};

// Easy API Key Update Function
function updateApiKey(newKey) {
    AI_CONFIG.API_KEY = newKey;
    console.log('✅ API Key Updated Successfully');

}
