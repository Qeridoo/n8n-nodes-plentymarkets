# n8n-nodes-plentymarkets

Custom n8n Node zur Integration der [Plentymarkets](https://www.plentymarkets.com/) / PlentyONE REST API.

Ersetzt das manuelle Zusammenbauen von Auth- und HTTP-Request-Nodes durch eine einzige Node mit integrierter Authentifizierung.

## Installation

### n8n Community Node (Docker)

```bash
# Auf dem n8n-Host:
mkdir -p /pfad/zu/n8n-data/custom
cd /pfad/zu/n8n-data/custom
npm init -y
npm install github:Qeridoo/n8n-nodes-plentymarkets

# n8n neu starten
docker restart <n8n-container>
```

Der Pfad zum n8n-Datenverzeichnis findet sich per:
```bash
docker inspect <container> | grep -A 5 "Mounts"
```

### Lokal (Entwicklung)

```bash
git clone https://github.com/Qeridoo/n8n-nodes-plentymarkets.git
cd n8n-nodes-plentymarkets
npm install
npm run build
```

## Credentials einrichten

In n8n unter *Settings > Credentials > Add Credential*:

| Feld | Wert |
|------|------|
| **Typ** | Plentymarkets API |
| **Environment** | Custom URL (oder PlentyONE) |
| **Base URL** | `https://pXXXX.my.plentysystems.com` |
| **Username / Email** | API-Benutzername |
| **Password** | API-Passwort |

Client ID und Client Secret sind optional (nur fuer OAuth2).

## Ressourcen und Operationen

### Commerce

| Ressource | Operationen |
|-----------|------------|
| **Auftraege (Order)** | Erstellen, Abrufen, Alle abrufen, Aktualisieren, Loeschen, Suchen |
| **Kunden (Contact)** | Erstellen, Abrufen, Alle abrufen, Aktualisieren, Loeschen, Suchen |
| **Adressen (Address)** | Erstellen, Abrufen, Alle fuer Kontakt, Aktualisieren, Loeschen |
| **Zahlung (Payment)** | Abrufen, Alle abrufen, Erstellen, Aktualisieren |
| **Versand (Shipping)** | Abrufen, Alle fuer Auftrag |
| **Dokument (Document)** | Abrufen, Alle fuer Auftrag, Erstellen |

### Katalog

| Ressource | Operationen |
|-----------|------------|
| **Artikel (Item)** | Erstellen, Abrufen, Alle abrufen, Aktualisieren, Loeschen |
| **Varianten (Variation)** | Erstellen, Abrufen, Alle fuer Artikel, Aktualisieren, Loeschen, Preis setzen, Bestand aktualisieren, Suchen |
| **Kategorie (Category)** | Erstellen, Abrufen, Alle abrufen, Aktualisieren, Loeschen |
| **Eigenschaft (Property)** | Erstellen, Abrufen, Alle abrufen, Aktualisieren, Loeschen |
| **Eigenschaftsauswahl (Property Selection)** | Erstellen, Abrufen, Alle fuer Eigenschaft, Aktualisieren, Loeschen |
| **Hersteller (Manufacturer)** | Erstellen, Abrufen, Alle abrufen, Aktualisieren, Loeschen |

### Varianten-Eigenschaften

| Ressource | Operationen |
|-----------|------------|
| **Varianten-Eigenschaft (Variation Property)** | Abrufen, Verknuepfen, Wert setzen, Wert aktualisieren, Verknuepfung loesen |

Typischer Ablauf zum Setzen einer Eigenschaft auf einer Variante:

1. **Variante suchen** (per Nummer) - liefert `variationId` und bestehende Properties
2. **Abrufen** - Property-Relation pruefen (existiert sie schon?)
3. Falls nein: **Verknuepfen** - erstellt die Relation, liefert `propertyRelationId`
4. **Wert setzen** - setzt den Wert mit `propertyRelationId` und Sprache
5. Falls Wert existiert: **Wert aktualisieren** - aendert bestehenden Wert per `relationValueId`

### Lager und Preise

| Ressource | Operationen |
|-----------|------------|
| **Lagerbestand (Stock)** | Fuer Variante abrufen, Korrektur buchen |
| **Lager (Warehouse)** | Abrufen, Alle abrufen |
| **Verkaufspreis (Sales Price)** | Abrufen, Alle abrufen |
| **Barcode** | Fuer Variante setzen, Alle Typen abrufen |

## Entwicklung

```bash
npm run build      # TypeScript kompilieren + Icons kopieren
npm run dev        # Watch-Modus
npm run lint       # ESLint pruefen
npm run lintfix    # ESLint auto-fix
npm run format     # Prettier formatieren
```

Nach Code-Aenderungen: `npm run build` ausfuehren und n8n neu starten.

## Kompatibilitaet

Getestet mit n8n **2.2.4**. Erfordert Node.js >= 18.

## Lizenz

MIT
