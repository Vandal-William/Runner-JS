# Runner-JS

# Config

## Les levels

```json
{
    "title": "Nom du niveau",
    "creator": "John Doe",
    "difficulty": 1,
    "blocks": [
        {"type": "A"},
        {"type": "B"},
        ...,
    ]
}
```

## Le personnage

```js
// objet relative au personnage
const character = {
  // image profil
  // image de saut
  // image accroupie
};
```

## Les éléments du décor

```js
const map = {
  // image des block
  // image background
};
```

# Partie Runner

```js
// Runner

function runLevel(difficulty) {
  // charger un niveau a partir d'un JSON
  // placer les block : (Bloc passer bout a bout)
  // => A : Une ligne droite
  // => B : Un obstacle au sol
  // => C : Un obstacle en hauter
  // placer un personnage
}
function move() {
  // la map bouge, pas le personnage
  // changer la vitesse de la map en fonction de l'avancement du personnage
  // Cette vitesse dépendra directement de la taille que représente chaque bloc à l'écran.
  // Les vitesse:
  // => Découverte
  // => Normal
  // => Perfectionnement
  // => Expertise
  // => Maîtrise
  // la vitesse augmente tous les N block
  // score = score + (multiplicateur_vitesse * points_bloc)
  // score = score + (nombre_blocs_du_niveau * multiplicateur_vitesse_finale)
  // gérer les collisions
  // condition de victoire / défaite
}
function Jump() {
  // Sauter
}

function down() {
  // S'accroupir
}
function gamePause() {
  // mettre le jeu en pause
}
function continus() {
  // reprendre la partie
}
function score() {
  // calcule des points suivant conditions
  // passer un block + 10pts
  // affichage d'un score final
}
function cleanLevel() {
  // détruire un niveau
}
function exitLevel() {
  // quitter le niveau
}
function exitGame() {
  // Quitter la partie
}
```

# Partie Edition

```js
// Edition

function menu() {
  // déplacement avec tap
  // => Découverte
  // => Normal
  // => Perfectionnement
  // => Expertise
  // => Maîtrise
  // => Paramètres : modifier les touches du clavier
  // => Edition : Ajouter un niveau, supprimer un niveau, importer un niveau
}

function params() {
  // modifier les touches du clavier
}
function subMenuEdition() {
  // => Ajouter un niveau : exporter ???????????????????????,
  // => supprimer un niveau
  // => importer un niveau
}
function subMenuPause() {
  // déplacement avec tap
  // => Reprendre
  // => Recommencer
  // => Quitter le niveau (focus) (touche entrer ou esc)
}
function importLevel() {
  // => importer un level
}
function ExportLevel() {
  // => exporter un level
}
function createLevel() {
  // créer un niveau
  // placer des block
  // Prévisualiser le niv en cour de construction
  // voir le nombre de block
  // voir le score max pour chaque difficultés
}
function updateLevel() {
  // Modifier u niveau
}
function deleteLevel() {
  // Supprimer un niveau
}
function saveLevel() {
  // sauvegarder le niveau
}
```

# Imbrication des fonctions

```js
function menu() {

  if(difficulty){
    runLevel(difficulty)
        => move(difficulty)
        => { "Touche espace" ? jump()}
        => {"Touche entrer" ? down()}
        => {"Touche A" ? gamePause()}
        => {gamePause() => subMenuPause()   => {"reprendre" ?  continus()}
                                            => {"Recommencer" ? cleanLevel() => runLevel(difficulty) => ....}
                                            => {"Quitter le niv" ? exitLevel()}

                            }

  }

  else if(Paramètres){
    params() // Modifier les touches du clavier
  }

  else if(Edition){
    subMenuEdition()    => { "Créer un niveau" ? createLevel() => saveLevel()}
                        => { "Importer un niveau" ? importLevel()} => reseigner un fichier
                        => { "Exporter un niveau" ? ExportLevel()} => liste des lvl
                        => { "Modifier un niveau" ? updateLevel()} => liste des lvl
                        => { "Supprimer un niveau" ? deleteLevel()} => liste des lvl


  }
  else if(Quitter){
    exitGame()
  }
}

menu()
```

# Organisation

# Edition

=> Adrien => visuel
=> Ken's => visuel
=> Atigou => fonction
=> Massi => fonction

1. => visuel :
   - le menu
   - Sous menu
2. => création des fonction :
   - créer, modifier, supprimer, sauvegarder, importer, exporter un lvl
   - paramettre

# Running

=> William 1.
=> Moms 2.
=> Lucas 2.
=> Jiek 1.

1. => runLevel, move, gamePause, continus, cleanLevel
2. => jump, down, score, exitGame, exitLevel

# Organisation

## Règlement :

1. Personne ne push sur main, interdit !
2. Chaque fonction possède sa propre branche
3. Une fonction = 1 branche = 1personne qui push (même si vous êtes 2 sur la fonction)
4. quand vous estimez que la fonction est terminer, faites une pull request sur Github
5. les merges sur main serons effectuer tous les jour a 15h (si il y en a)
6. il y aura une réunion tous les jours à 15h30 pour voir l’avancement de chaqu’ un
7. On ne reste pas bloquer plus de 2h sur une fonctionnalitée ou un bug

### Exemple de création de branche (dans vs code) :

```git
git branch runLevel
```

### Basculer sur la branche créer :

```git
git checkout runLevel
```

### Faire un push

```git
git add .
```

```git
git commit -m" changement (se que j'ai fais dans le code)"
```

```git
git push origin runLevel (ma branche)
```

## Les groupes 

Le groupe design est le seule habilité a prendre des décision sur le design, chaque éléments du design devra être indépendant (obstacles, background...)
il s’occupera de toute les interfaces et du design du jeu :

- Les obstacles (image)
- Le personnage (image)
- Le background
- Les menus
- Les formulaires (leur emplacement et apparence par rapport a la prévisualisation)
- proposer au minimum 2 visuel du jeu

Le groupe fonctionnalité sera chargé de toute la logique du jeu sans aucun design (et oui se sera des carrés et des rectangle qui bouge et qui saute…)

L’intégration du design devra erre fais au minimum 3 jour avant la date du rendu

# Question technique 

Quelle unité de mesure utilisé => Px
Quelle sera la dimension de la fenêtre de jeu => Plein écran
Quelle sera la dimension :

- Des obstacles A => longueur: 10px, Hauteur: 5px => position: absolute
- Des obstacles B => longueur: 5px Hauteur: 10px => position: absolute
- Des obstacles C => longeur: 5px hauteur 5px top: 15px => position: absolute
