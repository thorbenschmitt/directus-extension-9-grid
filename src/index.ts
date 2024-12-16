import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
	id: "9-grid-alignment",
	name: "9 Grid Alignment",
	icon: "apps",
	description: "Allows you to set alignment for 9 grid columns",
	component: InterfaceComponent,
	options: null,
	types: ["string"],
});
