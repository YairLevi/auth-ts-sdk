type Model = {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

export type User = Model & {
  firstName: string
  lastName: string
  email: string
  passwordHash: string
  phoneNumber: string
  lastLogin: Date
  birthday: Date
}

export type Provider =
  | "google"
  | "github"
