interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: '1',
      source: 'Freelance Work',
      amount: 1200,
      created_at: new Date('2025-02-01T10:00:00Z'),
      updated_at: new Date('2025-02-02T12:00:00Z'),
      type: ReportType.INCOME,
    },
    {
      id: '2',
      source: 'Office Rent',
      amount: 800,
      created_at: new Date('2025-02-03T09:30:00Z'),
      updated_at: new Date('2025-02-04T11:15:00Z'),
      type: ReportType.EXPENSE,
    },
    {
      id: '3',
      source: 'Consulting',
      amount: 500,
      created_at: new Date('2025-02-05T14:20:00Z'),
      updated_at: new Date('2025-02-06T16:45:00Z'),
      type: ReportType.INCOME,
    },
  ],
};
