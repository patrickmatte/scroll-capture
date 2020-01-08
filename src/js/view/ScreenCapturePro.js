import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import StartButton from "./StartButton";
import ActionView from "./ActionView";

export default class ScreenCapturePro extends UIComponent {

	constructor(element) {
		super(element);
	}

}

ScreenCapturePro.template = `
<screen-capture-pro>
	<div class="window main-window">
		<div class="app-name">Scroll Capture Pro</div>
		<header>
			<div class="title">
				<div class="tabs">
					<button class="tab" data-path="sequencer" is="router-button" data-selected="true">
						<span>Storyboard</span>
					</button>
					<button class="tab" data-path="recorder" is="router-button" data-selected="false">
						<span>Capture</span>
					</button>
				</div>
				<button is="start-button" data-model=".">Start</button>
			</div>
		</header>
		<div class="panel fields recorder" is="ui-component">
			
		</div>
		<div class="panel fields sequencer" data-state="show" is="ui-component">
			<div class="options">
				<button class="play-button" is="ui-button" data-model="." data-click="start"><span class="label">Play</span><span class="icon"></span></button>
				<button class="record-button" is="ui-button" data-model="." data-click="start"><span class="label">Play & Capture</span><span class="icon"></span></button>
			</div>
			<actions-view data-provider="actions" is="ui-list">
				<template data-type="ActionScroll">
					<action-view class="window" data-type="[[item.type]]" data-model="item">
						<div class="title">
							<span class="tab" is="ui-text">[[item.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">element:</span><input type="text" data-model="item.target" is="ui-input"/>
							</div>
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
							<span class="tab" is="ui-text">[[item.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">element:</span><input type="text" data-model="item.elementSelector" is="ui-input"/>
							</div>
							<div class="label">points:</div>
							<div class="field-group">
								<div class="points" data-provider="item.points" is="ui-list">
									<template>
										<div class="field-group">
											<div class="field">
												<span class="label">x:</span><input type="text" data-model="item.x" is="ui-input"/><span class="unit">px</span>
											</div>
											<div class="field">
												<span class="label">y:</span><input type="text" data-model="item.y" is="ui-input"/><span class="unit">px</span>
											</div>
										</div>
									</template>
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
				<template data-type="ActionWait">
					<action-view class="window" data-type="[[item.type]]" data-model="item">
						<div class="title">
							<span class="tab" is="ui-text">[[item.name]]</span>
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
							<span class="tab" is="ui-text">[[item.name]]</span>
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
							<span class="tab" is="ui-text">[[item.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<textarea rows="5" data-model="item.code" is="ui-input"></textarea>
							</div>
						</div>
					</action-view>
				</template>
			</actions-view>
			<footer>
				<div class="window">
					<div class="title">
						<span class="tab">Add an action</span>
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
							<button class="add-button" is="ui-button" data-click="actions.addSelectedType">+</button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
</screen-capture-pro>
`;

tsunami.define("start-button", StartButton);
tsunami.define("action-view", ActionView);
