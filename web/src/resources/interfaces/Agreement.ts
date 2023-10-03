import { Approval } from './Approvals';

export interface Agreement {
  id: number;
  name: string;
  description?: string;
  status: string;
  approvals?: Approval[];
  // startDate: Date;
  // endDate: Date;
  // createdAt: Date;
  // updatedAt: Date;
}
