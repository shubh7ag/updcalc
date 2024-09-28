const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const features = {
    "E-commerce": {
        "Product Listing": 30,
        "Payment Integration": 25
    },
    "Social Media": {
        "User Profiles": 30,
        "Chat System": 40
    },
    "Cloud Kitchen": {
        "Menu Display": 25,
        "Online Ordering": 40
    }
};

app.post('/calculate', (req, res) => {
    const { category, selectedFeatures } = req.body;
    const hourlyRate = 10;
    let totalHours = 0;

    if (features[category]) {
        selectedFeatures.forEach(feature => {
            totalHours += features[category][feature] || 0;
        });
    }

    const totalCost = totalHours * hourlyRate;
    res.json({ totalCost });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
