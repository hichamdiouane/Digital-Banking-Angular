import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { ChartData, ChartOptions } from 'chart.js';
import { BehaviorSubject } from 'rxjs';

interface ChartDataset {
  data: number[];
  label?: string;
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
  tension?: number;
  pointBackgroundColor?: string;
  pointBorderColor?: string;
  pointHoverBackgroundColor?: string;
  pointHoverBorderColor?: string;
}

interface ChartDataStructure {
  labels?: string[];
  datasets: ChartDataset[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberOfAccounts = 0;
  numberOfCustomers = 0;
  totalOperations = 0;
  totalAmount = 0;

  isLoading$ = new BehaviorSubject<boolean>(true);
  diameter = 50;

  // Chart configurations
  public pieChartLabels: string[] = ['Current Accounts', 'Savings Accounts', 'Business Accounts'];
  public pieChartData: ChartDataStructure = {
    labels: ['Current Accounts', 'Savings Accounts', 'Business Accounts'],
    datasets: [{
      data: [300, 500, 200],
      backgroundColor: [
        'rgba(37, 99, 235, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(245, 158, 11, 0.8)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(34, 197, 94, 1)',
        'rgba(245, 158, 11, 1)'
      ],
      borderWidth: 1
    }]
  };

  public barChartData: ChartDataStructure = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Transactions',
        backgroundColor: 'rgba(37, 99, 235, 0.8)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  public lineChartData: ChartDataStructure = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Daily Transactions',
        fill: true,
        tension: 0.4,
        borderColor: 'rgba(37, 99, 235, 1)',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        pointBackgroundColor: 'rgba(37, 99, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(37, 99, 235, 1)'
      }
    ]
  };

  public polarAreaChartData: ChartDataStructure = {
    labels: ['Deposits', 'Withdrawals', 'Transfers', 'Payments'],
    datasets: [{
      data: [300, 500, 200, 100],
      backgroundColor: [
        'rgba(37, 99, 235, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(139, 92, 246, 0.8)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(34, 197, 94, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(139, 92, 246, 1)'
      ],
      borderWidth: 1
    }]
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1e293b',
        bodyColor: '#64748b',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value as number / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1e293b',
        bodyColor: '#64748b',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e2e8f0'
        }
      }
    }
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1e293b',
        bodyColor: '#64748b',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e2e8f0'
        }
      }
    }
  };

  public polarAreaChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1e293b',
        bodyColor: '#64748b',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6
      }
    }
  };

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    const today = new Date();
    const last7Days = new Date();
    last7Days.setDate(today.getDate() - 7);

    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    const startDate = formatDate(last7Days);
    const endDate = formatDate(today);

    // ✅ General Stats
    this.statsService.getDashboardStats(startDate, endDate).subscribe({
      next: data => {
        this.numberOfAccounts = data.numberOfAccounts || 0;
        this.numberOfCustomers = data.numberOfCustomers || 0;
        this.totalOperations = data.totalOperations || 0;
        this.totalAmount = data.totalAmount || 0;
      },
      error: err => console.error('Error fetching dashboard stats', err),
      complete: () => this.isLoading$.next(false)
    });

    // ✅ Bar Chart Data
    this.statsService.getOperationsChartData(startDate, endDate).subscribe({
      next: chartData => {
        const labelsSet = new Set([
          ...Object.keys(chartData.debit || {}),
          ...Object.keys(chartData.credit || {}),
          ...Object.keys(chartData.transfer || {})
        ]);

        const labels = Array.from(labelsSet).sort();

        this.barChartData = {
          labels,
          datasets: [
            {
              label: 'Debit',
              data: labels.map(label => chartData.debit?.[label] || 0),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            },
            {
              label: 'Credit',
              data: labels.map(label => chartData.credit?.[label] || 0),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            },
            {
              label: 'Transfer',
              data: labels.map(label => chartData.transfer?.[label] || 0),
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        };
      },
      error: err => console.error('Error fetching operations data', err)
    });

    // ✅ Pie Chart Data from Account Types
    this.statsService.getAccountsByType().subscribe({
      next: typeData => {
        const savings = typeData['SavingAccount'] || 0;
        const current = typeData['CurrentAccount'] || 0;

        this.pieChartData = {
          labels: ['Savings', 'Current'],
          datasets: [
            {
              data: [savings, current],
              backgroundColor: ['#42A5F5', '#66BB6A'],
              borderColor: ['#1976D2', '#388E3C'],
              borderWidth: 1
            }
          ]
        };
      },
      error: err => console.error('Error fetching account types', err)
    });
  }
}
