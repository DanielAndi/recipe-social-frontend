export interface Recipe {
  id: string;                // ↳ names match your DB columns
  title: string;
  content: string;
  user_id: string;
  createdAt: string | null;  // ISO string or null
}
