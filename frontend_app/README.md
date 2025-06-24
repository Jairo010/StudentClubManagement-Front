# Academic Management System - Frontend

A complete web application developed in Angular for comprehensive management of academic and university organizations.

## 📋 Description

This system allows efficient management of all aspects of an academic organization, including members, projects, events, competitions, talks, and more. The application is designed with a modern and user-friendly interface.

## ✨ Main Features

### 👥 Member Management
- Member registration and editing
- Complete member listing
- Assignment to clubs and projects

### 📚 Project Management
- Project creation and administration
- Task system and tracking
- Member assignment to projects

### 🏛️ Club Management
- University club administration
- Member management per club
- Activity tracking

### 🎯 Event and Competition Management
- Event scheduling
- Competition organization
- Participant registration
- Group and team management

### 🎤 Talk and Speaker Management
- Talk and presentation registration
- Speaker management
- Academic event scheduling

### 🏫 University Management
- University administration
- Participant management by institution

## 🛠️ Technologies Used

- **Framework**: Angular 17.3.0
- **UI Components**: Angular Material
- **Styling**: TailwindCSS + Angular Flex Layout
- **Scrolling**: ngx-perfect-scrollbar
- **Server-Side Rendering**: Angular SSR
- **Testing**: Jasmine + Karma

## 📦 Installation

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn
- Angular CLI 17.3.0

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd app_ForntEnd/frontend_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Review and configure `src/environments/environment.ts` for production
   - Review and configure `src/environments/environment.development.ts` for development

## 🚀 Execution

### Development server
```bash
npm run start
# or
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Production build
```bash
npm run build
# or
ng build
```
Build artifacts will be stored in the `dist/` directory.

### SSR execution
```bash
npm run serve:ssr:frontend_app
```

## 🧪 Testing

### Run unit tests
```bash
npm run test
# or
ng test
```

### Run in watch mode
```bash
npm run watch
```

## 📱 Features by Module

### Member Module
- `/registromiembros` - New member registration
- `/miembros` - Member list and management

### Project Module
- `/proyectos` - Project list
- `/registroproyectos` - Create new project
- `/registrotareas` - Create new task
- `/tareas` - Task management

### Club Module
- `/clubs-list` - Club list
- `/clubs-miembros` - Club members
- `/clubs` - Add new club

### Event Module
- `/eventos-generales` - General scheduling
- `/eventos` - Event list
- `/events` - Add events
- `/competitions-list` - Competition list
- `/competitions` - Add competitions

### Talk Module
- `/talkspeaker-list` - Presentation topics
- `/talks-list` - Talk list
- `/talks` - Add talks
- `/speakers-list` - Speaker list
- `/speakers` - Add speakers

### Participant Module
- `/group-list` - Group list
- `/competition-list` - Member list
- `/group-competition-list` - Groups in competitions
- `/group` - Add group
- `/university-list` - University list
- `/university` - Add university

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/                 # Core modules (header, menu, etc.)
│   ├── interfaces/           # TypeScript type definitions
│   ├── services/            # Application services
│   │   └── api_services/    # API services by module
│   ├── shared/              # Shared components
│   └── [modules]/           # Feature-specific components
├── assets/                  # Static resources (icons, images)
└── environments/           # Environment configurations
```

## 🔧 Configuration

### Environment Variables
Configure the following variables in environment files:
- Backend API base URL
- Authentication configurations
- Environment-specific settings

### Styling
The application uses:
- Angular Material for UI components
- TailwindCSS for styling utilities
- Custom CSS for specific styles

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request