# Temporal  📥

Solution de messagerie jetable

## Installation de l'IHM⛩

Clone du repository

```bash
git clone https://github.com/Raphael0010/temporal && cd temporal
```

Installation des dépendances

```bash
yarn
```

## Installation de l'API📍

- Il est nécessaire d'avoir Python3 d'installé et pip3.

Installation de flask et ses dépendances

```bash
pip3 install flask
pip3 install flask-cors
```

## Démarrage du projet ✅
- On se place dans le dossier

#### On configure l'ip du serveur dans l'IHM
 - temporal/src/utils/api.ts ( ligne 1 )

#### On configure l'ip du serveur dans l'API
 - temporal/src/api/api.py ( ligne 16 )


### On démarre l'API

```bash
python3 src/api/api.py
```

### On démarre l'IHM

```bash
yarn start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)