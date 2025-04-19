export const Questions = [
  {
    question:
      "Qu’est-ce qu’un handler dans Ansible ?",
    answers: ["Une fonction de contrôle d'erreur dans un playbook", "B. Une tâche spéciale qui s’exécute automatiquement après une autre tâche si elle a changé quelque chose", "C. Un module pour gérer les fichiers de configuration"],
    correct: "B. Une tâche spéciale qui s’exécute automatiquement après une autre tâche si elle a changé quelque chose",
  },
  {
    question:
      "Quelle directive permet de déclencher un handler depuis une tâche ?",
    answers: ["A. call:", "B. run:", "C. notify:"],
    correct: "C. notify:",
  },
  {
    question: "Où se trouvent généralement les handlers dans un playbook ?",
    answers: ["A. Dans la section handlers: à la fin du playbook", "B. Dans le fichier inventory", "C. Dans le même fichier que l’inventaire dynamique"],
    correct: "A. Dans la section handlers: à la fin du playbook",
  },
  {
    question: "Quelle syntaxe permet de n’exécuter une tâche que si une condition est vraie ?",
    answers: ["A. when:", "B. if:", "C. condition:"],
    correct: "A. when:",
  },
  {
    question:
      "Que permet l’instruction when dans une tâche Ansible ?",
    answers: ["A. Elle répète une tâche plusieurs fois", "B. Elle définit une condition pour exécuter une tâche", "C. Elle ajoute un commentaire dans le playbook"],
    correct: "B. Elle définit une condition pour exécuter une tâche",
  },
  {
    question: "Que se passe-t-il si un handler est appelé plusieurs fois dans un playbook ?",
    answers: ["Il est exécuté plusieurs fois, à chaque appel", "B. Il est ignoré si déjà exécuté une fois", "C. Il n’est exécuté qu’une seule fois à la fin du playbook, même s’il est appelé plusieurs fois"],
    correct: "C. Il n’est exécuté qu’une seule fois à la fin du playbook, même s’il est appelé plusieurs fois",
  },
  {
    question:
      "Dans quel cas un handler ne sera pas exécuté même s’il est notifié ?",
    answers: ["A. Si le nom du handler contient une majuscule", "B. Si la tâche n’a rien changé (changed = false)", "C. Si le handler se trouve avant la tâche dans le playbook"],
    correct: "B. Si la tâche n’a rien changé (changed = false)",
  },
  {
    question: "Quelle est la bonne syntaxe pour vérifier si une variable os_family vaut Debian ?",
    answers: [
      "A. when: os_family == Debian",
      "B. when: os_family = \"Debian\"",
      "C. when: os_family == \"Debian\"",
    ],
    correct: "C. when: os_family == \"Debian\"",
  },
  {
    question:
      "À quoi sert l’instruction register dans un playbook Ansible ?",
    answers: ["A. À créer une nouvelle tâche dans le playbook", "B. À stocker le résultat d’une tâche pour le réutiliser plus tard", "C. À ajouter un hôte dans l’inventaire"],
    correct: "B. À stocker le résultat d’une tâche pour le réutiliser plus tard",
  },
  {
    question:
      "Quel mot-clé permet de parcourir une liste dans une boucle avec plus de flexibilité (remplaçant with_items) ?",
    answers: ["A. for_each", "B. loop", "C. list"],
    correct: "B. loop",
  },
];
