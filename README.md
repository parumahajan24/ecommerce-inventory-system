# E-Commerce Inventory Management System

A serverless e-commerce inventory management system built with AWS and React.

## Architecture Overview

### Backend (AWS Serverless)
- **API Gateway**: RESTful API endpoints
- **Lambda Functions**: Serverless compute
- **DynamoDB**: NoSQL database for products, inventory, and orders
- **CloudWatch**: Monitoring and alerts
- **S3**: Static assets and reports storage

### Frontend (React / Might use Next.js)
- **React**: UI library
- **Redux**: State management
- **Material-UI**: Component library
- **Chart.js**: Analytics visualization

## Core Features

### Product Management
- Create, read, update, and delete products
- Manage product categories and attributes
- Track price history
- Bulk product operations

### Inventory Control
- Real-time stock tracking across locations
- Automated low stock notifications
- Batch inventory updates
- Historical stock level tracking
- Stock movement audit trail

### Order Processing
- Order creation and validation workflow
- Real-time order status tracking
- Automated inventory adjustments
- Comprehensive order history
- Customer information management

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- AWS Account with appropriate permissions
- AWS CLI configured locally

### Backend Setup
```bash
cd backend
npm install
npm run deploy
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Environment Variables
Create `.env` files in both frontend and backend directories:

```env
AWS_REGION=us-east-1
API_ENDPOINT=your-api-endpoint
STAGE=dev
```

## API Documentation

API documentation is available at `/api-docs` after starting the development server.

## Testing

```bash
# Run backend tests
cd backend && npm test

# Run frontend tests
cd frontend && npm test
```

## Deployment

### Backend
```bash
npm run deploy:prod
```

### Frontend
```bash
npm run build
npm run deploy
```
