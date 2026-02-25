"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plentymarkets = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class Plentymarkets {
    constructor() {
        this.description = {
            displayName: 'Plentymarkets',
            name: 'plentymarkets',
            icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxMiIgZmlsbD0iI2Q0MDIxZCIvPjxwYXRoIGQ9Ik0yMiAxNmgxMGM2LjYyNyAwIDEyIDUuMzczIDEyIDEycy01LjM3MyAxMi0xMiAxMmgtNHY4aC02VjE2em02IDE4aDRjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZoLTR2MTJ6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Verwalte Aufträge, Artikel, Kunden, Varianten, Lagerbestand, Eigenschaften und mehr in Plentymarkets/PlentyONE',
            defaults: {
                name: 'Plentymarkets',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'plentymarketsApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Resource / Ressource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Aufträge (Order)',
                            value: 'order',
                            description: 'Bestellungen verwalten - Orders',
                        },
                        {
                            name: 'Kunden (Contact)',
                            value: 'contact',
                            description: 'Kunden und Kontakte verwalten - Customers/Contacts',
                        },
                        {
                            name: 'Adressen (Address)',
                            value: 'address',
                            description: 'Adressen verwalten - Addresses',
                        },
                        {
                            name: 'Artikel (Item)',
                            value: 'item',
                            description: 'Artikel/Produkte verwalten - Items/Products',
                        },
                        {
                            name: 'Varianten (Variation)',
                            value: 'variation',
                            description: 'Artikelvarianten mit Preisen und Bestand - Variations',
                        },
                        {
                            name: 'Kategorie (Category)',
                            value: 'category',
                            description: 'Kategorien verwalten - Categories',
                        },
                        {
                            name: 'Eigenschaft (Property)',
                            value: 'property',
                            description: 'Eigenschaften verwalten - Properties',
                        },
                        {
                            name: 'Eigenschaftsauswahl (Property Selection)',
                            value: 'propertySelection',
                            description: 'Eigenschafts-Auswahlwerte - Property selection values',
                        },
                        {
                            name: 'Hersteller (Manufacturer)',
                            value: 'manufacturer',
                            description: 'Hersteller/Marken verwalten - Manufacturers/Brands',
                        },
                        {
                            name: 'Verkaufspreis (Sales Price)',
                            value: 'salesPrice',
                            description: 'Verkaufspreise verwalten - Sales prices',
                        },
                        {
                            name: 'Lagerbestand (Stock)',
                            value: 'stock',
                            description: 'Lagerbestand verwalten - Stock management',
                        },
                        {
                            name: 'Lager (Warehouse)',
                            value: 'warehouse',
                            description: 'Lagerverwaltung - Warehouses',
                        },
                        {
                            name: 'Barcode',
                            value: 'barcode',
                            description: 'Barcodes (GTIN, EAN, etc.) verwalten',
                        },
                        {
                            name: 'Dokument (Document)',
                            value: 'document',
                            description: 'Dokumente (Rechnungen, Lieferscheine, etc.) - Documents',
                        },
                        {
                            name: 'Zahlung (Payment)',
                            value: 'payment',
                            description: 'Zahlungen verwalten - Payments',
                        },
                        {
                            name: 'Varianten-Eigenschaft (Variation Property)',
                            value: 'variationProperty',
                            description: 'Eigenschaften an Varianten verknüpfen und Werte setzen - Variation property relations',
                        },
                        {
                            name: 'Versand (Shipping)',
                            value: 'shipping',
                            description: 'Versandinformationen - Shipping information',
                        },
                    ],
                    default: 'order',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['order'],
                        },
                    },
                    options: [
                        {
                            name: 'Erstellen (Create)',
                            value: 'create',
                            description: 'Neuen Auftrag erstellen - Create new order',
                            action: 'Create an order',
                        },
                        {
                            name: 'Abrufen (Get)',
                            value: 'get',
                            description: 'Einzelnen Auftrag abrufen - Get single order',
                            action: 'Get an order',
                        },
                        {
                            name: 'Alle abrufen (Get Many)',
                            value: 'getAll',
                            description: 'Mehrere Aufträge abrufen - Get multiple orders',
                            action: 'Get many orders',
                        },
                        {
                            name: 'Aktualisieren (Update)',
                            value: 'update',
                            description: 'Auftrag aktualisieren - Update order',
                            action: 'Update an order',
                        },
                        {
                            name: 'Löschen (Delete)',
                            value: 'delete',
                            description: 'Auftrag löschen - Delete order',
                            action: 'Delete an order',
                        },
                        {
                            name: 'Suchen (Search)',
                            value: 'search',
                            description: 'Aufträge suchen - Search orders',
                            action: 'Search orders',
                        },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Auftrags-ID (Order ID)',
                    name: 'orderId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['get', 'update', 'delete'],
                        },
                    },
                    default: 0,
                    description: 'Die eindeutige ID des Auftrags',
                },
                {
                    displayName: 'Auftragstyp (Order Type)',
                    name: 'orderTypeId',
                    type: 'options',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['create'],
                        },
                    },
                    options: [
                        { name: 'Auftrag (Sales Order)', value: 1 },
                        { name: 'Lieferung (Delivery)', value: 2 },
                        { name: 'Retoure (Return)', value: 3 },
                        { name: 'Gutschrift (Credit Note)', value: 4 },
                        { name: 'Gewährleistung (Warranty)', value: 5 },
                        { name: 'Reparatur (Repair)', value: 6 },
                        { name: 'Angebot (Offer)', value: 7 },
                        { name: 'Vorbestellung (Advance Order)', value: 8 },
                        { name: 'Sammelauftrag (Multi-Order)', value: 9 },
                    ],
                    default: 1,
                },
                {
                    displayName: 'Herkunft/Referrer ID',
                    name: 'orderReferrerId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['create'],
                        },
                    },
                    default: 1,
                },
                {
                    displayName: 'Mandant/Plenty ID',
                    name: 'orderPlentyId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['create'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Auftragspositionen (Order Items)',
                    name: 'orderItems',
                    type: 'fixedCollection',
                    typeOptions: {
                        multipleValues: true,
                    },
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['create'],
                        },
                    },
                    default: {},
                    placeholder: 'Position hinzufügen',
                    options: [
                        {
                            name: 'items',
                            displayName: 'Position',
                            values: [
                                {
                                    displayName: 'Typ (Type)',
                                    name: 'typeId',
                                    type: 'options',
                                    options: [
                                        { name: 'Variante (Variation)', value: 1 },
                                        { name: 'Bundle', value: 2 },
                                        { name: 'Aktionsgutschein', value: 4 },
                                        { name: 'Geschenkkarte', value: 5 },
                                        { name: 'Versandkosten', value: 6 },
                                        { name: 'Zahlungsaufschlag', value: 7 },
                                    ],
                                    default: 1,
                                },
                                {
                                    displayName: 'Varianten-ID',
                                    name: 'itemVariationId',
                                    type: 'number',
                                    default: 0,
                                },
                                {
                                    displayName: 'Menge',
                                    name: 'quantity',
                                    type: 'number',
                                    default: 1,
                                },
                                {
                                    displayName: 'Positionsname',
                                    name: 'orderItemName',
                                    type: 'string',
                                    default: '',
                                },
                                {
                                    displayName: 'MwSt-Satz %',
                                    name: 'vatRate',
                                    type: 'number',
                                    default: 19,
                                },
                                {
                                    displayName: 'Preis Brutto',
                                    name: 'priceGross',
                                    type: 'number',
                                    typeOptions: { numberPrecision: 2 },
                                    default: 0,
                                },
                            ],
                        },
                    ],
                },
                {
                    displayName: 'Rechnungsadresse ID',
                    name: 'billingAddressId',
                    type: 'number',
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['create'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Lieferadresse ID',
                    name: 'deliveryAddressId',
                    type: 'number',
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['create'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Kontakt-ID',
                    name: 'orderContactId',
                    type: 'number',
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['create'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Weitere Optionen',
                    name: 'orderOptions',
                    type: 'collection',
                    placeholder: 'Option hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['create'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Status-ID',
                            name: 'statusId',
                            type: 'number',
                            default: 3,
                        },
                        {
                            displayName: 'Lager-ID',
                            name: 'warehouseId',
                            type: 'number',
                            default: 0,
                        },
                        {
                            displayName: 'Währung',
                            name: 'currency',
                            type: 'string',
                            default: 'EUR',
                        },
                    ],
                },
                {
                    displayName: 'Filter',
                    name: 'orderFilters',
                    type: 'collection',
                    placeholder: 'Filter hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['getAll', 'search'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Seite',
                            name: 'page',
                            type: 'number',
                            default: 1,
                        },
                        {
                            displayName: 'Pro Seite',
                            name: 'itemsPerPage',
                            type: 'number',
                            default: 50,
                        },
                        {
                            displayName: 'Kontakt-ID',
                            name: 'contactId',
                            type: 'number',
                            default: 0,
                        },
                        {
                            displayName: 'Status-ID',
                            name: 'statusId',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Erstellt von',
                            name: 'createdAtFrom',
                            type: 'dateTime',
                            default: '',
                        },
                        {
                            displayName: 'Erstellt bis',
                            name: 'createdAtTo',
                            type: 'dateTime',
                            default: '',
                        },
                        {
                            displayName: 'Zusätzliche Daten',
                            name: 'with',
                            type: 'multiOptions',
                            options: [
                                { name: 'Adressen', value: 'addresses' },
                                { name: 'Relationen', value: 'relations' },
                                { name: 'Positionen', value: 'orderItems' },
                                { name: 'Kommentare', value: 'comments' },
                                { name: 'Dokumente', value: 'documents' },
                                { name: 'Zahlungen', value: 'payments' },
                            ],
                            default: ['orderItems', 'addresses'],
                        },
                    ],
                },
                {
                    displayName: 'Zu aktualisierende Felder',
                    name: 'orderUpdateFields',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['order'],
                            operation: ['update'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Status-ID',
                            name: 'statusId',
                            type: 'number',
                            default: 0,
                        },
                        {
                            displayName: 'Eigentümer-ID',
                            name: 'ownerId',
                            type: 'number',
                            default: 0,
                        },
                    ],
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                        },
                    },
                    options: [
                        {
                            name: 'Erstellen (Create)',
                            value: 'create',
                            description: 'Neuen Kontakt erstellen',
                            action: 'Create a contact',
                        },
                        {
                            name: 'Abrufen (Get)',
                            value: 'get',
                            description: 'Einzelnen Kontakt abrufen',
                            action: 'Get a contact',
                        },
                        {
                            name: 'Alle abrufen (Get Many)',
                            value: 'getAll',
                            description: 'Mehrere Kontakte abrufen',
                            action: 'Get many contacts',
                        },
                        {
                            name: 'Aktualisieren (Update)',
                            value: 'update',
                            description: 'Kontakt aktualisieren',
                            action: 'Update a contact',
                        },
                        {
                            name: 'Löschen (Delete)',
                            value: 'delete',
                            description: 'Kontakt löschen',
                            action: 'Delete a contact',
                        },
                        {
                            name: 'Suchen (Search)',
                            value: 'search',
                            description: 'Kontakte suchen',
                            action: 'Search contacts',
                        },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Kontakt-ID',
                    name: 'contactId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                            operation: ['get', 'update', 'delete'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Kontakttyp',
                    name: 'contactTypeId',
                    type: 'options',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                            operation: ['create'],
                        },
                    },
                    options: [
                        { name: 'Kunde', value: 1 },
                        { name: 'Interessent', value: 2 },
                        { name: 'Handelsvertreter', value: 3 },
                        { name: 'Lieferant', value: 4 },
                        { name: 'Hersteller', value: 5 },
                    ],
                    default: 1,
                },
                {
                    displayName: 'Vorname',
                    name: 'firstName',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                            operation: ['create'],
                        },
                    },
                    default: '',
                },
                {
                    displayName: 'Nachname',
                    name: 'lastName',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                            operation: ['create'],
                        },
                    },
                    default: '',
                },
                {
                    displayName: 'E-Mail',
                    name: 'email',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                            operation: ['create'],
                        },
                    },
                    default: '',
                },
                {
                    displayName: 'Weitere Kontaktdaten',
                    name: 'contactAdditional',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                            operation: ['create', 'update'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Anrede',
                            name: 'gender',
                            type: 'options',
                            options: [
                                { name: 'Herr', value: 'male' },
                                { name: 'Frau', value: 'female' },
                            ],
                            default: 'male',
                        },
                        {
                            displayName: 'Firma',
                            name: 'companyName',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Kundennummer',
                            name: 'number',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Externe ID',
                            name: 'externalId',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Sprache',
                            name: 'lang',
                            type: 'options',
                            options: [
                                { name: 'Deutsch', value: 'de' },
                                { name: 'Englisch', value: 'en' },
                            ],
                            default: 'de',
                        },
                        {
                            displayName: 'Telefon',
                            name: 'phone',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Newsletter',
                            name: 'newsletter',
                            type: 'boolean',
                            default: false,
                        },
                    ],
                },
                {
                    displayName: 'Filter',
                    name: 'contactFilters',
                    type: 'collection',
                    placeholder: 'Filter hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['contact'],
                            operation: ['getAll', 'search'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Seite',
                            name: 'page',
                            type: 'number',
                            default: 1,
                        },
                        {
                            displayName: 'Pro Seite',
                            name: 'itemsPerPage',
                            type: 'number',
                            default: 50,
                        },
                        {
                            displayName: 'Name',
                            name: 'name',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'E-Mail',
                            name: 'email',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Kundennummer',
                            name: 'number',
                            type: 'string',
                            default: '',
                        },
                    ],
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['address'],
                        },
                    },
                    options: [
                        {
                            name: 'Erstellen',
                            value: 'create',
                            action: 'Create an address',
                        },
                        {
                            name: 'Abrufen',
                            value: 'get',
                            action: 'Get an address',
                        },
                        {
                            name: 'Alle für Kontakt',
                            value: 'getForContact',
                            action: 'Get addresses for contact',
                        },
                        {
                            name: 'Aktualisieren',
                            value: 'update',
                            action: 'Update an address',
                        },
                        {
                            name: 'Löschen',
                            value: 'delete',
                            action: 'Delete an address',
                        },
                    ],
                    default: 'getForContact',
                },
                {
                    displayName: 'Kontakt-ID',
                    name: 'addressContactId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['create', 'getForContact'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Adress-ID',
                    name: 'addressId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['get', 'update', 'delete'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Adressfelder',
                    name: 'addressFields',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['create', 'update'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Firma',
                            name: 'name1',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Vorname',
                            name: 'name2',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Nachname',
                            name: 'name3',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Straße',
                            name: 'address1',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'PLZ',
                            name: 'postalCode',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Stadt',
                            name: 'town',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Land-ID',
                            name: 'countryId',
                            type: 'number',
                            default: 1,
                        },
                        {
                            displayName: 'Telefon',
                            name: 'phone',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'E-Mail',
                            name: 'email',
                            type: 'string',
                            default: '',
                        },
                    ],
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['item'],
                        },
                    },
                    options: [
                        {
                            name: 'Erstellen',
                            value: 'create',
                            action: 'Create an item',
                        },
                        {
                            name: 'Abrufen',
                            value: 'get',
                            action: 'Get an item',
                        },
                        {
                            name: 'Alle abrufen',
                            value: 'getAll',
                            action: 'Get many items',
                        },
                        {
                            name: 'Aktualisieren',
                            value: 'update',
                            action: 'Update an item',
                        },
                        {
                            name: 'Löschen',
                            value: 'delete',
                            action: 'Delete an item',
                        },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Artikel-ID',
                    name: 'itemId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['item'],
                            operation: ['get', 'update', 'delete'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Artikeloptionen',
                    name: 'itemFields',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['item'],
                            operation: ['create', 'update'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Zustand',
                            name: 'condition',
                            type: 'options',
                            options: [
                                { name: 'Neu', value: 0 },
                                { name: 'Gebraucht', value: 1 },
                                { name: 'B-Ware', value: 4 },
                            ],
                            default: 0,
                        },
                        {
                            displayName: 'Hersteller-ID',
                            name: 'manufacturerId',
                            type: 'number',
                            default: 0,
                        },
                        {
                            displayName: 'Aktiv',
                            name: 'isActive',
                            type: 'boolean',
                            default: true,
                        },
                    ],
                },
                {
                    displayName: 'Filter',
                    name: 'itemFilters',
                    type: 'collection',
                    placeholder: 'Filter hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['item'],
                            operation: ['getAll'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Seite',
                            name: 'page',
                            type: 'number',
                            default: 1,
                        },
                        {
                            displayName: 'Pro Seite',
                            name: 'itemsPerPage',
                            type: 'number',
                            default: 50,
                        },
                        {
                            displayName: 'Zusätzliche Daten',
                            name: 'with',
                            type: 'multiOptions',
                            options: [
                                { name: 'Varianten', value: 'variations' },
                                { name: 'Texte', value: 'itemTexts' },
                                { name: 'Bilder', value: 'itemImages' },
                            ],
                            default: ['variations'],
                        },
                    ],
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                        },
                    },
                    options: [
                        {
                            name: 'Erstellen',
                            value: 'create',
                            action: 'Create a variation',
                        },
                        {
                            name: 'Abrufen',
                            value: 'get',
                            action: 'Get a variation',
                        },
                        {
                            name: 'Alle für Artikel',
                            value: 'getForItem',
                            action: 'Get variations for item',
                        },
                        {
                            name: 'Aktualisieren',
                            value: 'update',
                            action: 'Update a variation',
                        },
                        {
                            name: 'Löschen',
                            value: 'delete',
                            action: 'Delete a variation',
                        },
                        {
                            name: 'Preis setzen',
                            value: 'setPrice',
                            action: 'Set variation price',
                        },
                        {
                            name: 'Bestand aktualisieren',
                            value: 'updateStock',
                            action: 'Update variation stock',
                        },
                        {
                            name: 'Suchen (Search)',
                            value: 'search',
                            description: 'Variante nach Nummer suchen inkl. Eigenschaften - Search by variation number',
                            action: 'Search variation by number',
                        },
                    ],
                    default: 'getForItem',
                },
                {
                    displayName: 'Artikel-ID',
                    name: 'variationItemId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['create', 'get', 'getForItem', 'update', 'delete', 'setPrice', 'updateStock'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Varianten-ID',
                    name: 'variationId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['get', 'update', 'delete', 'setPrice', 'updateStock'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Variantenfelder',
                    name: 'variationFields',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['create', 'update'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Nummer/SKU',
                            name: 'number',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Externe ID',
                            name: 'externalId',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Verfügbarkeit',
                            name: 'availability',
                            type: 'options',
                            options: [
                                { name: '1 - Sofort', value: 1 },
                                { name: '2 - 2-3 Tage', value: 2 },
                                { name: '3 - 3-5 Tage', value: 3 },
                                { name: '10 - Nicht verfügbar', value: 10 },
                            ],
                            default: 1,
                        },
                        {
                            displayName: 'Aktiv',
                            name: 'isActive',
                            type: 'boolean',
                            default: true,
                        },
                    ],
                },
                {
                    displayName: 'Verkaufspreis-ID',
                    name: 'salesPriceId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['setPrice'],
                        },
                    },
                    default: 1,
                },
                {
                    displayName: 'Preis',
                    name: 'price',
                    type: 'number',
                    typeOptions: { numberPrecision: 2 },
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['setPrice'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Lager-ID',
                    name: 'warehouseId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['updateStock'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Bestandsänderung',
                    name: 'stockQuantity',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['updateStock'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Filter',
                    name: 'variationFilters',
                    type: 'collection',
                    placeholder: 'Filter hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['getForItem'],
                        },
                    },
                    options: [
                        {
                            displayName: 'Zusätzliche Daten',
                            name: 'with',
                            type: 'multiOptions',
                            options: [
                                { name: 'Verkaufspreise', value: 'variationSalesPrices' },
                                { name: 'Barcodes', value: 'variationBarcodes' },
                                { name: 'Lagerbestand', value: 'stock' },
                                { name: 'Eigenschaften', value: 'variationProperties' },
                            ],
                            default: ['variationSalesPrices', 'stock'],
                        },
                    ],
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['category'],
                        },
                    },
                    options: [
                        { name: 'Erstellen', value: 'create', action: 'Create a category' },
                        { name: 'Abrufen', value: 'get', action: 'Get a category' },
                        { name: 'Alle abrufen', value: 'getAll', action: 'Get many categories' },
                        { name: 'Aktualisieren', value: 'update', action: 'Update a category' },
                        { name: 'Löschen', value: 'delete', action: 'Delete a category' },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Kategorie-ID',
                    name: 'categoryId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['category'],
                            operation: ['get', 'update', 'delete'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Kategoriefelder',
                    name: 'categoryFields',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['category'],
                            operation: ['create', 'update'],
                        },
                    },
                    options: [
                        { displayName: 'Name', name: 'name', type: 'string', default: '' },
                        { displayName: 'Typ', name: 'type', type: 'options', options: [{ name: 'Artikel', value: 'item' }], default: 'item' },
                        { displayName: 'Übergeordnete Kategorie', name: 'parentCategoryId', type: 'number', default: 0 },
                        { displayName: 'Position', name: 'position', type: 'number', default: 0 },
                    ],
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['property'],
                        },
                    },
                    options: [
                        { name: 'Erstellen', value: 'create', action: 'Create a property' },
                        { name: 'Abrufen', value: 'get', action: 'Get a property' },
                        { name: 'Alle abrufen', value: 'getAll', action: 'Get many properties' },
                        { name: 'Aktualisieren', value: 'update', action: 'Update a property' },
                        { name: 'Löschen', value: 'delete', action: 'Delete a property' },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Eigenschafts-ID',
                    name: 'propertyId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['property'],
                            operation: ['get', 'update', 'delete'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Eigenschaftsfelder',
                    name: 'propertyFields',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['property'],
                            operation: ['create', 'update'],
                        },
                    },
                    options: [
                        { displayName: 'Backend-Name', name: 'backendName', type: 'string', default: '' },
                        {
                            displayName: 'Datentyp',
                            name: 'cast',
                            type: 'options',
                            options: [
                                { name: 'Kurztext', value: 'shortText' },
                                { name: 'Langtext', value: 'longText' },
                                { name: 'Ganzzahl', value: 'int' },
                                { name: 'Kommazahl', value: 'float' },
                                { name: 'Auswahl', value: 'selection' },
                                { name: 'Datum', value: 'date' },
                            ],
                            default: 'shortText',
                        },
                        {
                            displayName: 'Typ',
                            name: 'typeIdentifier',
                            type: 'options',
                            options: [
                                { name: 'Artikel', value: 'item' },
                                { name: 'Variante', value: 'variation' },
                                { name: 'Kontakt', value: 'contact' },
                            ],
                            default: 'item',
                        },
                    ],
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['propertySelection'],
                        },
                    },
                    options: [
                        { name: 'Erstellen', value: 'create', action: 'Create selection' },
                        { name: 'Abrufen', value: 'get', action: 'Get selection' },
                        { name: 'Alle für Eigenschaft', value: 'getForProperty', action: 'Get selections for property' },
                        { name: 'Aktualisieren', value: 'update', action: 'Update selection' },
                        { name: 'Löschen', value: 'delete', action: 'Delete selection' },
                    ],
                    default: 'getForProperty',
                },
                {
                    displayName: 'Eigenschafts-ID',
                    name: 'selectionPropertyId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['propertySelection'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Auswahl-ID',
                    name: 'selectionId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['propertySelection'],
                            operation: ['get', 'update', 'delete'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['manufacturer'],
                        },
                    },
                    options: [
                        { name: 'Erstellen', value: 'create', action: 'Create manufacturer' },
                        { name: 'Abrufen', value: 'get', action: 'Get manufacturer' },
                        { name: 'Alle abrufen', value: 'getAll', action: 'Get many manufacturers' },
                        { name: 'Aktualisieren', value: 'update', action: 'Update manufacturer' },
                        { name: 'Löschen', value: 'delete', action: 'Delete manufacturer' },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Hersteller-ID',
                    name: 'manufacturerId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['manufacturer'],
                            operation: ['get', 'update', 'delete'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Herstellerfelder',
                    name: 'manufacturerFields',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['manufacturer'],
                            operation: ['create', 'update'],
                        },
                    },
                    options: [
                        { displayName: 'Name', name: 'name', type: 'string', default: '' },
                        { displayName: 'Externe ID', name: 'externalId', type: 'string', default: '' },
                    ],
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['salesPrice'],
                        },
                    },
                    options: [
                        { name: 'Abrufen', value: 'get', action: 'Get sales price' },
                        { name: 'Alle abrufen', value: 'getAll', action: 'Get many sales prices' },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Verkaufspreis-ID',
                    name: 'salesPriceIdGet',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['salesPrice'],
                            operation: ['get'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['stock'],
                        },
                    },
                    options: [
                        { name: 'Für Variante abrufen', value: 'getForVariation', action: 'Get stock for variation' },
                        { name: 'Korrektur buchen', value: 'correction', action: 'Book stock correction' },
                    ],
                    default: 'getForVariation',
                },
                {
                    displayName: 'Varianten-ID',
                    name: 'stockVariationId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['stock'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Lager-ID',
                    name: 'stockWarehouseId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['stock'],
                            operation: ['correction'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Menge',
                    name: 'stockCorrectionQuantity',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['stock'],
                            operation: ['correction'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['warehouse'],
                        },
                    },
                    options: [
                        { name: 'Abrufen', value: 'get', action: 'Get warehouse' },
                        { name: 'Alle abrufen', value: 'getAll', action: 'Get many warehouses' },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Lager-ID',
                    name: 'warehouseIdGet',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['warehouse'],
                            operation: ['get'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['barcode'],
                        },
                    },
                    options: [
                        { name: 'Für Variante setzen', value: 'setForVariation', action: 'Set barcode for variation' },
                        { name: 'Alle Typen abrufen', value: 'getTypes', action: 'Get barcode types' },
                    ],
                    default: 'setForVariation',
                },
                {
                    displayName: 'Artikel-ID',
                    name: 'barcodeItemId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['barcode'],
                            operation: ['setForVariation'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Varianten-ID',
                    name: 'barcodeVariationId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['barcode'],
                            operation: ['setForVariation'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Barcode-ID',
                    name: 'barcodeId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['barcode'],
                            operation: ['setForVariation'],
                        },
                    },
                    default: 1,
                },
                {
                    displayName: 'Code',
                    name: 'barcodeCode',
                    type: 'string',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['barcode'],
                            operation: ['setForVariation'],
                        },
                    },
                    default: '',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['document'],
                        },
                    },
                    options: [
                        { name: 'Abrufen', value: 'get', action: 'Get document' },
                        { name: 'Alle für Auftrag', value: 'getForOrder', action: 'Get documents for order' },
                        { name: 'Erstellen', value: 'create', action: 'Create document' },
                    ],
                    default: 'getForOrder',
                },
                {
                    displayName: 'Auftrags-ID',
                    name: 'documentOrderId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['document'],
                            operation: ['getForOrder', 'create'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Dokument-ID',
                    name: 'documentId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['document'],
                            operation: ['get'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Dokumententyp',
                    name: 'documentType',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: ['document'],
                            operation: ['create'],
                        },
                    },
                    options: [
                        { name: 'Auftragsbestätigung', value: 'order_confirmation' },
                        { name: 'Lieferschein', value: 'delivery_note' },
                        { name: 'Rechnung', value: 'invoice' },
                        { name: 'Gutschrift', value: 'credit_note' },
                        { name: 'Angebot', value: 'offer' },
                        { name: 'Auftrag', value: 'order' },
                    ],
                    default: 'invoice',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['payment'],
                        },
                    },
                    options: [
                        { name: 'Abrufen', value: 'get', action: 'Get payment' },
                        { name: 'Alle abrufen', value: 'getAll', action: 'Get many payments' },
                        { name: 'Erstellen', value: 'create', action: 'Create payment' },
                        { name: 'Aktualisieren', value: 'update', action: 'Update payment' },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Zahlungs-ID',
                    name: 'paymentId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['payment'],
                            operation: ['get', 'update'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Zahlungsfelder',
                    name: 'paymentFields',
                    type: 'collection',
                    placeholder: 'Feld hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['payment'],
                            operation: ['create', 'update'],
                        },
                    },
                    options: [
                        { displayName: 'Betrag', name: 'amount', type: 'number', typeOptions: { numberPrecision: 2 }, default: 0 },
                        { displayName: 'Währung', name: 'currency', type: 'string', default: 'EUR' },
                        {
                            displayName: 'Status',
                            name: 'status',
                            type: 'options',
                            options: [
                                { name: 'Ausstehend', value: 'pending' },
                                { name: 'Genehmigt', value: 'approved' },
                                { name: 'Abgelehnt', value: 'rejected' },
                                { name: 'Erstattet', value: 'refunded' },
                            ],
                            default: 'pending',
                        },
                    ],
                },
                {
                    displayName: 'Filter',
                    name: 'paymentFilters',
                    type: 'collection',
                    placeholder: 'Filter hinzufügen',
                    default: {},
                    displayOptions: {
                        show: {
                            resource: ['payment'],
                            operation: ['getAll'],
                        },
                    },
                    options: [
                        { displayName: 'Seite', name: 'page', type: 'number', default: 1 },
                        { displayName: 'Pro Seite', name: 'itemsPerPage', type: 'number', default: 50 },
                        { displayName: 'Auftrags-ID', name: 'orderId', type: 'number', default: 0 },
                    ],
                },
                {
                    displayName: 'Varianten-Nummer',
                    name: 'variationNumber',
                    type: 'string',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['search'],
                        },
                    },
                    default: '',
                    description: 'Exakte Varianten-Nummer zum Suchen',
                },
                {
                    displayName: 'Zusätzliche Daten',
                    name: 'variationSearchWith',
                    type: 'multiOptions',
                    displayOptions: {
                        show: {
                            resource: ['variation'],
                            operation: ['search'],
                        },
                    },
                    options: [
                        { name: 'Eigenschaften', value: 'Properties' },
                        { name: 'Verkaufspreise', value: 'variationSalesPrices' },
                        { name: 'Barcodes', value: 'variationBarcodes' },
                        { name: 'Lagerbestand', value: 'stock' },
                        { name: 'Bilder', value: 'images' },
                    ],
                    default: ['Properties'],
                    description: 'Zusätzliche Relationen laden',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['variationProperty'],
                        },
                    },
                    options: [
                        {
                            name: 'Abrufen (Get)',
                            value: 'get',
                            description: 'Eigenschafts-Verknüpfung einer Variante abrufen',
                            action: 'Get variation property relation',
                        },
                        {
                            name: 'Verknüpfen (Link)',
                            value: 'link',
                            description: 'Eigenschaft mit Variante verknüpfen',
                            action: 'Link property to variation',
                        },
                        {
                            name: 'Wert setzen (Set Value)',
                            value: 'setValue',
                            description: 'Wert für eine verknüpfte Eigenschaft erstellen',
                            action: 'Set property relation value',
                        },
                        {
                            name: 'Wert aktualisieren (Update Value)',
                            value: 'updateValue',
                            description: 'Bestehenden Eigenschaftswert aktualisieren',
                            action: 'Update property relation value',
                        },
                        {
                            name: 'Verknüpfung lösen (Unlink)',
                            value: 'unlink',
                            description: 'Eigenschafts-Verknüpfung entfernen',
                            action: 'Unlink property from variation',
                        },
                    ],
                    default: 'get',
                },
                {
                    displayName: 'Varianten-ID',
                    name: 'vpVariationId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variationProperty'],
                            operation: ['get', 'link'],
                        },
                    },
                    default: 0,
                    description: 'Die ID der Variante',
                },
                {
                    displayName: 'Eigenschafts-ID (Property ID)',
                    name: 'vpPropertyId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variationProperty'],
                            operation: ['get', 'link'],
                        },
                    },
                    default: 0,
                    description: 'Die ID der Eigenschaft',
                },
                {
                    displayName: 'Property-Relation-ID',
                    name: 'vpPropertyRelationId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variationProperty'],
                            operation: ['setValue', 'unlink'],
                        },
                    },
                    default: 0,
                    description: 'Die ID der Eigenschafts-Verknüpfung (aus GET oder Link-Antwort)',
                },
                {
                    displayName: 'Relation-Value-ID',
                    name: 'vpRelationValueId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variationProperty'],
                            operation: ['updateValue'],
                        },
                    },
                    default: 0,
                    description: 'Die ID des Eigenschaftswerts (relationValues[].id aus GET-Antwort)',
                },
                {
                    displayName: 'Wert (Value)',
                    name: 'vpValue',
                    type: 'string',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['variationProperty'],
                            operation: ['setValue', 'updateValue'],
                        },
                    },
                    default: '',
                    description: 'Der Wert der Eigenschaft',
                },
                {
                    displayName: 'Sprache (Language)',
                    name: 'vpLang',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: ['variationProperty'],
                            operation: ['setValue', 'updateValue'],
                        },
                    },
                    options: [
                        { name: 'Deutsch', value: 'DE' },
                        { name: 'Englisch', value: 'EN' },
                        { name: 'Französisch', value: 'FR' },
                        { name: 'Sprachunabhängig', value: '0' },
                    ],
                    default: 'DE',
                    description: 'Sprache des Eigenschaftswerts',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['shipping'],
                        },
                    },
                    options: [
                        { name: 'Abrufen', value: 'get', action: 'Get shipping' },
                        { name: 'Alle für Auftrag', value: 'getForOrder', action: 'Get shipping for order' },
                    ],
                    default: 'getForOrder',
                },
                {
                    displayName: 'Auftrags-ID',
                    name: 'shippingOrderId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['shipping'],
                            operation: ['getForOrder'],
                        },
                    },
                    default: 0,
                },
                {
                    displayName: 'Versand-ID',
                    name: 'shippingId',
                    type: 'number',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['shipping'],
                            operation: ['get'],
                        },
                    },
                    default: 0,
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        const credentials = await this.getCredentials('plentymarketsApi');
        let baseUrl = (credentials.baseUrl || '').replace(/\/+$/, '');
        if (!baseUrl && credentials.environment === 'plentyone') {
            baseUrl = 'https://plentyone.de';
        }
        if (!baseUrl) {
            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                message: 'Keine Base URL konfiguriert. Bitte in den Credentials hinterlegen.',
            });
        }
        let accessToken = null;
        const getAccessToken = async () => {
            if (accessToken)
                return accessToken;
            const loginResponse = await this.helpers.httpRequest({
                method: 'POST',
                url: `${baseUrl}/rest/login`,
                body: {
                    username: credentials.username,
                    password: credentials.password,
                },
                json: true,
            });
            accessToken = loginResponse.accessToken;
            return accessToken;
        };
        const plentyRequest = async (method, endpoint, body, qs) => {
            const token = await getAccessToken();
            const options = {
                method,
                url: `${baseUrl}/rest${endpoint}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                json: true,
            };
            if (body && Object.keys(body).length > 0) {
                options.body = body;
            }
            if (qs && Object.keys(qs).length > 0) {
                options.qs = qs;
            }
            try {
                return await this.helpers.httpRequest(options);
            }
            catch (error) {
                throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
            }
        };
        for (let i = 0; i < items.length; i++) {
            try {
                let responseData;
                if (resource === 'order') {
                    if (operation === 'create') {
                        const typeId = this.getNodeParameter('orderTypeId', i);
                        const referrerId = this.getNodeParameter('orderReferrerId', i);
                        const plentyId = this.getNodeParameter('orderPlentyId', i);
                        const orderItemsData = this.getNodeParameter('orderItems', i);
                        const billingAddressId = this.getNodeParameter('billingAddressId', i);
                        const deliveryAddressId = this.getNodeParameter('deliveryAddressId', i);
                        const contactId = this.getNodeParameter('orderContactId', i);
                        const options = this.getNodeParameter('orderOptions', i, {});
                        const body = {
                            typeId,
                            referrerId,
                            plentyId,
                            statusId: options.statusId || 3,
                        };
                        if (orderItemsData.items && Array.isArray(orderItemsData.items)) {
                            body.orderItems = orderItemsData.items.map((item) => ({
                                typeId: item.typeId || 1,
                                quantity: item.quantity || 1,
                                orderItemName: item.orderItemName || '',
                                itemVariationId: item.itemVariationId || 0,
                            }));
                        }
                        const addressRelations = [];
                        if (billingAddressId)
                            addressRelations.push({ typeId: 1, addressId: billingAddressId });
                        if (deliveryAddressId)
                            addressRelations.push({ typeId: 2, addressId: deliveryAddressId });
                        if (addressRelations.length > 0)
                            body.addressRelations = addressRelations;
                        const relations = [];
                        if (contactId)
                            relations.push({ referenceType: 'contact', referenceId: contactId, relation: 'receiver' });
                        if (relations.length > 0)
                            body.relations = relations;
                        responseData = await plentyRequest('POST', '/orders', body);
                    }
                    else if (operation === 'get') {
                        const orderId = this.getNodeParameter('orderId', i);
                        responseData = await plentyRequest('GET', `/orders/${orderId}`);
                    }
                    else if (operation === 'getAll' || operation === 'search') {
                        const filters = this.getNodeParameter('orderFilters', i, {});
                        const qs = {};
                        if (filters.page)
                            qs.page = filters.page;
                        if (filters.itemsPerPage)
                            qs.itemsPerPage = filters.itemsPerPage;
                        if (filters.contactId)
                            qs.contactId = filters.contactId;
                        if (filters.statusId)
                            qs.statusId = filters.statusId;
                        if (filters.createdAtFrom)
                            qs.createdAtFrom = filters.createdAtFrom;
                        if (filters.createdAtTo)
                            qs.createdAtTo = filters.createdAtTo;
                        if (filters.with && filters.with.length > 0) {
                            qs.with = filters.with.join(',');
                        }
                        responseData = await plentyRequest('GET', '/orders', undefined, qs);
                    }
                    else if (operation === 'update') {
                        const orderId = this.getNodeParameter('orderId', i);
                        const updateFields = this.getNodeParameter('orderUpdateFields', i, {});
                        responseData = await plentyRequest('PUT', `/orders/${orderId}`, updateFields);
                    }
                    else if (operation === 'delete') {
                        const orderId = this.getNodeParameter('orderId', i);
                        responseData = await plentyRequest('DELETE', `/orders/${orderId}`);
                    }
                }
                else if (resource === 'contact') {
                    if (operation === 'create') {
                        const typeId = this.getNodeParameter('contactTypeId', i);
                        const firstName = this.getNodeParameter('firstName', i, '');
                        const lastName = this.getNodeParameter('lastName', i, '');
                        const email = this.getNodeParameter('email', i, '');
                        const additional = this.getNodeParameter('contactAdditional', i, {});
                        const body = { typeId, firstName, lastName, ...additional };
                        if (email) {
                            body.options = [{ typeId: 2, subTypeId: 4, value: email, priority: 0 }];
                        }
                        responseData = await plentyRequest('POST', '/accounts/contacts', body);
                    }
                    else if (operation === 'get') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await plentyRequest('GET', `/accounts/contacts/${contactId}`);
                    }
                    else if (operation === 'getAll' || operation === 'search') {
                        const filters = this.getNodeParameter('contactFilters', i, {});
                        const qs = {};
                        if (filters.page)
                            qs.page = filters.page;
                        if (filters.itemsPerPage)
                            qs.itemsPerPage = filters.itemsPerPage;
                        if (filters.name)
                            qs.name = filters.name;
                        if (filters.email)
                            qs.email = filters.email;
                        if (filters.number)
                            qs.number = filters.number;
                        responseData = await plentyRequest('GET', '/accounts/contacts', undefined, qs);
                    }
                    else if (operation === 'update') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const additional = this.getNodeParameter('contactAdditional', i, {});
                        responseData = await plentyRequest('PUT', `/accounts/contacts/${contactId}`, additional);
                    }
                    else if (operation === 'delete') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await plentyRequest('DELETE', `/accounts/contacts/${contactId}`);
                    }
                }
                else if (resource === 'address') {
                    if (operation === 'create') {
                        const contactId = this.getNodeParameter('addressContactId', i);
                        const fields = this.getNodeParameter('addressFields', i, {});
                        responseData = await plentyRequest('POST', `/accounts/contacts/${contactId}/addresses`, fields);
                    }
                    else if (operation === 'get') {
                        const addressId = this.getNodeParameter('addressId', i);
                        responseData = await plentyRequest('GET', `/accounts/addresses/${addressId}`);
                    }
                    else if (operation === 'getForContact') {
                        const contactId = this.getNodeParameter('addressContactId', i);
                        responseData = await plentyRequest('GET', `/accounts/contacts/${contactId}/addresses`);
                    }
                    else if (operation === 'update') {
                        const addressId = this.getNodeParameter('addressId', i);
                        const fields = this.getNodeParameter('addressFields', i, {});
                        responseData = await plentyRequest('PUT', `/accounts/addresses/${addressId}`, fields);
                    }
                    else if (operation === 'delete') {
                        const addressId = this.getNodeParameter('addressId', i);
                        responseData = await plentyRequest('DELETE', `/accounts/addresses/${addressId}`);
                    }
                }
                else if (resource === 'item') {
                    if (operation === 'create') {
                        const fields = this.getNodeParameter('itemFields', i, {});
                        responseData = await plentyRequest('POST', '/items', fields);
                    }
                    else if (operation === 'get') {
                        const itemId = this.getNodeParameter('itemId', i);
                        responseData = await plentyRequest('GET', `/items/${itemId}`);
                    }
                    else if (operation === 'getAll') {
                        const filters = this.getNodeParameter('itemFilters', i, {});
                        const qs = {};
                        if (filters.page)
                            qs.page = filters.page;
                        if (filters.itemsPerPage)
                            qs.itemsPerPage = filters.itemsPerPage;
                        if (filters.with && filters.with.length > 0) {
                            qs.with = filters.with.join(',');
                        }
                        responseData = await plentyRequest('GET', '/items', undefined, qs);
                    }
                    else if (operation === 'update') {
                        const itemId = this.getNodeParameter('itemId', i);
                        const fields = this.getNodeParameter('itemFields', i, {});
                        responseData = await plentyRequest('PUT', `/items/${itemId}`, fields);
                    }
                    else if (operation === 'delete') {
                        const itemId = this.getNodeParameter('itemId', i);
                        responseData = await plentyRequest('DELETE', `/items/${itemId}`);
                    }
                }
                else if (resource === 'variation') {
                    if (operation === 'search') {
                        const variationNumber = this.getNodeParameter('variationNumber', i);
                        const withData = this.getNodeParameter('variationSearchWith', i, []);
                        const qs = { numberExact: variationNumber };
                        if (withData.length > 0) {
                            qs.with = withData.join(',');
                        }
                        responseData = await plentyRequest('GET', '/items/variations', undefined, qs);
                    }
                    else {
                        const itemId = this.getNodeParameter('variationItemId', i);
                        if (operation === 'create') {
                            const fields = this.getNodeParameter('variationFields', i, {});
                            responseData = await plentyRequest('POST', `/items/${itemId}/variations`, fields);
                        }
                        else if (operation === 'get') {
                            const variationId = this.getNodeParameter('variationId', i);
                            responseData = await plentyRequest('GET', `/items/${itemId}/variations/${variationId}`);
                        }
                        else if (operation === 'getForItem') {
                            const filters = this.getNodeParameter('variationFilters', i, {});
                            const qs = {};
                            if (filters.with && filters.with.length > 0) {
                                qs.with = filters.with.join(',');
                            }
                            responseData = await plentyRequest('GET', `/items/${itemId}/variations`, undefined, qs);
                        }
                        else if (operation === 'update') {
                            const variationId = this.getNodeParameter('variationId', i);
                            const fields = this.getNodeParameter('variationFields', i, {});
                            responseData = await plentyRequest('PUT', `/items/${itemId}/variations/${variationId}`, fields);
                        }
                        else if (operation === 'delete') {
                            const variationId = this.getNodeParameter('variationId', i);
                            responseData = await plentyRequest('DELETE', `/items/${itemId}/variations/${variationId}`);
                        }
                        else if (operation === 'setPrice') {
                            const variationId = this.getNodeParameter('variationId', i);
                            const salesPriceId = this.getNodeParameter('salesPriceId', i);
                            const price = this.getNodeParameter('price', i);
                            responseData = await plentyRequest('POST', `/items/${itemId}/variations/${variationId}/variation_sales_prices`, {
                                salesPriceId,
                                price,
                            });
                        }
                        else if (operation === 'updateStock') {
                            const variationId = this.getNodeParameter('variationId', i);
                            const warehouseId = this.getNodeParameter('warehouseId', i);
                            const quantity = this.getNodeParameter('stockQuantity', i);
                            responseData = await plentyRequest('PUT', '/stocks', { variationId, warehouseId, quantity, reasonId: 301 });
                        }
                    }
                }
                else if (resource === 'category') {
                    if (operation === 'create') {
                        const fields = this.getNodeParameter('categoryFields', i, {});
                        responseData = await plentyRequest('POST', '/categories', fields);
                    }
                    else if (operation === 'get') {
                        const categoryId = this.getNodeParameter('categoryId', i);
                        responseData = await plentyRequest('GET', `/categories/${categoryId}`);
                    }
                    else if (operation === 'getAll') {
                        responseData = await plentyRequest('GET', '/categories');
                    }
                    else if (operation === 'update') {
                        const categoryId = this.getNodeParameter('categoryId', i);
                        const fields = this.getNodeParameter('categoryFields', i, {});
                        responseData = await plentyRequest('PUT', `/categories/${categoryId}`, fields);
                    }
                    else if (operation === 'delete') {
                        const categoryId = this.getNodeParameter('categoryId', i);
                        responseData = await plentyRequest('DELETE', `/categories/${categoryId}`);
                    }
                }
                else if (resource === 'property') {
                    if (operation === 'create') {
                        const fields = this.getNodeParameter('propertyFields', i, {});
                        responseData = await plentyRequest('POST', '/properties', fields);
                    }
                    else if (operation === 'get') {
                        const propertyId = this.getNodeParameter('propertyId', i);
                        responseData = await plentyRequest('GET', `/properties/${propertyId}`);
                    }
                    else if (operation === 'getAll') {
                        responseData = await plentyRequest('GET', '/properties');
                    }
                    else if (operation === 'update') {
                        const propertyId = this.getNodeParameter('propertyId', i);
                        const fields = this.getNodeParameter('propertyFields', i, {});
                        responseData = await plentyRequest('PUT', `/properties/${propertyId}`, fields);
                    }
                    else if (operation === 'delete') {
                        const propertyId = this.getNodeParameter('propertyId', i);
                        responseData = await plentyRequest('DELETE', `/properties/${propertyId}`);
                    }
                }
                else if (resource === 'propertySelection') {
                    const propertyId = this.getNodeParameter('selectionPropertyId', i);
                    if (operation === 'create') {
                        responseData = await plentyRequest('POST', `/properties/${propertyId}/selections`, {});
                    }
                    else if (operation === 'get') {
                        const selectionId = this.getNodeParameter('selectionId', i);
                        responseData = await plentyRequest('GET', `/properties/${propertyId}/selections/${selectionId}`);
                    }
                    else if (operation === 'getForProperty') {
                        responseData = await plentyRequest('GET', `/properties/${propertyId}/selections`);
                    }
                    else if (operation === 'update') {
                        const selectionId = this.getNodeParameter('selectionId', i);
                        responseData = await plentyRequest('PUT', `/properties/${propertyId}/selections/${selectionId}`, {});
                    }
                    else if (operation === 'delete') {
                        const selectionId = this.getNodeParameter('selectionId', i);
                        responseData = await plentyRequest('DELETE', `/properties/${propertyId}/selections/${selectionId}`);
                    }
                }
                else if (resource === 'manufacturer') {
                    if (operation === 'create') {
                        const fields = this.getNodeParameter('manufacturerFields', i, {});
                        responseData = await plentyRequest('POST', '/items/manufacturers', fields);
                    }
                    else if (operation === 'get') {
                        const manufacturerId = this.getNodeParameter('manufacturerId', i);
                        responseData = await plentyRequest('GET', `/items/manufacturers/${manufacturerId}`);
                    }
                    else if (operation === 'getAll') {
                        responseData = await plentyRequest('GET', '/items/manufacturers');
                    }
                    else if (operation === 'update') {
                        const manufacturerId = this.getNodeParameter('manufacturerId', i);
                        const fields = this.getNodeParameter('manufacturerFields', i, {});
                        responseData = await plentyRequest('PUT', `/items/manufacturers/${manufacturerId}`, fields);
                    }
                    else if (operation === 'delete') {
                        const manufacturerId = this.getNodeParameter('manufacturerId', i);
                        responseData = await plentyRequest('DELETE', `/items/manufacturers/${manufacturerId}`);
                    }
                }
                else if (resource === 'salesPrice') {
                    if (operation === 'get') {
                        const salesPriceId = this.getNodeParameter('salesPriceIdGet', i);
                        responseData = await plentyRequest('GET', `/items/sales_prices/${salesPriceId}`);
                    }
                    else if (operation === 'getAll') {
                        responseData = await plentyRequest('GET', '/items/sales_prices');
                    }
                }
                else if (resource === 'stock') {
                    const variationId = this.getNodeParameter('stockVariationId', i);
                    if (operation === 'getForVariation') {
                        responseData = await plentyRequest('GET', `/stockmanagement/stock?variationId=${variationId}`);
                    }
                    else if (operation === 'correction') {
                        const warehouseId = this.getNodeParameter('stockWarehouseId', i);
                        const quantity = this.getNodeParameter('stockCorrectionQuantity', i);
                        responseData = await plentyRequest('PUT', '/stockmanagement/stock/correction', {
                            variationId,
                            warehouseId,
                            quantity,
                            reasonId: 301,
                        });
                    }
                }
                else if (resource === 'warehouse') {
                    if (operation === 'get') {
                        const warehouseId = this.getNodeParameter('warehouseIdGet', i);
                        responseData = await plentyRequest('GET', `/stockmanagement/warehouses/${warehouseId}`);
                    }
                    else if (operation === 'getAll') {
                        responseData = await plentyRequest('GET', '/stockmanagement/warehouses');
                    }
                }
                else if (resource === 'barcode') {
                    if (operation === 'setForVariation') {
                        const itemId = this.getNodeParameter('barcodeItemId', i);
                        const variationId = this.getNodeParameter('barcodeVariationId', i);
                        const barcodeId = this.getNodeParameter('barcodeId', i);
                        const code = this.getNodeParameter('barcodeCode', i);
                        responseData = await plentyRequest('POST', `/items/${itemId}/variations/${variationId}/variation_barcodes`, {
                            barcodeId,
                            code,
                        });
                    }
                    else if (operation === 'getTypes') {
                        responseData = await plentyRequest('GET', '/items/barcodes');
                    }
                }
                else if (resource === 'document') {
                    const token = await getAccessToken();
                    if (operation === 'get') {
                        const documentId = this.getNodeParameter('documentId', i);
                        responseData = await plentyRequest('GET', `/orders/documents/${documentId}`);
                        if (responseData && responseData.id) {
                            responseData.downloadUrl = `${baseUrl}/rest/documents/${responseData.id}`;
                            responseData.accessToken = token;
                            const fileBuffer = await this.helpers.httpRequest({
                                method: 'GET',
                                url: `${baseUrl}/rest/documents/${responseData.id}`,
                                headers: { Authorization: `Bearer ${token}` },
                                encoding: 'arraybuffer',
                            });
                            const fileName = (responseData.path || '').split('/').pop() || `document_${responseData.id}.pdf`;
                            const binaryData = await this.helpers.prepareBinaryData(Buffer.from(fileBuffer), fileName, 'application/pdf');
                            const executionData = this.helpers.constructExecutionMetaData([{ json: responseData, binary: { data: binaryData } }], { itemData: { item: i } });
                            returnData.push(...executionData);
                            continue;
                        }
                    }
                    else if (operation === 'getForOrder') {
                        const orderId = this.getNodeParameter('documentOrderId', i);
                        responseData = await plentyRequest('GET', `/orders/${orderId}/documents`);
                        if (Array.isArray(responseData)) {
                            responseData = responseData.map((doc) => ({
                                ...doc,
                                downloadUrl: doc.id ? `${baseUrl}/rest/documents/${doc.id}` : undefined,
                                accessToken: token,
                            }));
                        }
                    }
                    else if (operation === 'create') {
                        const orderId = this.getNodeParameter('documentOrderId', i);
                        const documentType = this.getNodeParameter('documentType', i);
                        responseData = await plentyRequest('POST', `/orders/${orderId}/documents`, { type: documentType });
                    }
                }
                else if (resource === 'payment') {
                    if (operation === 'get') {
                        const paymentId = this.getNodeParameter('paymentId', i);
                        responseData = await plentyRequest('GET', `/orders/payments/${paymentId}`);
                    }
                    else if (operation === 'getAll') {
                        const filters = this.getNodeParameter('paymentFilters', i, {});
                        const qs = {};
                        if (filters.page)
                            qs.page = filters.page;
                        if (filters.itemsPerPage)
                            qs.itemsPerPage = filters.itemsPerPage;
                        if (filters.orderId)
                            qs.orderId = filters.orderId;
                        responseData = await plentyRequest('GET', '/orders/payments', undefined, qs);
                    }
                    else if (operation === 'create') {
                        const fields = this.getNodeParameter('paymentFields', i, {});
                        responseData = await plentyRequest('POST', '/orders/payments', fields);
                    }
                    else if (operation === 'update') {
                        const paymentId = this.getNodeParameter('paymentId', i);
                        const fields = this.getNodeParameter('paymentFields', i, {});
                        responseData = await plentyRequest('PUT', `/orders/payments/${paymentId}`, fields);
                    }
                }
                else if (resource === 'shipping') {
                    if (operation === 'get') {
                        const shippingId = this.getNodeParameter('shippingId', i);
                        responseData = await plentyRequest('GET', `/orders/shipping/${shippingId}`);
                    }
                    else if (operation === 'getForOrder') {
                        const orderId = this.getNodeParameter('shippingOrderId', i);
                        responseData = await plentyRequest('GET', `/orders/${orderId}/shipping`);
                    }
                }
                else if (resource === 'variationProperty') {
                    if (operation === 'get') {
                        const variationId = this.getNodeParameter('vpVariationId', i);
                        const propertyId = this.getNodeParameter('vpPropertyId', i);
                        const qs = {
                            relationType: 'variation',
                            relationTargetId: variationId,
                            propertyId,
                        };
                        responseData = await plentyRequest('GET', '/properties/relations', undefined, qs);
                    }
                    else if (operation === 'link') {
                        const variationId = this.getNodeParameter('vpVariationId', i);
                        const propertyId = this.getNodeParameter('vpPropertyId', i);
                        responseData = await plentyRequest('POST', '/properties/relations', {
                            propertyId,
                            relationTypeIdentifier: 'item',
                            relationTargetId: variationId,
                        });
                    }
                    else if (operation === 'setValue') {
                        const propertyRelationId = this.getNodeParameter('vpPropertyRelationId', i);
                        const value = this.getNodeParameter('vpValue', i);
                        const lang = this.getNodeParameter('vpLang', i);
                        const qs = { propertyRelationId };
                        responseData = await plentyRequest('POST', '/properties/relations/values', { lang, value }, qs);
                    }
                    else if (operation === 'updateValue') {
                        const relationValueId = this.getNodeParameter('vpRelationValueId', i);
                        const value = this.getNodeParameter('vpValue', i);
                        const lang = this.getNodeParameter('vpLang', i);
                        responseData = await plentyRequest('PUT', `/properties/relations/values/${relationValueId}`, { lang, value });
                    }
                    else if (operation === 'unlink') {
                        const propertyRelationId = this.getNodeParameter('vpPropertyRelationId', i);
                        responseData = await plentyRequest('DELETE', `/properties/relations/${propertyRelationId}`);
                    }
                }
                const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray(responseData), { itemData: { item: i } });
                returnData.push(...executionData);
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const executionErrorData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray({ error: error.message }), { itemData: { item: i } });
                    returnData.push(...executionErrorData);
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.Plentymarkets = Plentymarkets;
//# sourceMappingURL=Plentymarkets.node.js.map