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
<!--		<div class="app-name">Scroll Capture</div>-->
		<header>
			<div class="title">
				<div class="tabs">
					<button class="tab" data-path="sequencer" is="router-button" data-selected="true">
						<span>Scroll Capture</span>
					</button>
<!--					<button class="start-button play-button" is="ui-button" data-model="." data-click="start">-->
<!--						<span>Play</span>-->
<!--					</button>-->
				</div>
				<button class="play-button" is="ui-button" data-model="." data-click="start"><span class="label">Play</span><span class="icon"></span></button>
			</div>
		</header>
		<div class="panel fields sequencer" data-state="show" is="ui-component">
<!--			<div class="options">-->
<!--				<button class="play-button" is="ui-button" data-model="." data-click="start"><span class="label">Play</span><span class="icon"></span></button>-->
<!--			</div>-->
			<actions-view data-provider="actions" is="ui-list">
				<template data-type="ActionScroll">
					<action-view class="window" data-type="[[data.type]]" data-model="data">
						<div class="title">
							<span class="tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">element:</span><input type="text" data-model="data.target" is="ui-input"/>
							</div>
							<div class="field">
								<span class="label">units:</span>
								<div class="select">
									<select data-provider="data.units" data-model="data.units.selectedItem" is="ui-select"></select>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">x:</span><input type="text" data-model="data.unitX" is="ui-input"/><span class="unit" is="ui-text">[[data.units.selectedItem]]</span>
								</div>
								<div class="field">
									<span class="label">y:</span><input type="text" data-model="data.unitY" is="ui-input"/><span class="unit" is="ui-text">[[data.units.selectedItem]]</span>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">duration:</span><input type="text" data-model="data.duration" is="ui-input"/><span class="unit">s</span>
								</div>
								<div class="field">
									<span class="label">delay:</span><input type="text" data-model="data.delay" is="ui-input"/><span class="unit">s</span>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">easing:</span>
									<div class="select">
										<select data-provider="data.easingClasses" data-model="data.easingClasses.selectedItem" is="ui-select"></select>
									</div>
								</div>
								<div class="field">
									<span class="label">method:</span>
									<div class="select">
										<select data-provider="data.easingMethods" data-model="data.easingMethods.selectedItem" is="ui-select"></select>
									</div>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionSwipe">
					<action-view class="window" data-type="[[data.type]]" data-model="data">
						<div class="title">
							<span class="tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">element:</span><input type="text" data-model="data.elementSelector" is="ui-input"/>
							</div>
							<div class="label">points:</div>
							<div class="field-group">
								<div class="points" data-provider="data.points" is="ui-list">
									<template>
										<div class="field-group">
											<div class="field">
												<span class="label">x:</span><input type="text" data-model="data.x" is="ui-input"/><span class="unit">px</span>
											</div>
											<div class="field">
												<span class="label">y:</span><input type="text" data-model="data.y" is="ui-input"/><span class="unit">px</span>
											</div>
										</div>
									</template>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">duration:</span><input type="text" data-model="data.duration" is="ui-input"/><span class="unit">s</span>
								</div>
								<div class="field">
									<span class="label">delay:</span><input type="text" data-model="data.delay" is="ui-input"/><span class="unit">s</span>
								</div>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">easing:</span>
									<div class="select">
										<select data-provider="data.easingClasses" data-model="data.easingClasses.selectedItem" is="ui-select"></select>
									</div>
								</div>
								<div class="field">
									<span class="label">method:</span>
									<div class="select">
										<select data-provider="data.easingMethods" data-model="data.easingMethods.selectedItem" is="ui-select"></select>
									</div>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionWait">
					<action-view class="window" data-type="[[data.type]]" data-model="data">
						<div class="title">
							<span class="tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">timeout:</span><input type="text" data-model="data.timeout" is="ui-input"/><span class="unit">s</span>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionMouseEvent">
					<action-view class="window" data-type="[[data.type]]" data-model="data">
						<div class="title">
							<span class="tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<span class="label">type:</span>
								<div class="select">
									<select data-provider="data.eventTypes" data-model="data.eventTypes.selectedItem" is="ui-select"></select>
								</div>
							</div>
							<div class="field">
								<span class="label">element:</span><input type="text" data-model="data.cssSelector" is="ui-input"/>
							</div>
							<div class="field-group">
								<div class="field">
									<span class="label">x:</span>
									<input type="text" data-model="data.x" is="ui-input"/>
									<span class="unit">px</span>
								</div>
								<div class="field">
									<span class="label">y:</span>
									<input type="text" data-model="data.y" is="ui-input"/>
									<span class="unit">px</span>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionEval">
					<action-view class="window" data-type="[[data.type]]" data-model="data">
						<div class="title">
							<span class="tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="fields">
							<div class="field">
								<textarea rows="5" data-model="data.code" is="ui-input"></textarea>
							</div>
						</div>
					</action-view>
				</template>
			</actions-view>
			<footer>
				<div class="window">
<!--					<div class="title">-->
<!--						<span class="tab">Add an action</span>-->
<!--					</div>-->
					<div class="fields">
						<div class="field">
							<div class="select">
								<select is="ui-select" data-valuePath="type" data-provider="actions.types" data-model="actions.types.selectedItem">
									<template data-type="*">
										<option is="ui-text" value="[[data.type]]" data-model="data.name"></option>
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

// tsunami.define("start-button", StartButton);
tsunami.define("action-view", ActionView);
