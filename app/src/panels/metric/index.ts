import { definePanel } from '../define';
import PanelMetric from './metric.vue';

export default definePanel({
	id: 'metric',
	name: '$t:panels.metric.name',
	description: '$t:panels.metric.description',
	icon: 'functions',
	component: PanelMetric,
	options: [
		{
			field: 'collection',
			type: 'string',
			name: '$t:collection',
			meta: {
				interface: 'system-collection',
				width: 'half',
			},
		},
		{
			field: 'function',
			type: 'string',
			name: '$t:aggregate_function',
			meta: {
				width: 'half',
				interface: 'select-dropdown',
				options: {
					choices: [
						{
							text: 'Average',
							value: 'avg',
						},
						{
							text: 'Sum',
							value: 'sum',
						},
						{
							text: 'Minimum',
							value: 'min',
						},
						{
							text: 'Maximum',
							value: 'max',
						},
						{
							text: 'Count',
							value: 'count',
						},
					],
				},
			},
		},
		{
			field: 'field',
			type: 'string',
			name: '$t:panels.metric.field',
			meta: {
				interface: 'system-field',
				options: {
					collectionField: 'collection',
					typeAllowList: ['integer', 'bigInteger', 'float', 'decimal'],
					allowPrimaryKey: true,
				},
				width: 'half',
			},
		},
		{
			field: 'limit',
			type: 'integer',
			name: '$t:limit',
			schema: {
				default_value: 100,
			},
			meta: {
				interface: 'input',
				width: 'half',
			},
		},
		{
			field: 'sortField',
			type: 'string',
			name: '$t:sort_field',
			meta: {
				interface: 'system-field',
				options: {
					collectionField: 'collection',
					allowPrimaryKey: true,
				},
				width: 'half',
			},
		},
		{
			field: 'sortDirection',
			type: 'string',
			name: '$t:sort_direction',
			meta: {
				interface: 'select-dropdown',
				options: {
					choices: [
						{
							text: '$t:sort_asc',
							value: 'asc',
						},
						{
							text: '$t:sort_desc',
							value: 'desc',
						},
					],
				},
				width: 'half',
			},
		},
		{
			field: 'filter',
			type: 'json',
			name: '$t:filter',
			meta: {
				interface: 'code',
				options: {
					language: 'json',
				},
			},
		},
	],
	minWidth: 16,
	minHeight: 6,
});
