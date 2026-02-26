export type FieldType = "text" | "email" | "tel" | "select" | "radio" | "checkbox";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  hasOther?: boolean; // show "Other" free-text input when selected
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

export interface FormConfig {
  slug: string;
  pageTitle: string; // heading shown on assessment page
  pageDescription: string; // sub-text below heading
  roles: string[]; // role options for ContactForm step 1
  sections: FormSection[]; // assessment form sections (step 2)
  submitLabel?: string;
}
