# SheSafe
SheSafe is a user-friendly safety assurance platform designed specifically to support women's safety in real-time. The platform provides a suite of safety features that are accessible and intuitive, offering reassurance and rapid response options in potentially dangerous situations. Key functionalities include an emergency help button, voice-activated assistance, hand signal recognition, real-time location tracking, journey planning, and story sharing for raising awareness.

## Key Features

### 1. Help Me Button
The **Help Me Button** feature allows users to send an immediate alert in case of an emergency. When pressed:
   - The platform identifies the user’s live location and sends it to emergency contacts.
   - A message is automatically sent to emergency contacts, and a call to the Women’s Helpline is initiated.
   - The incident count of the user’s current location is incremented, which helps the platform track frequently unsafe areas.

### 2. Voice Help
The **Voice Help** feature enables users to activate an emergency alert through voice commands.
   - The voice detection functionality identifies a pre-set help command.
   - Upon detection, an alert is triggered similarly to the Help Me Button, notifying emergency contacts and updating the incident location count.

### 3. Help Hand
The **Help Hand** feature allows users to signal for help using a hand gesture.
   - The gesture detection system recognizes specific hand signals indicating distress.
   - Once detected, an alert is sent to emergency contacts, and the incident location count is updated to reflect potential safety issues at that location.

### 4. Share My Story
The **Share My Story** feature enables users to share their experiences to raise awareness about unsafe areas or incidents. It includes:
   - **Written Narration**: Users can write a description of their experience.
   - **Audio Narration**: Users can record an audio message, which is converted to text if needed.
   - Users can select the location related to the story, mark it, and upload it to the platform to inform others.

### 5. Locate Me
The **Locate Me** feature offers real-time location tracking.
   - This feature identifies the user’s current location and continuously monitors the surroundings.
   - It checks the frequency of reported incidents in the user’s location. If an area is deemed dangerous based on incident frequency, a warning message is sent to the user to alert them to potential risks nearby.

### 6. Plan My Journey
The **Plan My Journey** feature helps users plan safe travel routes.
   - Users can check maps of their intended path to identify potentially dangerous areas along the way.
   - The platform provides guidelines and tips for using SheSafe’s safety tools effectively while traveling.

### 7. **Safety Pulse**
- Users contribute real-time safety insights about locations.
- Allows reporting of incidents, potential threats, and safety ratings.
- Community-driven feedback builds a collective map of safe and unsafe zones.
- Helps alert users about high-risk areas.
- Enhances overall community safety.

### 8. **SafeScore**
- Users review and rate areas based on their safety experience.
- Contributes to a cumulative safety score for each location.
- Helps others make informed decisions about routes and destinations.
- Promotes a proactive approach to personal safety.

## System Architecture

SheSafe follows a modular system architecture with the following core components:

1. **Frontend**: Built with **React** for an interactive and responsive user interface. **Bootstrap** is used to style components and ensure consistency across the platform.

2. **Backend**: A **Django** server handles request routing, user authentication, and interaction with the database.

3. **Database**: Uses **PostgreSQL** to store user data, incident reports, emergency contact information, and user-shared stories.

4. **Location Services**: Integrated to provide real-time tracking and location identification, which is critical for alerting users of unsafe areas and sending help messages.

5. **Voice and Gesture Recognition**: Utilizes AI/ML libraries or third-party services for real-time voice and gesture detection.

## Getting Started

To set up SheSafe locally, follow these instructions:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/SheSafe.git
   cd SheSafe
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the application**
   ```bash
   npm run dev
   ```

## How to Use SheSafe

### Accessing the Help Features

- Users can press the **Help Me Button** in emergencies, which sends their live location to emergency contacts.
- Users can activate **Voice Help** by saying a preset command, and **Help Hand** by performing a pre-identified hand gesture.

### Tracking Location

- The **Locate Me** feature allows real-time location tracking, alerting users if they are in areas with high incident frequencies.

### Sharing Stories

- Users can share their experiences by choosing **Share My Story** and submitting either a written or audio narration of their experience.

### Planning Safe Routes

- The **Plan My Journey** feature enables users to check the map for potentially dangerous areas, making it easier to plan a safe route.

## Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For styling the platform to create a consistent, user-friendly layout.
- **Django**: For the backend server to handle requests.
- **PostgreSQL**: For data storage.
- **Location Services**: Integrated to facilitate real-time tracking and location identification.
- **AI/ML Libraries**: Used for voice and gesture detection.

## Future Enhancements

1. **AI-based Threat Detection**: Implementing AI algorithms to better analyze and predict unsafe situations.
3. **Multi-language Support**: Expanding accessibility by offering features in multiple languages.
4. **Enhanced Incident Analysis**: Integrating data analytics to provide insights on high-risk areas based on user reports and frequency data.

