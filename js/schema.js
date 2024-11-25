// schema.js
const schemaMarkup = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"name": "Arte do Sono",
	"description": "Móveis sob medida e personalizados para transformar seu espaço com design exclusivo.",
	"url": "https://artedosonors.netlify.app",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Rua Exemplo, 123",
		"addressLocality": "Cidade",
		"addressRegion": "RS",
		"postalCode": "90000-000"
	},
	"telephone": "+55-51-12345-6789"
};

// Converte o JSON para string e adiciona ao DOM
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(schemaMarkup);
document.head.appendChild(script);

