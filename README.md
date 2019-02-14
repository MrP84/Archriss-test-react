## Archriss-test-react

Et voilà ! Je ne suis pas 100% satisfait de la prestation que je viens d'offrir dans la mesure où je ne suis encore que débutant en React mais je dois avouer que ces 2 semaines sont passées extrêmement vites!

### Les components

Aux components existants tels que Header, CoreLayout et ArchrissMessage j'ai ajouté un component `Contact` et un `ReadMore` respectivement pour les parties "contacts" et "à lire aussi".

### Les styles

L'apprentissage de SASS s'est effectivement bien passé, je dois reconnaître que cette façon de coder les styles est impressionnante. Toutefois, on ne change pas ses habitudes du jour au lendemain et je suis parfois retombé dans mes anciens travers à savoir "bricoler" pour obtenir un rendu satisfaisant...

### Les fonctionnalités optionnelles

Voilà ma plus grande déception : ne pas avoir réussi à mettre en oeuvre la fonction de swipe... Je n'ai pas effacé ma tentative mais force est de constater qu'elle est infructueuse... J'ai eu quelques idées mais je voulais avant tout finir la mise en forme complète de la page.

### Responsive

J'ai fait le choix de coder le "site" en vue mobile. Mon habitude est d'utiliser des medias query pour gérer les différentes vues, hors là... je ne l'ai pas fait. Les photos sont moches en grand écran et une des 6 de la partie "photo" ne respecte pas la mise en forme des autres!

J'ai usé (et peut être abusé) de flexbox mais pas seulement : la disposition permise par `display: grid` offre à mon sens une plus grande liberté.

### Commentaires

Je n'ai mis aucun commentaire! En fait, si, j'avais commencé à en mettre dès mes premières lignes de code mais à force d'effacer, de modifier, de déplacer, je les ai retirés. Là où j'ai été vraiment bête, c'est de ne pas avoir utilisé Git dès le début. Non pas que ça m'aurait été d'une grande aide mais vous auriez pu voir les différentes étapes par lesquelles je suis passé.

Cela dit, je peux en parler mais je reconnais que c'est dommage.

## Pour conclure

J'ai essayé de montrer mon niveau en React (niveau de débutant je le rappelle puisque je n'en avais jamais fait auparavant). J'ai suivi une formation vidéo sur `udemy` et je me suis lancé.

J'ai voulu montrer que je savais manipuler les states, notamment pour la partie `A lire aussi` où je crée un objet sur lequel je boucle pour le rendu puisque les 3 articles me faisaient penser à une collection.

J'ai également mis une grande collection de conditions dans ArchrissMessage pour la visibilité des différents éléments dans des components identiques. Afin de différencier les div, j'ai aussi utilisé la concaténation ES6 (bien pratique pour SASS!).

Enfin, je ne peux que conseiller de regarder le site en vue mobile dans la mesure où c'est comme ça que je l'ai codé. `display: flex` et `display:grid` font globalement bien les choses quand on change la taille de la vue mais ça n'est pas parfait, par manque de temps (à noter que ce manque de temps est directement induit par les choix que j'ai fait quant à la volonté de coder tout le site en y insérant toutes sortes de r-gles apprises la semaine précédente).

Bref, **merci!**
