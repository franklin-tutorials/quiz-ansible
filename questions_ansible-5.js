export const Questions = [
  {
    question:
      "À quoi sert un rôle dans Ansible ?",
    answers: ["A. À exécuter une commande ad hoc", "B. À organiser des tâches, variables, fichiers et templates de manière réutilisable", "C. À stocker les fichiers d’inventaire"],
    correct: "B. À organiser des tâches, variables, fichiers et templates de manière réutilisable",
  },
  {
    question:
      "Quelle commande permet de créer la structure d’un rôle Ansible ?",
    answers: ["A. ansible-role create mon_role", "B. ansible-playbook --role mon_role", "C. ansible-galaxy init mon_role"],
    correct: "C. ansible-galaxy init mon_role",
  },
  {
    question: "Qu’est-ce qu’une collection dans Ansible ?",
    answers: ["A. Une liste d’options de boucle", "B. Un ensemble versionné de rôles, modules, plugins et docs partagés", "C. Une archive de sauvegarde des tâches"],
    correct: "B. Un ensemble versionné de rôles, modules, plugins et docs partagés",
  },
  {
    question: "Quelle commande permet d’installer une collection à partir d’Ansible Galaxy ?",
    answers: ["A. ansible-galaxy install nom_de_la_collection", "B. ansible-pull collection install", "C. ansible install collection"],
    correct: "A. ansible-galaxy install nom_de_la_collection",
  },
  {
    question:
      "Où sont stockées les collections installées par défaut ?",
    answers: ["A. Dans /etc/ansible/collections", "B. Dans /opt/ansible/roles", "C. Dans ~/.ansible/collections"],
    correct: "C. Dans ~/.ansible/collections",
  },
  {
    question: "Quel est le format correct pour référencer un rôle dans un playbook ?",
    answers: ["A. - role: mon_role", "B. use_role: mon_role", "C. role: mon_role"],
    correct: "A. - role: mon_role",
  },
  {
    question:
      "Quel est l’avantage principal d’utiliser des rôles et collections ?",
    answers: ["A. Réduire la taille des playbooks", "B. Permettre une exécution plus rapide", "C. Favoriser la réutilisabilité et la standardisation du code"],
    correct: "C. Favoriser la réutilisabilité et la standardisation du code",
  },
  {
    question: "À quoi sert ansible-vault ?",
    answers: [
      "A. À stocker les rôles partagés dans Ansible Galaxy",
      "B. À chiffrer et déchiffrer des fichiers contenant des données sensibles (mots de passe, clés, etc.)",
      "C. À installer automatiquement les dépendances d’un playbook",
    ],
    correct: "B. À chiffrer et déchiffrer des fichiers contenant des données sensibles (mots de passe, clés, etc.)",
  },
  {
    question:
      "Quel est le rôle principal d’Ansible Tower (ou AWX) ?",
    answers: ["A. Fournir une interface web, une API REST et une gestion des droits pour exécuter des playbooks", "B. Compiler les playbooks plus rapidement", "C. Remplacer le fichier d’inventaire"],
    correct: "A. Fournir une interface web, une API REST et une gestion des droits pour exécuter des playbooks",
  },
  {
    question:
      "Parmi les choix suivants, quelle est une bonne pratique en Ansible ?",
    answers: ["A. Regrouper toutes les tâches dans un seul gros playbook", "B. Réutiliser des rôles, versionner le code et utiliser des variables bien nommées", "C. Éviter les handlers pour simplifier les scripts"],
    correct: "B. Réutiliser des rôles, versionner le code et utiliser des variables bien nommées",
  },
];
