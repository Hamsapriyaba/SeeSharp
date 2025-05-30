###👁️‍🗨️ SeeSharp — Object Detection AI for the Visually Impaired
SeeSharp is a web application designed to enhance accessibility for individuals with visual impairments by leveraging advanced object detection technology. Users can upload an image or capture one via webcam, and SeeSharp identifies the objects present. These are then spoken aloud using text-to-speech, allowing users to better understand and interact with their surroundings.

Features:
🔍 Real-time object detection powered by YOLOv3
🖼️ Image upload and live webcam capture support
🔊 Spoken feedback using the Web Speech API
⚡ Fast and responsive UI with React and Tailwind CSS
🌐 Lightweight backend with Flask

🛠️ Tech Stack
Frontend: React, Tailwind CSS, Web Speech API
Backend: Flask (Python)
AI Model: YOLOv3 (You Only Look Once)

📦 Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/SeeSharp.git
cd SeeSharp

2. Download YOLOv3 Weights
You need the pre-trained YOLOv3 weights to run object detection.
📥 Download yolov3.weights from Kaggle (or another trusted source), and place it in the backend/model/ directory.
Also ensure the following files are present in the same directory:
yolov3.cfg
coco.names



