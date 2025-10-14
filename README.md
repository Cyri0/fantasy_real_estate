**BACKEND**

A backend mappában hozzatok létre egy virtuális környezetet

```cmd
python -m venv myvenv
```

Ezután aktiváljátok

```cmd
myvenv\Scripts\activate
```

ezután telepítsétek a requirements.txt tartalmát

```cmd
pip install -r requirements.txt
```

és futtathatjátok is!

```cmd
python manage.py runserver
```

**FRONTEND**

Beléptek a frontend mappába, és telepítitek a node_modules mappát.

```cmd
npm install
```

Majd elindítjátok a fejlesztői szervert.

```cmd
npm run dev
```