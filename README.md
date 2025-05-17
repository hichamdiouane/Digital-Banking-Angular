# E-Banking Application

A modern, responsive web application for banking operations with a clean and intuitive user interface.

## Features

- **User Authentication**: Secure login and role-based access control
- **Dashboard**: Interactive dashboard with data visualizations using different chart types
- **Customer Management**: Add, view, and manage customer information
- **Account Management**: Create and manage different types of bank accounts
- **Transaction Processing**: Handle deposits, withdrawals, and transfers between accounts
- **Transaction History**: View detailed history of all account operations
- **Responsive Design**: Modern UI that works across desktop and mobile devices

## Technologies Used

- **Frontend**:
  - Angular
  - Angular Material UI
  - Chart.js for data visualization
  - Responsive CSS with variables and modern design principles

- **Backend**:
  - Spring Boot (Java)
  - Spring Security
  - Spring Data JPA
  - RESTful API architecture

## Design System

The application uses a modern design system with:

- **Color Scheme**:
  - Primary: #2563eb (Blue)
  - Success: #22c55e (Green)
  - Error: #ef4444 (Red)
  - Warning: #f59e0b (Orange)
  - Background: #f8fafc (Light Gray)
  - Surface: #ffffff (White)
  - Text: #1e293b (Dark Blue Gray)

- **Component Styling**:
  - Card-based layout with subtle shadows and hover effects
  - Consistent spacing and typography
  - Modern form controls with validation feedback
  - Responsive design principles throughout

- **Data Visualization**:
  - Doughnut charts for distribution data
  - Line charts for time-series data
  - Bar charts for comparative data
  - Polar area charts for categorical data

## Installation

### Prerequisites

- Node.js and npm
- Angular CLI

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-banking-frontend.git
cd e-banking-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Rename `src/environments/environment.sample.ts` to `environment.ts`
   - Update API endpoints and other configuration

4. Start the development server:
```bash
ng serve
```

5. Navigate to `http://localhost:4200/`

## Usage

1. **Login**: Use your credentials to access the system
2. **Dashboard**: View key statistics and data visualizations
3. **Customers**: Manage customer accounts and information
4. **Accounts**: Create and manage bank accounts
5. **Operations**: Process banking transactions (deposits, withdrawals, transfers)

## Project Structure

```
src/
├── app/
│   ├── accounts/       # Account management components
│   ├── admin-template/ # Admin layout template
│   ├── customers/      # Customer management components
│   ├── guards/         # Authentication guards
│   ├── home/           # Dashboard/home components
│   ├── interceptors/   # HTTP interceptors
│   ├── login/          # Authentication components
│   ├── model/          # Data models/interfaces
│   ├── navbar/         # Navigation components
│   ├── operations/     # Transaction operation components
│   ├── services/       # Application services
│   └── shared/         # Shared components and utilities
├── assets/             # Static assets
└── environments/       # Environment configurations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT License](LICENSE)