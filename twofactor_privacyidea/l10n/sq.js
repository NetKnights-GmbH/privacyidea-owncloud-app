OC.L10N.register(
    "twofactor_privacyidea",
    {
    "Communication to the privacyIDEA server succeeded. The user was successfully authenticated." : "Komunikimi me shërbyesin privacyIDEA pati sukses. Përdoruesi u mirëfilltësua me sukses.",
    "Failed to authenticate." : "S’u arrit të bëhej mirëfilltësimi.",
    "Communication to the privacyIDEA server succeeded. However, the user failed to authenticate." : "Komunikimi me shërbyesin privacyIDEA pati sukses. Sidoqoftë, mirëfilltësimi i përdoruesit dështoi.",
    "The service account credentials are correct!" : "Kredencialet për llogarinë e shërbimit janë të sakta!",
    "Failed to trigger challenges. Wrong HTTP return code: " : "S’u arrit të sillej token mirëfilltësimi. Kod HTTP kthimi i gabuar:",
    "Failed to trigger challenges." : "Dështoi vënia në punë e <em>challenges</em>.",
    "Check if service account has correct permissions" : "Kontrolloni nëse llogaria e shërbimit ka lejet e duhura",
    "Failed to fetch authentication token. Wrong HTTP return code: " : "S’u arrit të sillej token mirëfilltësimi. Kod kthimi HTTP i gabuar: ",
    "Failed to fetch authentication token." : "Dështoi prurja e tokenit të mirëfilltësimit.",
    "privacyIDEA 2FA" : "privacyIDEA 2FA",
    "Open documentation" : "Hap dokumentimin",
    "\n                In a second step of authentication the user is asked to provide a one\n                time password. The users devices are managed in privacyIDEA. The\n                authentication request is forwarded to privacyIDEA.\n            " : "\n                Në një hap të dytë të mirëfilltësimit, përdoruesit i kërkohet të japë një\n                fjalëkalim njëpërdorimsh. Pajisjet e përdoruesit administrohen në privacyIDEA.\n                Kërkesa e mirëfilltësimit i përcillet privacyIDEA-s.\n            ",
    "Configuration" : "Formësim",
    "Activate two factor authentication with privacyIDEA." : "Aktivizoni mirëfilltësim dyfaktorësh me privacyIDEA.",
    "\n                            Before activating two factor authentication with privacyIDEA, please asure, that the connection to\n                            your privacyIDEA-server is configured correctly.\n                        " : "\n                            Para aktivizimit të mirëfilltësimit dyfaktorësh me privacyIDEA, ju lutemi, garantoni që lidhja te\n                            shërbyesi juaj privacyIDEA të jetë formësuar saktë.\n                        ",
    "URL of the privacyIDEA Server" : "URL e Shërbyesit privacyIDEA",
    "\n                            Please use the base URL of your privacyIDEA instance.\n                            For compatibility reasons, you may also specify the URL of the /validate/check endpoint.\n                        " : "\n                            Ju lutemi, përdorni URL-në bazë të instancës tuaj privacyIDEA.\n                            Për arsye përputhshmërie, mund të jepni edhe URL-në e pikëmbarimit të /validate/check.\n                        ",
    "Timeout" : "Mbarim kohe",
    "default is 5" : "parazgjedhja është 5",
    "\n                            Sets timeout to privacyIDEA for login in seconds.\n                        " : "\n                            Cakton te privacyIDEA mbarim kohe për hyrjet, në sekonda.\n                        ",
    "Include groups" : "Përfshi grupe",
    "Exclude groups" : "Përjashto grupe",
    "\n\t\t                    If include is selected, just the groups in this field need to do 2FA.\n\t\t                " : "\n\t\t                    Nëse është përzgjedhur përfshirje, vetëm grupet në këtë fushë lypset të kryejnë M2F.\n\t\t                ",
    "\n\t\t                    If you select exclude, these groups can use 1FA (all others need 2FA).\n\t\t                " : "\n\t\t                    Nëse përzgjidhni përjashtim, këto grupe mund të përdorin M1F (krejt të tjerët lypset të kryejnë M2F).\n\t\t                ",
    "\n\t\t                    Exclude ip addresses\n\t\t                " : "\n\t\t                    Përjashto adresa IP\n\t\t                ",
    "\n\t\t                    You can either add single IPs like 10.0.1.12,10.0.1.13, a range like 10.0.1.12-10.0.1.113 or combinations like 10.0.1.12-10.0.1.113,192.168.0.15\n\t\t                " : "\n\t\t                    Ose mund të shtoni IP teke, p.sh., 10.0.1.12,10.0.1.13, një interval, p.sh., 10.0.1.12-10.0.1.113, ose një ndërthurje, p.sh., 10.0.1.12-10.0.1.113,192.168.0.15\n\t\t                ",
    "User Realm" : "Përdorues Realm",
    "\n                    Select the user realm, if it is not the default one.\n                " : "\n                    Zgjidh përdoruesin realm, nëse ajo nuk është e parazgjedhur.\n                ",
    "\n                    Verify the SSL certificate.\n                " : "\n                    Verifiko dëshminë SSL.\n                ",
    "\n                        Do not uncheck this in productive environments!\n                    " : "\n                        Mos ia hiqni shenjën kësaj në mjedise sajtesh faktikë!\n                    ",
    "\n                    Ignore the system wide proxy settings and send authentication\n                    requests to privacyIDEA directly.\n                " : "\n                    Shpërfill rregullime ndërmjetësi për mbarë sistemin dhe\n                    dërgo kërkesa mirëfilltësimi drejtpërsëdrejti te privacyIDEA.\n                ",
    "Test" : "Provë",
    "Test Authentication by supplying username and password that are checked against privacyIDEA:" : "Provo Mirëfilltësimin duke dhënë emër përdoruesi dhe fjalëkalim që kontrollohen në privacyIDEA:",
    "User" : "Përdorues",
    "Password" : "Fjalëkalim",
    "Challenge Response" : "Përgjigje Sfide",
    "Trigger challenges for challenge-response tokens. Check this if you employ, e.g., SMS or E-Mail tokens." : "Prodho <em>challenges</em> për token <em>challenge-response</em>. I vini shenjë kësaj, nëse përdorni, f.v., token SMS ose E-Mail.",
    "Username of privacyIDEA service account" : "Emër Përdoruesi për llogarinë në shërbimin privacyIDEA",
    "Password of privacyIDEA service account" : "Fjalëkalim për llogarinë në shërbimin privacyIDEA",
    "Check Credentials" : "Kontrolloni Kredencialet"
},
"nplurals=2; plural=(n != 1);");
