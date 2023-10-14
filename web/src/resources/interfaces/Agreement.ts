import { Approval } from './Approvals';

export interface Agreement {
  id?: string;
  name: string;
  description?: string;
  status: string;
  approvals?: Approval[];
  // startDate: Date;
  // endDate: Date;
  // createdAt: Date;
  // updatedAt: Date;
}
