<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="I PREND_LA_VALEUR I+1" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000" arrondiAuto="vrai" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#X" algoitem="X EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#I#1#pasliste" algoitem="I PREND_LA_VALEUR 1"/>
        <item code="4#entrez un nombre#0" algoitem="AFFICHER &quot;entrez un nombre&quot;"/>
        <item code="2#X#pasliste" algoitem="LIRE X"/>
        <item code="15#I&lt;=10" algoitem="TANT_QUE (I&lt;=10) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="20#X*I#1" algoitem="AFFICHERCALCUL X*I"/>
            <item code="5#I#I+1#pasliste" algoitem="I PREND_LA_VALEUR I+1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
