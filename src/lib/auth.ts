import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sql from './db';
import { User, CreateUserData } from './schema';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

const JWT_SECRET = process.env.JWT_SECRET;

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(user: Omit<User, 'password_hash'>): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function createUser(userData: CreateUserData): Promise<Omit<User, 'password_hash'>> {
  const passwordHash = await hashPassword(userData.password);
  
  const result = await sql`
    INSERT INTO users (email, password_hash, first_name, last_name, role)
    VALUES (${userData.email}, ${passwordHash}, ${userData.first_name}, ${userData.last_name}, ${userData.role || 'student'})
    RETURNING id, email, first_name, last_name, role, created_at, updated_at
  `;
  
  return result[0] as Omit<User, 'password_hash'>;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const result = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;
  
  return result.length > 0 ? result[0] as User : null;
}

export async function findUserById(id: number): Promise<Omit<User, 'password_hash'> | null> {
  const result = await sql`
    SELECT id, email, first_name, last_name, role, created_at, updated_at 
    FROM users WHERE id = ${id}
  `;
  
  return result.length > 0 ? result[0] as Omit<User, 'password_hash'> : null;
} 