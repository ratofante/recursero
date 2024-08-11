// Events
export interface CustomEventWithDetail<T> extends Event {
	detail: T;
}
export interface EventDetail {
	[key: string]: unknown;
}

// Types
export type Eje = {
	title: string;
	resumen: string;
	posts: Planification[];
	slug: string;
};

export type AsideNavigationEntry = {
	name: string;
	slug: string;
	submenu?: AsideNavigationEntry[];
};
