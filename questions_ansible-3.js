export const Questions = [
  {
    question:
      "À quoi servent les variables dans Ansible ?",
    answers: ["A. À créer des modules personnalisés", "B. À stocker des valeurs réutilisables dans les tâches (ex : noms de paquets, chemins, utilisateurs)", "C. À générer automatiquement l’inventaire"],
    correct: "B. À stocker des valeurs réutilisables dans les tâches (ex : noms de paquets, chemins, utilisateurs)",
  },
  {
    question:
      "Quel est la bonne syntax pour appeler une variable dans un playbook ?",
    answers: ["A. %{ma_variable}", "B. {{ ma_variable }}", "C. $ma_variable"],
    correct: "B. {{ ma_variable }}",
  },
  {
    question: "Quel est l’emplacement par défaut pour définir des variables spécifiques à un hôte ?",
    answers: ["A. group_vars/all.yaml", "B. defaults/main.yaml", "C. host_vars/<nom_hôte>.yaml"],
    correct: "C. host_vars/<nom_hôte>.yaml",
  },
  {
    question: "Quelle est la priorité la plus élevée dans la gestion des variables dans Ansible ?",
    answers: ["A. Les variables définies dans les fichiers vars/", "B. Les variables passées en ligne de commande", "C. Les variables d’inventaire"],
    correct: "B. Les variables passées en ligne de commande",
  },
  {
    question:
      "Quelle commande Ansible exécute une tâche simple (ex : ping) sans playbook ?",
    answers: ["A. ansible", "B. ansible-run", "C. ansible-playbook"],
    correct: "A. ansible",
  },
  {
    question: "Quelle est la structure correcte pour exécuter une commande ad hoc avec un module ?",
    answers: ["A. ansible-playbook all -m nom_module", "B. ansible inventory -m nom_module", "C. ansible all -m nom_module"],
    correct: "C. ansible all -m nom_module",
  },
  {
    question:
      "Quelle commande ad hoc permet d’installer un paquet nginx avec le module apt ?",
    answers: ["A. ansible all -m apt -a 'name=nginx state=present update_cache=yes'", "B. ansible apt install nginx", "C. ansible all -m install -a 'nginx'"],
    correct: "A. ansible all -m apt -a 'name=nginx state=present update_cache=yes'",
  },
  {
    question: "Que sont les facts dans Ansible ?",
    answers: [
      "A. Des informations système collectées automatiquement (ex : OS, adresse IP, CPU, etc.)",
      "B. Des messages d’erreur produits pendant l’exécution",
      "C. Des variables temporaires que l’on doit créer manuellement",
    ],
    correct: "A. Des informations système collectées automatiquement (ex : OS, adresse IP, CPU, etc.)",
  },
  {
    question:
      "À quoi sert l’instruction register dans un playbook Ansible ?",
    answers: ["A. À créer une nouvelle tâche dans le playbook", "B. À stocker le résultat d’une tâche pour le réutiliser plus tard", "C. À ajouter un hôte dans l’inventaire"],
    correct: "B. À stocker le résultat d’une tâche pour le réutiliser plus tard",
  },
  {
    question:
      "À quoi sert la commande ansible-lint ?",
    answers: ["A. À vérifier la syntaxe YAML d’un playbook uniquement", "B. À exécuter un playbook en mode silencieux", "C. À analyser un playbook pour détecter les erreurs de style, les mauvaises pratiques et les oublis"],
    correct: "C. À analyser un playbook pour détecter les erreurs de style, les mauvaises pratiques et les oublis",
  },
];
