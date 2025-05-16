"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
const sampleEmployee = {
    name: {
        first: "Charlie",
        last: "Thompson"
    },
    email: "charlie.thompson@example.com",
    picture: {
        medium: "https://randomuser.me/api/portraits/med/men/40.jpg"
    }
};
app.get('/api/employees', (req, res) => {
    res.json({ results: [sampleEmployee] });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
