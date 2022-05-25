import app from './app.js';
import { conectarAoDatabase } from './database/database.js';


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.clear();
  try {
    conectarAoDatabase()
    console.log(`\n\n\n\n\n\nRunning http://localhost:${PORT}`);
  } catch (err) {
    console.log(`\nErro ao acessar db\n\n${err}`)
  }
});
