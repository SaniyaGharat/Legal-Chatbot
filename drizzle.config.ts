import { config } from "dotenv";

config({ path: ".env.local" });

export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // ✅ Sirf dialect use karo, driver hatao
  dbCredentials: {
    connectionString: "postgresql://legal_chatbot_db_user:BQovmP1rEEa55aWQfwhzOdpyKvOaB9qv@dpg-cuuefs2n91rc73fj4vtg-a.singapore-postgres.render.com/legal_chatbot_db",
    ssl: true, // ✅ Ensure SSL is enabled
  }
};
