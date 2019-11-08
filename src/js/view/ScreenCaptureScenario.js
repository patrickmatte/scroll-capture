import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import StartButton from "./StartButton";
import ActionView from "./ActionView";

export default class ScreenCaptureScenario extends UIComponent {

	static get template() {
		return htmlTemplate;
	}

}

let htmlTemplate = `
<screen-capture-scenario>
	<div class="window main-window">
		<header>
			<div class="title">
				<span is="ui-text">Screen Capture Pro</span>
				<button is="start-button" data-model=".">Start</button>
			</div>
		</header>
		<div class="fields">
			<actions-view data-provider="actions" is="ui-list">
				<template data-type="ActionScrollWindow">
					<action-view class="window" data-type="[[item.type]]" data-model="item">
						<div class="title">
							<span is="ui-text">[[item.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">units:</span>
								<div class="select">
									<select data-provider="item.units" data-model="item.units.selectedItem" is="ui-select"></select>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">x:</span><input type="text" data-model="item.unitX" is="ui-input"/><span class="unit" is="ui-text">[[item.units.selectedItem]]</span>
								</div>
								<div class="field">
									<span class="label">y:</span><input type="text" data-model="item.unitY" is="ui-input"/><span class="unit" is="ui-text">[[item.units.selectedItem]]</span>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">duration:</span><input type="text" data-model="item.duration" is="ui-input"/><span class="unit">s</span>
								</div>
								<div class="field">
									<span class="label">delay:</span><input type="text" data-model="item.delay" is="ui-input"/><span class="unit">s</span>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">easing:</span>
									<div class="select">
										<select data-provider="item.easingClasses" data-model="item.easingClasses.selectedItem" is="ui-select"></select>
									</div>
								</div>
								<div class="field">
									<span class="label">method:</span>
									<div class="select">
										<select data-provider="item.easingMethods" data-model="item.easingMethods.selectedItem" is="ui-select"></select>
									</div>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionSwipe">
					<action-view class="window" data-type="[[item.type]]" data-model="item">
						<div class="title">
							<span is="ui-text">[[item.name]]</span>
						</div>
						<div class="fields">
							<div class="field-group">
								<div class="field">
									<span class="label">duration:</span><input type="text" data-model="item.duration" is="ui-input"/><span class="unit">s</span>
								</div>
								<div class="field">
									<span class="label">delay:</span><input type="text" data-model="item.delay" is="ui-input"/><span class="unit">s</span>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">easing:</span>
									<div class="select">
										<select data-provider="item.easingClasses" data-model="item.easingClasses.selectedItem" is="ui-select"></select>
									</div>
								</div>
								<div class="field">
									<span class="label">method:</span>
									<div class="select">
										<select data-provider="item.easingMethods" data-model="item.easingMethods.selectedItem" is="ui-select"></select>
									</div>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionWait">
					<action-view class="window" data-type="[[item.type]]" data-model="item">
						<div class="title">
							<span is="ui-text">[[item.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">timeout:</span><input type="text" data-model="item.timeout" is="ui-input"/><span class="unit">s</span>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionMouseEvent">
					<action-view class="window" data-type="[[item.type]]" data-model="item">
						<div class="title">
							<span is="ui-text">[[item.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">type:</span>
								<div class="select">
									<select data-provider="item.eventTypes" data-model="item.eventTypes.selectedItem" is="ui-select"></select>
								</div>
							</div>
							<div class="field">
								<span class="label">element:</span><input type="text" data-model="item.cssSelector" is="ui-input"/>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">x:</span>
									<input type="text" data-model="item.x" is="ui-input"/>
									<span class="unit">px</span>
								</div>
								<div class="field">
									<span class="label">y:</span>
									<input type="text" data-model="item.y" is="ui-input"/>
									<span class="unit">px</span>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionEval">
					<action-view class="window" data-type="[[item.type]]" data-model="item">
						<div class="title">
							<span is="ui-text">[[item.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<textarea rows="4" data-model="item.code" is="ui-input"></textarea>
							</div>
						</div>
					</action-view>
				</template>
			</actions-view>
			<footer>
				<div class="window">
					<div class="title">
						<span>Add an action</span>
					</div>
					<div class="fields">
						<div class="field">
							<div class="select">
								<select is="ui-select" data-valuePath="type" data-provider="actions.types" data-model="actions.types.selectedItem">
									<template data-type="*">
										<option is="ui-text" value="[[item.type]]" data-model="item.name"></option>
									</template>
								</select>
							</div>
							<button class="add-button" is="ui-button" data-event-click="actions.addSelectedType">+</button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
</screen-capture-scenario>`;

tsunami.define("start-button", StartButton);
tsunami.define("action-view", ActionView);
