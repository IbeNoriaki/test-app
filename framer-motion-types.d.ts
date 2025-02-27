/// <reference types="react" />
import { F as FeatureBundle, M as MotionProps, a as MotionConfigContext, H as HTMLMotionProps, b as HTMLElements, G as GenericKeyframesTarget, c as MotionValue, O as OnScrollInfo, S as ScrollInfoOptions, B as Batcher, P as Process, d as FrameData, e as Steps, f as Point, D as DOMMotionComponents, g as MotionComponentProps, h as HTMLMotionComponents, i as SVGMotionComponents, j as FeaturePackages, V as VisualElement, k as Box, A as Axis, E as EventInfo, l as MotionValueEventCallbacks, C as CustomValueType, m as ValueAnimationOptionsWithRenderContext, R as ResolvedKeyframes, K as KeyframeResolver, n as AnimationControls, o as AnimationDefinition, p as VisualElementAnimationOptions, I as IProjectionNode, q as ResolvedValues, r as HTMLRenderState } from '../types.d-6pKw1mTI.js';
export { a4 as AnimationLifecycles, Y as AnimationProps, av as AnimationType, aG as AxisDelta, aF as BoundingBox, a5 as CreateVisualElement, aH as Delta, s as DragControls, Q as DragElastic, U as DragHandlers, W as DraggableProps, aA as FeatureDefinition, aB as FeatureDefinitions, aC as FeaturePackage, a6 as FlatTree, v as FocusHandlers, a1 as ForwardRefComponent, w as HoverHandlers, ay as HydratedFeatureDefinition, az as HydratedFeatureDefinitions, a7 as Inertia, a8 as Keyframes, a9 as KeyframesTarget, X as LayoutProps, aD as LazyFeatureBundle, Z as MotionAdvancedProps, _ as MotionStyle, $ as MotionTransform, aa as None, ab as Orchestration, x as PanHandlers, t as PanInfo, as as PassiveEffect, L as PresenceContext, aE as RenderComponent, ac as Repeat, ap as ResolveKeyframes, ad as ResolvedKeyframesTarget, ae as ResolvedSingleTarget, af as ResolvedValueTarget, a2 as SVGAttributesAsMotionValues, a3 as SVGMotionProps, au as ScrapeMotionValuesFromProps, ag as SingleTarget, ah as Spring, at as Subscriber, N as SwitchLayoutGroupContext, T as TapHandlers, y as TapInfo, ai as Target, aj as TargetAndTransition, aI as TransformPoint, ak as Transition, al as Tween, am as ValueTarget, an as Variant, a0 as VariantLabels, ao as Variants, ax as VisualState, z as createRendererMotionComponent, aw as makeUseVisualState, ar as motionValue, J as optimizedAppearDataAttribute, aq as scroll, u as useDragControls } from '../types.d-6pKw1mTI.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import { useEffect, RefObject } from 'react';
import * as motion_dom from 'motion-dom';
import { UnresolvedValueKeyframe, Transition, ElementOrSelector, DOMKeyframesDefinition, AnimationOptions, AnimationPlaybackOptions, Easing, AnimationScope, AnimationPlaybackControls, ValueAnimationTransition, EasingFunction, EasingModifier, ValueAnimationOptions, KeyframeGenerator, DynamicOption, SpringOptions, RepeatType, AnimationState } from 'motion-dom';
export * from 'motion-dom';
export { BezierDefinition, Easing, EasingDefinition, EasingFunction, EasingModifier, hover, isDragActive, press } from 'motion-dom';
export { invariant, noop, progress } from 'motion-utils';

/**
 * @public
 */
interface AnimatePresenceProps {
    /**
     * By passing `initial={false}`, `AnimatePresence` will disable any initial animations on children
     * that are present when the component is first rendered.
     *
     * ```jsx
     * <AnimatePresence initial={false}>
     *   {isVisible && (
     *     <motion.div
     *       key="modal"
     *       initial={{ opacity: 0 }}
     *       animate={{ opacity: 1 }}
     *       exit={{ opacity: 0 }}
     *     />
     *   )}
     * </AnimatePresence>
     * ```
     *
     * @public
     */
    initial?: boolean;
    /**
     * When a component is removed, there's no longer a chance to update its props. So if a component's `exit`
     * prop is defined as a dynamic variant and you want to pass a new `custom` prop, you can do so via `AnimatePresence`.
     * This will ensure all leaving components animate using the latest data.
     *
     * @public
     */
    custom?: any;
    /**
     * Fires when all exiting nodes have completed animating out.
     *
     * @public
     */
    onExitComplete?: () => void;
    /**
     * Determines how to handle entering and exiting elements.
     *
     * - `"sync"`: Default. Elements animate in and out as soon as they're added/removed.
     * - `"popLayout"`: Exiting elements are "popped" from the page layout, allowing sibling
     *      elements to immediately occupy their new layouts.
     * - `"wait"`: Only renders one component at a time. Wait for the exiting component to animate out
     *      before animating the next component in.
     *
     * @public
     */
    mode?: "sync" | "popLayout" | "wait";
    /**
     * Internal. Used in Framer to flag that sibling children *shouldn't* re-render as a result of a
     * child being removed.
     */
    presenceAffectsLayout?: boolean;
    /**
     * If true, the `AnimatePresence` component will propagate parent exit animations
     * to its children.
     */
    propagate?: boolean;
    /**
     * Internal. Set whether to anchor the x position of the exiting element to the left or right
     * when using `mode="popLayout"`.
     */
    anchorX?: "left" | "right";
}

/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
declare const AnimatePresence: ({ children, custom, initial, onExitComplete, presenceAffectsLayout, mode, propagate, anchorX, }: React$1.PropsWithChildren<AnimatePresenceProps>) => react_jsx_runtime.JSX.Element | null;

type InheritOption = boolean | "id";
interface Props$2 {
    id?: string;
    inherit?: InheritOption;
}
declare const LayoutGroup: React$1.FunctionComponent<React$1.PropsWithChildren<Props$2>>;

type LazyFeatureBundle = () => Promise<FeatureBundle>;
/**
 * @public
 */
interface LazyProps {
    children?: React.ReactNode;
    /**
     * Can be used to provide a feature bundle synchronously or asynchronously.
     *
     * ```jsx
     * // features.js
     * import { domAnimation } from "framer-motion"
     * export default domAnimation
     *
     * // index.js
     * import { LazyMotion, m } from "framer-motion"
     *
     * const loadFeatures = import("./features.js")
     *   .then(res => res.default)
     *
     * function Component() {
     *   return (
     *     <LazyMotion features={loadFeatures}>
     *       <m.div animate={{ scale: 1.5 }} />
     *     </LazyMotion>
     *   )
     * }
     * ```
     *
     * @public
     */
    features: FeatureBundle | LazyFeatureBundle;
    /**
     * If `true`, will throw an error if a `motion` component renders within
     * a `LazyMotion` component.
     *
     * ```jsx
     * // This component will throw an error that explains using a motion component
     * // instead of the m component will break the benefits of code-splitting.
     * function Component() {
     *   return (
     *     <LazyMotion features={domAnimation} strict>
     *       <motion.div />
     *     </LazyMotion>
     *   )
     * }
     * ```
     *
     * @public
     */
    strict?: boolean;
}

/**
 * Used in conjunction with the `m` component to reduce bundle size.
 *
 * `m` is a version of the `motion` component that only loads functionality
 * critical for the initial render.
 *
 * `LazyMotion` can then be used to either synchronously or asynchronously
 * load animation and gesture support.
 *
 * ```jsx
 * // Synchronous loading
 * import { LazyMotion, m, domAnimation } from "framer-motion"
 *
 * function App() {
 *   return (
 *     <LazyMotion features={domAnimation}>
 *       <m.div animate={{ scale: 2 }} />
 *     </LazyMotion>
 *   )
 * }
 *
 * // Asynchronous loading
 * import { LazyMotion, m } from "framer-motion"
 *
 * function App() {
 *   return (
 *     <LazyMotion features={() => import('./path/to/domAnimation')}>
 *       <m.div animate={{ scale: 2 }} />
 *     </LazyMotion>
 *   )
 * }
 * ```
 *
 * @public
 */
declare function LazyMotion({ children, features, strict }: LazyProps): react_jsx_runtime.JSX.Element;

type IsValidProp = (key: string) => boolean;
declare function filterProps(props: MotionProps, isDom: boolean, forwardMotionProps: boolean): MotionProps;

interface MotionConfigProps extends Partial<MotionConfigContext> {
    children?: React$1.ReactNode;
    isValidProp?: IsValidProp;
}
/**
 * `MotionConfig` is used to set configuration options for all children `motion` components.
 *
 * ```jsx
 * import { motion, MotionConfig } from "framer-motion"
 *
 * export function App() {
 *   return (
 *     <MotionConfig transition={{ type: "spring" }}>
 *       <motion.div animate={{ x: 100 }} />
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @public
 */
declare function MotionConfig({ children, isValidProp, ...config }: MotionConfigProps): react_jsx_runtime.JSX.Element;

interface Props$1<V> {
    /**
     * A HTML element to render this component as. Defaults to `"ul"`.
     *
     * @public
     */
    as?: keyof HTMLElements;
    /**
     * The axis to reorder along. By default, items will be draggable on this axis.
     * To make draggable on both axes, set `<Reorder.Item drag />`
     *
     * @public
     */
    axis?: "x" | "y";
    /**
     * A callback to fire with the new value order. For instance, if the values
     * are provided as a state from `useState`, this could be the set state function.
     *
     * @public
     */
    onReorder: (newOrder: V[]) => void;
    /**
     * The latest values state.
     *
     * ```jsx
     * function Component() {
     *   const [items, setItems] = useState([0, 1, 2])
     *
     *   return (
     *     <Reorder.Group values={items} onReorder={setItems}>
     *         {items.map((item) => <Reorder.Item key={item} value={item} />)}
     *     </Reorder.Group>
     *   )
     * }
     * ```
     *
     * @public
     */
    values: V[];
}
type ReorderGroupProps<V> = Props$1<V> & Omit<HTMLMotionProps<any>, "values"> & React$1.PropsWithChildren<{}>;
declare function ReorderGroupComponent<V>({ children, as, axis, onReorder, values, ...props }: ReorderGroupProps<V>, externalRef?: React$1.ForwardedRef<any>): react_jsx_runtime.JSX.Element;
declare const ReorderGroup: <V>(props: ReorderGroupProps<V> & {
    ref?: React$1.ForwardedRef<any>;
}) => ReturnType<typeof ReorderGroupComponent>;

interface Props<V> {
    /**
     * A HTML element to render this component as. Defaults to `"li"`.
     *
     * @public
     */
    as?: keyof HTMLElements;
    /**
     * The value in the list that this component represents.
     *
     * @public
     */
    value: V;
    /**
     * A subset of layout options primarily used to disable layout="size"
     *
     * @public
     * @default true
     */
    layout?: true | "position";
}
type ReorderItemProps<V> = Props<V> & HTMLMotionProps<any> & React$1.PropsWithChildren<{}>;
declare function ReorderItemComponent<V>({ children, style, value, as, onDrag, layout, ...props }: ReorderItemProps<V>, externalRef?: React$1.ForwardedRef<any>): react_jsx_runtime.JSX.Element;
declare const ReorderItem: <V>(props: ReorderItemProps<V> & {
    ref?: React$1.ForwardedRef<any>;
}) => ReturnType<typeof ReorderItemComponent>;

declare namespace namespace_d {
  export { ReorderGroup as Group, ReorderItem as Item };
}

type ObjectTarget<O> = {
    [K in keyof O]?: O[K] | GenericKeyframesTarget<O[K]>;
};
type SequenceTime = number | "<" | `+${number}` | `-${number}` | `${string}`;
type SequenceLabel = string;
interface SequenceLabelWithTime {
    name: SequenceLabel;
    at: SequenceTime;
}
interface At {
    at?: SequenceTime;
}
type MotionValueSegment = [
    MotionValue,
    UnresolvedValueKeyframe | UnresolvedValueKeyframe[]
];
type MotionValueSegmentWithTransition = [
    MotionValue,
    UnresolvedValueKeyframe | UnresolvedValueKeyframe[],
    Transition & At
];
type DOMSegment = [ElementOrSelector, DOMKeyframesDefinition];
type DOMSegmentWithTransition = [
    ElementOrSelector,
    DOMKeyframesDefinition,
    AnimationOptions & At
];
type ObjectSegment<O extends {} = {}> = [O, ObjectTarget<O>];
type ObjectSegmentWithTransition<O extends {} = {}> = [
    O,
    ObjectTarget<O>,
    AnimationOptions & At
];
type Segment = ObjectSegment | ObjectSegmentWithTransition | SequenceLabel | SequenceLabelWithTime | MotionValueSegment | MotionValueSegmentWithTransition | DOMSegment | DOMSegmentWithTransition;
type AnimationSequence = Segment[];
interface SequenceOptions extends AnimationPlaybackOptions {
    delay?: number;
    duration?: number;
    defaultTransition?: Transition;
}
interface AbsoluteKeyframe {
    value: string | number | null;
    at: number;
    easing?: Easing;
}
type ValueSequence = AbsoluteKeyframe[];
interface SequenceMap {
    [key: string]: ValueSequence;
}
type ResolvedAnimationDefinition = {
    keyframes: {
        [key: string]: UnresolvedValueKeyframe[];
    };
    transition: {
        [key: string]: Transition;
    };
};
type ResolvedAnimationDefinitions = Map<Element | MotionValue, ResolvedAnimationDefinition>;

/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */
declare function createScopedAnimate(scope?: AnimationScope): {
    (sequence: AnimationSequence, options?: SequenceOptions): AnimationPlaybackControls;
    (value: string | MotionValue<string>, keyframes: string | GenericKeyframesTarget<string>, options?: ValueAnimationTransition<string>): AnimationPlaybackControls;
    (value: number | MotionValue<number>, keyframes: number | GenericKeyframesTarget<number>, options?: ValueAnimationTransition<number>): AnimationPlaybackControls;
    <V>(value: V | MotionValue<V>, keyframes: V | GenericKeyframesTarget<V>, options?: ValueAnimationTransition<V>): AnimationPlaybackControls;
    (element: ElementOrSelector, keyframes: DOMKeyframesDefinition, options?: AnimationOptions): AnimationPlaybackControls;
    <O extends {}>(object: O | O[], keyframes: ObjectTarget<O>, options?: AnimationOptions): AnimationPlaybackControls;
};
declare const animate: {
    (sequence: AnimationSequence, options?: SequenceOptions): AnimationPlaybackControls;
    (value: string | MotionValue<string>, keyframes: string | GenericKeyframesTarget<string>, options?: ValueAnimationTransition<string>): AnimationPlaybackControls;
    (value: number | MotionValue<number>, keyframes: number | GenericKeyframesTarget<number>, options?: ValueAnimationTransition<number>): AnimationPlaybackControls;
    <V>(value: V | MotionValue<V>, keyframes: V | GenericKeyframesTarget<V>, options?: ValueAnimationTransition<V>): AnimationPlaybackControls;
    (element: ElementOrSelector, keyframes: DOMKeyframesDefinition, options?: AnimationOptions): AnimationPlaybackControls;
    <O extends {}>(object: O | O[], keyframes: ObjectTarget<O>, options?: AnimationOptions): AnimationPlaybackControls;
};

declare const animateMini: (elementOrSelector: ElementOrSelector, keyframes: DOMKeyframesDefinition, options?: AnimationOptions) => AnimationPlaybackControls;

declare function scrollInfo(onScroll: OnScrollInfo, { container, ...options }?: ScrollInfoOptions): () => void;

type ViewChangeHandler = (entry: IntersectionObserverEntry) => void;
type MarginValue = `${number}${"px" | "%"}`;
type MarginType = MarginValue | `${MarginValue} ${MarginValue}` | `${MarginValue} ${MarginValue} ${MarginValue}` | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;
interface InViewOptions {
    root?: Element | Document;
    margin?: MarginType;
    amount?: "some" | "all" | number;
}
declare function inView(elementOrSelector: ElementOrSelector, onStart: (element: Element, entry: IntersectionObserverEntry) => void | ViewChangeHandler, { root, margin: rootMargin, amount }?: InViewOptions): VoidFunction;

declare const anticipate: (p: number) => number;

declare const backOut: (t: number) => number;
declare const backIn: motion_dom.EasingFunction;
declare const backInOut: motion_dom.EasingFunction;

declare const circIn: EasingFunction;
declare const circOut: EasingFunction;
declare const circInOut: EasingFunction;

declare function cubicBezier(mX1: number, mY1: number, mX2: number, mY2: number): (t: number) => number;

declare const easeIn: (t: number) => number;
declare const easeOut: (t: number) => number;
declare const easeInOut: (t: number) => number;

declare const mirrorEasing: EasingModifier;

declare const reverseEasing: EasingModifier;

type Direction = "start" | "end";
declare function steps(numSteps: number, direction?: Direction): EasingFunction;

declare function inertia({ keyframes, velocity, power, timeConstant, bounceDamping, bounceStiffness, modifyTarget, min, max, restDelta, restSpeed, }: ValueAnimationOptions<number>): KeyframeGenerator<number>;

declare function keyframes<T extends string | number>({ duration, keyframes: keyframeValues, times, ease, }: ValueAnimationOptions<T>): KeyframeGenerator<T>;

declare function spring(optionsOrVisualDuration?: ValueAnimationOptions<number> | number, bounce?: number): KeyframeGenerator<number>;

type StaggerOrigin = "first" | "last" | "center" | number;
type StaggerOptions = {
    startDelay?: number;
    from?: StaggerOrigin;
    ease?: Easing;
};
declare function stagger(duration?: number, { startDelay, from, ease }?: StaggerOptions): DynamicOption<number>;

declare const frame: Batcher;
declare const cancelFrame: (process: Process) => void;
declare const frameData: FrameData;
declare const frameSteps: Steps;

/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */
declare const time: {
    now: () => number;
    set: (newTime: number) => void;
};

declare const clamp: (min: number, max: number, v: number) => number;

type DelayedFunction = (overshoot: number) => void;
/**
 * Timeout defined in ms
 */
declare function delay(callback: DelayedFunction, timeout: number): () => void;

declare const distance: (a: number, b: number) => number;
declare function distance2D(a: Point, b: Point): number;

type Mix<T> = (v: number) => T;
type MixerFactory<T> = (from: T, to: T) => Mix<T>;
interface InterpolateOptions<T> {
    clamp?: boolean;
    ease?: EasingFunction | EasingFunction[];
    mixer?: MixerFactory<T>;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
declare function interpolate<T>(input: number[], output: T[], { clamp: isClamp, ease, mixer }?: InterpolateOptions<T>): (v: number) => T;

type Mixer<T> = (p: number) => T;

declare function mix<T>(from: T, to: T): Mixer<T>;
declare function mix(from: number, to: number, p: number): number;

declare const pipe: (...transformers: Function[]) => Function;

/**
 * @public
 */
interface TransformOptions<T> {
    /**
     * Clamp values to within the given range. Defaults to `true`
     *
     * @public
     */
    clamp?: boolean;
    /**
     * Easing functions to use on the interpolations between each value in the input and output ranges.
     *
     * If provided as an array, the array must be one item shorter than the input and output ranges, as the easings apply to the transition **between** each.
     *
     * @public
     */
    ease?: EasingFunction | EasingFunction[];
    /**
     * Provide a function that can interpolate between any two values in the provided range.
     *
     * @public
     */
    mixer?: (from: T, to: T) => (v: number) => any;
}
/**
 * Transforms numbers into other values by mapping them from an input range to an output range.
 * Returns the type of the input provided.
 *
 * @remarks
 *
 * Given an input range of `[0, 200]` and an output range of
 * `[0, 1]`, this function will return a value between `0` and `1`.
 * The input range must be a linear series of numbers. The output range
 * can be any supported value type, such as numbers, colors, shadows, arrays, objects and more.
 * Every value in the output range must be of the same type and in the same format.
 *
 * ```jsx
 * import * as React from "react"
 * import { transform } from "framer-motion"
 *
 * export function MyComponent() {
 *    const inputRange = [0, 200]
 *    const outputRange = [0, 1]
 *    const output = transform(100, inputRange, outputRange)
 *
 *    // Returns 0.5
 *    return <div>{output}</div>
 * }
 * ```
 *
 * @param inputValue - A number to transform between the input and output ranges.
 * @param inputRange - A linear series of numbers (either all increasing or decreasing).
 * @param outputRange - A series of numbers, colors, strings, or arrays/objects of those. Must be the same length as `inputRange`.
 * @param options - Clamp: Clamp values to within the given range. Defaults to `true`.
 *
 * @public
 */
declare function transform<T>(inputValue: number, inputRange: number[], outputRange: T[], options?: TransformOptions<T>): T;
/**
 *
 * Transforms numbers into other values by mapping them from an input range to an output range.
 *
 * Given an input range of `[0, 200]` and an output range of
 * `[0, 1]`, this function will return a value between `0` and `1`.
 * The input range must be a linear series of numbers. The output range
 * can be any supported value type, such as numbers, colors, shadows, arrays, objects and more.
 * Every value in the output range must be of the same type and in the same format.
 *
 * ```jsx
 * import * as React from "react"
 * import { Frame, transform } from "framer"
 *
 * export function MyComponent() {
 *     const inputRange = [-200, -100, 100, 200]
 *     const outputRange = [0, 1, 1, 0]
 *     const convertRange = transform(inputRange, outputRange)
 *     const output = convertRange(-150)
 *
 *     // Returns 0.5
 *     return <div>{output}</div>
 * }
 *
 * ```
 *
 * @param inputRange - A linear series of numbers (either all increasing or decreasing).
 * @param outputRange - A series of numbers, colors or strings. Must be the same length as `inputRange`.
 * @param options - Clamp: clamp values to within the given range. Defaults to `true`.
 *
 * @public
 */
declare function transform<T>(inputRange: number[], outputRange: T[], options?: TransformOptions<T>): (inputValue: number) => T;

declare const wrap: (min: number, max: number, v: number) => number;

/**
 * @deprecated
 *
 * Import as `frame` instead.
 */
declare const sync: Batcher;
/**
 * @deprecated
 *
 * Use cancelFrame(callback) instead.
 */
declare const cancelSync: Record<string, (process: Process) => void>;

declare const m: (<Props, TagName extends string = "div">(Component: string | TagName | React$1.ComponentType<Props>, { forwardMotionProps }?: {
    forwardMotionProps: boolean;
}) => TagName extends "symbol" | "clipPath" | "filter" | "mask" | "marker" | "text" | "stop" | "animate" | "path" | "image" | "circle" | "switch" | "svg" | keyof HTMLElements | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "line" | "linearGradient" | "metadata" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "textPath" | "tspan" | "use" | "view" ? DOMMotionComponents[TagName] : React$1.ComponentType<Omit<MotionComponentProps<Props>, "children"> & {
    children?: ("children" extends keyof Props ? Props[keyof Props & "children"] | MotionComponentProps<Props>[keyof Props & "children"] : MotionComponentProps<Props>["children"]) | undefined;
}>) & HTMLMotionComponents & SVGMotionComponents & {
    create: <Props, TagName extends string = "div">(Component: string | TagName | React$1.ComponentType<Props>, { forwardMotionProps }?: {
        forwardMotionProps: boolean;
    }) => TagName extends "symbol" | "clipPath" | "filter" | "mask" | "marker" | "text" | "stop" | "animate" | "path" | "image" | "circle" | "switch" | "svg" | keyof HTMLElements | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "line" | "linearGradient" | "metadata" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "textPath" | "tspan" | "use" | "view" ? DOMMotionComponents[TagName] : React$1.ComponentType<Omit<MotionComponentProps<Props>, "children"> & {
        children?: ("children" extends keyof Props ? Props[keyof Props & "children"] | MotionComponentProps<Props>[keyof Props & "children"] : MotionComponentProps<Props>["children"]) | undefined;
    }>;
};

declare const motion: (<Props, TagName extends string = "div">(Component: string | TagName | React$1.ComponentType<Props>, { forwardMotionProps }?: {
    forwardMotionProps: boolean;
}) => TagName extends "symbol" | "clipPath" | "filter" | "mask" | "marker" | "text" | "stop" | "animate" | "path" | "image" | "circle" | "switch" | "svg" | keyof HTMLElements | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "line" | "linearGradient" | "metadata" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "textPath" | "tspan" | "use" | "view" ? DOMMotionComponents[TagName] : React$1.ComponentType<Omit<MotionComponentProps<Props>, "children"> & {
    children?: ("children" extends keyof Props ? Props[keyof Props & "children"] | MotionComponentProps<Props>[keyof Props & "children"] : MotionComponentProps<Props>["children"]) | undefined;
}>) & HTMLMotionComponents & SVGMotionComponents & {
    create: <Props, TagName extends string = "div">(Component: string | TagName | React$1.ComponentType<Props>, { forwardMotionProps }?: {
        forwardMotionProps: boolean;
    }) => TagName extends "symbol" | "clipPath" | "filter" | "mask" | "marker" | "text" | "stop" | "animate" | "path" | "image" | "circle" | "switch" | "svg" | keyof HTMLElements | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "line" | "linearGradient" | "metadata" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "textPath" | "tspan" | "use" | "view" ? DOMMotionComponents[TagName] : React$1.ComponentType<Omit<MotionComponentProps<Props>, "children"> & {
        children?: ("children" extends keyof Props ? Props[keyof Props & "children"] | MotionComponentProps<Props>[keyof Props & "children"] : MotionComponentProps<Props>["children"]) | undefined;
    }>;
};

declare const animations: FeaturePackages;

interface MotionContextProps<Instance = unknown> {
    visualElement?: VisualElement<Instance>;
    initial?: false | string | string[];
    animate?: string | string[];
}
declare const MotionContext: React$1.Context<MotionContextProps<unknown>>;

declare const createBox: () => Box;

declare function calcLength(axis: Axis): number;

type EventListenerWithPointInfo = (e: PointerEvent, info: EventInfo) => void;
declare const addPointerInfo: (handler: EventListenerWithPointInfo) => EventListener;

declare function addPointerEvent(target: EventTarget, eventName: string, handler: EventListenerWithPointInfo, options?: AddEventListenerOptions): () => void;

declare const isMotionValue: (value: any) => value is MotionValue<any>;

declare const isBrowser: boolean;

declare function useUnmountEffect(callback: () => void): void;

declare const useIsomorphicLayoutEffect: typeof useEffect;

declare function useForceUpdate(): [VoidFunction, number];

/**
 * @public
 */
declare const domAnimation: FeatureBundle;

/**
 * @public
 */
declare const domMax: FeatureBundle;

/**
 * @public
 */
declare const domMin: FeatureBundle;

declare function useMotionValueEvent<V, EventName extends keyof MotionValueEventCallbacks<V>>(value: MotionValue<V>, event: EventName, callback: MotionValueEventCallbacks<V>[EventName]): void;

/**
 * @deprecated useElementScroll is deprecated. Convert to useScroll({ container: ref })
 */
declare function useElementScroll(ref: RefObject<HTMLElement | null>): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
};

/**
 * @deprecated useViewportScroll is deprecated. Convert to useScroll()
 */
declare function useViewportScroll(): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
};

/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */
declare function useMotionTemplate(fragments: TemplateStringsArray, ...values: Array<MotionValue | number | string>): MotionValue<string>;

/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
declare function useMotionValue<T>(initial: T): MotionValue<T>;

interface UseScrollOptions extends Omit<ScrollInfoOptions, "container" | "target"> {
    container?: RefObject<HTMLElement | null>;
    target?: RefObject<HTMLElement | null>;
    layoutEffect?: boolean;
}
declare function useScroll({ container, target, layoutEffect, ...options }?: UseScrollOptions): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
};

/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
declare function useSpring(source: MotionValue<string>, config?: SpringOptions): MotionValue<string>;
declare function useSpring(source: string, config?: SpringOptions): MotionValue<string>;
declare function useSpring(source: MotionValue<number>, config?: SpringOptions): MotionValue<number>;
declare function useSpring(source: number, config?: SpringOptions): MotionValue<number>;

declare function useTime(): MotionValue<number>;

type InputRange = number[];
type SingleTransformer<I, O> = (input: I) => O;
type MultiTransformer<I, O> = (input: I[]) => O;
/**
 * Create a `MotionValue` that transforms the output of another `MotionValue` by mapping it from one range of values into another.
 *
 * @remarks
 *
 * Given an input range of `[-200, -100, 100, 200]` and an output range of
 * `[0, 1, 1, 0]`, the returned `MotionValue` will:
 *
 * - When provided a value between `-200` and `-100`, will return a value between `0` and  `1`.
 * - When provided a value between `-100` and `100`, will return `1`.
 * - When provided a value between `100` and `200`, will return a value between `1` and  `0`
 *
 *
 * The input range must be a linear series of numbers. The output range
 * can be any value type supported by Motion: numbers, colors, shadows, etc.
 *
 * Every value in the output range must be of the same type and in the same format.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const x = useMotionValue(0)
 *   const xRange = [-200, -100, 100, 200]
 *   const opacityRange = [0, 1, 1, 0]
 *   const opacity = useTransform(x, xRange, opacityRange)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: 200 }}
 *       style={{ opacity, x }}
 *     />
 *   )
 * }
 * ```
 *
 * @param inputValue - `MotionValue`
 * @param inputRange - A linear series of numbers (either all increasing or decreasing)
 * @param outputRange - A series of numbers, colors or strings. Must be the same length as `inputRange`.
 * @param options -
 *
 *  - clamp: boolean. Clamp values to within the given range. Defaults to `true`
 *  - ease: EasingFunction[]. Easing functions to use on the interpolations between each value in the input and output ranges. If provided as an array, the array must be one item shorter than the input and output ranges, as the easings apply to the transition between each.
 *
 * @returns `MotionValue`
 *
 * @public
 */
declare function useTransform<I, O>(value: MotionValue<number>, inputRange: InputRange, outputRange: O[], options?: TransformOptions<O>): MotionValue<O>;
/**
 * Create a `MotionValue` that transforms the output of another `MotionValue` through a function.
 * In this example, `y` will always be double `x`.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const x = useMotionValue(10)
 *   const y = useTransform(x, value => value * 2)
 *
 *   return <motion.div style={{ x, y }} />
 * }
 * ```
 *
 * @param input - A `MotionValue` that will pass its latest value through `transform` to update the returned `MotionValue`.
 * @param transform - A function that accepts the latest value from `input` and returns a new value.
 * @returns `MotionValue`
 *
 * @public
 */
declare function useTransform<I, O>(input: MotionValue<I>, transformer: SingleTransformer<I, O>): MotionValue<O>;
/**
 * Pass an array of `MotionValue`s and a function to combine them. In this example, `z` will be the `x` multiplied by `y`.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const x = useMotionValue(0)
 *   const y = useMotionValue(0)
 *   const z = useTransform([x, y], ([latestX, latestY]) => latestX * latestY)
 *
 *   return <motion.div style={{ x, y, z }} />
 * }
 * ```
 *
 * @param input - An array of `MotionValue`s that will pass their latest values through `transform` to update the returned `MotionValue`.
 * @param transform - A function that accepts the latest values from `input` and returns a new value.
 * @returns `MotionValue`
 *
 * @public
 */
declare function useTransform<I, O>(input: MotionValue<string>[] | MotionValue<number>[] | MotionValue<string | number>[], transformer: MultiTransformer<I, O>): MotionValue<O>;
declare function useTransform<I, O>(transformer: () => O): MotionValue<O>;

/**
 * Creates a `MotionValue` that updates when the velocity of the provided `MotionValue` changes.
 *
 * ```javascript
 * const x = useMotionValue(0)
 * const xVelocity = useVelocity(x)
 * const xAcceleration = useVelocity(xVelocity)
 * ```
 *
 * @public
 */
declare function useVelocity(value: MotionValue<number>): MotionValue<number>;

interface WillChange extends MotionValue {
    add(name: string): void;
}

declare function useWillChange(): WillChange;

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
declare function resolveMotionValue(value?: string | number | CustomValueType | MotionValue): string | number;

/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
declare function useReducedMotion(): boolean | null;

declare function useReducedMotionConfig(): boolean | null;

interface ValueAnimationOptionsWithDefaults<T extends string | number> extends ValueAnimationOptionsWithRenderContext<T> {
    autoplay: boolean;
    delay: number;
    repeat: number;
    repeatDelay: number;
    repeatType: RepeatType;
}
declare abstract class BaseAnimation<T extends string | number, Resolved> implements AnimationPlaybackControls {
    protected options: ValueAnimationOptionsWithDefaults<T>;
    protected resolveFinishedPromise: VoidFunction;
    protected currentFinishedPromise: Promise<void>;
    protected isStopped: boolean;
    protected _resolved: Resolved & {
        keyframes: ResolvedKeyframes<T>;
    };
    protected hasAttemptedResolve: boolean;
    protected resolver: KeyframeResolver<T>;
    private createdAt;
    private resolvedAt;
    constructor({ autoplay, delay, type, repeat, repeatDelay, repeatType, ...options }: ValueAnimationOptions<T>);
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */
    calcStartTime(): number;
    protected abstract initPlayback(keyframes: ResolvedKeyframes<T>, finalKeyframe?: T): Resolved | false;
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
    abstract cancel(): void;
    abstract complete(): void;
    abstract get speed(): number;
    abstract set speed(newSpeed: number);
    abstract get time(): number;
    abstract set time(newTime: number);
    abstract get duration(): number;
    abstract get state(): AnimationPlayState;
    abstract get startTime(): number | null;
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */
    get resolved(): (Resolved & {
        keyframes: ResolvedKeyframes<T>;
        finalKeyframe?: T;
    }) | undefined;
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    protected onKeyframesResolved(keyframes: ResolvedKeyframes<T>, finalKeyframe?: T): void;
    onPostResolved(): void;
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve: VoidFunction, reject?: VoidFunction): Promise<void>;
    flatten(): void;
    protected updateFinishedPromise(): void;
}

interface AcceleratedValueAnimationOptions<T extends string | number = number> extends ValueAnimationOptions<T> {
    name: string;
    motionValue: MotionValue<T>;
}
interface ResolvedAcceleratedAnimation {
    animation: Animation;
    duration: number;
    times: ValueAnimationOptions["times"];
    type: ValueAnimationOptions["type"];
    ease: ValueAnimationOptions["ease"];
    keyframes: string[] | number[];
}
declare class AcceleratedAnimation<T extends string | number> extends BaseAnimation<T, ResolvedAcceleratedAnimation> {
    protected options: ValueAnimationOptionsWithDefaults<T> & {
        name: string;
        motionValue: MotionValue<T>;
    };
    constructor(options: ValueAnimationOptionsWithRenderContext<T>);
    /**
     * An AnimationTimline to attach to the WAAPI animation once it's created.
     */
    private pendingTimeline;
    protected initPlayback(keyframes: ResolvedKeyframes<T>, finalKeyframe: T): false | {
        animation: Animation;
        duration: number;
        times: number[] | undefined;
        type: motion_dom.AnimationGeneratorType | undefined;
        ease: motion_dom.Easing | motion_dom.Easing[] | undefined;
        keyframes: number[] | string[];
    };
    get duration(): number;
    get time(): number;
    set time(newTime: number);
    get speed(): number;
    set speed(newSpeed: number);
    get state(): AnimationPlayState;
    get startTime(): number | null;
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
    attachTimeline(timeline: any): (any: void) => void;
    play(): void;
    pause(): void;
    stop(): void;
    complete(): void;
    cancel(): void;
    static supports(options: ValueAnimationOptionsWithRenderContext): options is AcceleratedValueAnimationOptions;
}

interface ResolvedData<T extends string | number> {
    generator: KeyframeGenerator<T>;
    mirroredGenerator: KeyframeGenerator<T> | undefined;
    mapPercentToKeyframes: ((v: number) => T) | undefined;
    /**
     * Duration of the animation as calculated by the generator.
     */
    calculatedDuration: number;
    /**
     * Duration of the animation plus repeatDelay.
     */
    resolvedDuration: number;
    /**
     * Total duration of the animation including repeats.
     */
    totalDuration: number;
}
/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */
declare class MainThreadAnimation<T extends string | number> extends BaseAnimation<T, ResolvedData<T>> {
    /**
     * The driver that's controlling the animation loop. Normally this is a requestAnimationFrame loop
     * but in tests we can pass in a synchronous loop.
     */
    private driver?;
    /**
     * The time at which the animation was paused.
     */
    private holdTime;
    /**
     * The time at which the animation was cancelled.
     */
    private cancelTime;
    /**
     * The current time of the animation.
     */
    private currentTime;
    /**
     * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
     */
    private playbackSpeed;
    /**
     * The state of the animation to apply when the animation is resolved. This
     * allows calls to the public API to control the animation before it is resolved,
     * without us having to resolve it first.
     */
    private pendingPlayState;
    /**
     * The time at which the animation was started.
     */
    startTime: number | null;
    constructor(options: ValueAnimationOptions<T>);
    flatten(): void;
    protected initPlayback(keyframes: ResolvedKeyframes<T>): {
        generator: KeyframeGenerator<any>;
        mirroredGenerator: KeyframeGenerator<T> | undefined;
        mapPercentToKeyframes: ((v: number) => T) | undefined;
        calculatedDuration: number;
        resolvedDuration: number;
        totalDuration: number;
    };
    onPostResolved(): void;
    tick(timestamp: number, sample?: boolean): {
        done: boolean;
        value: T;
    };
    state: AnimationPlayState;
    get duration(): number;
    get time(): number;
    set time(newTime: number);
    get speed(): number;
    set speed(newSpeed: number);
    play(): void;
    pause(): void;
    /**
     * This method is bound to the instance to fix a pattern where
     * animation.stop is returned as a reference from a useEffect.
     */
    stop: () => void;
    complete(): void;
    finish(): void;
    cancel(): void;
    private teardown;
    private stopDriver;
    sample(time: number): AnimationState<T>;
}
declare function animateValue(options: ValueAnimationOptionsWithRenderContext<any>): MainThreadAnimation<any>;

/**
 * @public
 */
declare function animationControls(): AnimationControls;

declare function useAnimate<T extends Element = any>(): [AnimationScope<T>, {
    (sequence: AnimationSequence, options?: SequenceOptions | undefined): motion_dom.AnimationPlaybackControls;
    (value: string | MotionValue<string>, keyframes: string | GenericKeyframesTarget<string>, options?: motion_dom.ValueAnimationTransition<string> | undefined): motion_dom.AnimationPlaybackControls;
    (value: number | MotionValue<number>, keyframes: number | GenericKeyframesTarget<number>, options?: motion_dom.ValueAnimationTransition<number> | undefined): motion_dom.AnimationPlaybackControls;
    <V>(value: V | MotionValue<V>, keyframes: V | GenericKeyframesTarget<V>, options?: motion_dom.ValueAnimationTransition<V> | undefined): motion_dom.AnimationPlaybackControls;
    (element: motion_dom.ElementOrSelector, keyframes: motion_dom.DOMKeyframesDefinition, options?: motion_dom.AnimationOptions | undefined): motion_dom.AnimationPlaybackControls;
    <O extends {}>(object: O | O[], keyframes: ObjectTarget<O>, options?: motion_dom.AnimationOptions | undefined): motion_dom.AnimationPlaybackControls;
}];

declare function useAnimateMini<T extends Element = any>(): [AnimationScope<T>, (elementOrSelector: motion_dom.ElementOrSelector, keyframes: motion_dom.DOMKeyframesDefinition, options?: motion_dom.AnimationOptions | undefined) => motion_dom.AnimationPlaybackControls];

/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
declare function useAnimationControls(): AnimationControls;
declare const useAnimation: typeof useAnimationControls;

declare function animateVisualElement(visualElement: VisualElement, definition: AnimationDefinition, options?: VisualElementAnimationOptions): Promise<void>;

type SafeToRemove = () => void;
type AlwaysPresent = [true, null];
type Present = [true];
type NotPresent = [false, SafeToRemove];
/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
declare function usePresence(subscribe?: boolean): AlwaysPresent | Present | NotPresent;
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
declare function useIsPresent(): boolean;

declare function usePresenceData(): any;

/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
declare function useDomEvent(ref: RefObject<EventTarget | null>, eventName: string, handler?: EventListener | undefined, options?: AddEventListenerOptions): void;

/**
 * Checks if a component is a `motion` component.
 */
declare function isMotionComponent(component: React.ComponentType | string): boolean;

/**
 * Unwraps a `motion` component and returns either a string for `motion.div` or
 * the React component for `motion(Component)`.
 *
 * If the component is not a `motion` component it returns undefined.
 */
declare function unwrapMotionComponent(component: React.ComponentType | string): React.ComponentType | string | undefined;

/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
declare function isValidMotionProp(key: string): boolean;

type ScaleCorrector = (latest: string | number, node: IProjectionNode) => string | number;
interface ScaleCorrectorDefinition {
    correct: ScaleCorrector;
    applyTo?: string[];
    isCSSVariable?: boolean;
}
interface ScaleCorrectorMap {
    [key: string]: ScaleCorrectorDefinition;
}

declare function addScaleCorrector(correctors: ScaleCorrectorMap): void;

declare function useInstantLayoutTransition(): (cb?: (() => void) | undefined) => void;

declare function useResetProjection(): () => void;

/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
declare function buildTransform(latestValues: ResolvedValues, transform: HTMLRenderState["transform"], transformTemplate?: MotionProps["transformTemplate"]): string;

declare const visualElementStore: WeakMap<any, VisualElement<unknown, unknown, {}>>;

declare const MotionGlobalConfig: {
    skipAnimations: boolean;
    useManualTiming: boolean;
};

type FrameCallback = (timestamp: number, delta: number) => void;
declare function useAnimationFrame(callback: FrameCallback): void;

type Cycle = (i?: number) => void;
type CycleState<T> = [T, Cycle];
/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */
declare function useCycle<T>(...items: T[]): CycleState<T>;

interface UseInViewOptions extends Omit<InViewOptions, "root" | "amount"> {
    root?: RefObject<Element | null>;
    once?: boolean;
    amount?: "some" | "all" | number;
    initial?: boolean;
}
declare function useInView(ref: RefObject<Element | null>, { root, margin, amount, once, initial, }?: UseInViewOptions): boolean;

declare function useInstantTransition(): (callback: () => void) => void;
declare function disableInstantTransitions(): void;

type Transformer = (v: any) => any;
type ValueType = {
    test: (v: any) => boolean;
    parse: (v: any) => any;
    transform?: Transformer;
    createTransformer?: (template: string) => Transformer;
    default?: any;
    getAnimatableNone?: (v: any) => any;
};
type RGBA = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
type HSLA = {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
};
type Color = HSLA | RGBA;

declare const color: {
    test: (v: any) => boolean;
    parse: (v: any) => RGBA | HSLA;
    transform: (v: HSLA | RGBA | string) => string;
};

type CSSVariableName = `--${string}`;
type CSSVariableToken = `var(${CSSVariableName})`;

declare function test(v: any): boolean;
type ComplexValues = Array<CSSVariableToken | string | number | Color>;
declare function parseComplexValue(v: string | number): ComplexValues;
declare function createTransformer(source: string | number): (v: Array<CSSVariableToken | Color | number | string>) => string;
declare function getAnimatableNone(v: string | number): string;
declare const complex: {
    test: typeof test;
    parse: typeof parseComplexValue;
    createTransformer: typeof createTransformer;
    getAnimatableNone: typeof getAnimatableNone;
};

declare const px: {
    test: (v: string | number) => boolean;
    parse: typeof parseFloat;
    transform: (v: number | string) => string;
};

declare function findSpring({ duration, bounce, velocity, mass, }: SpringOptions): {
    stiffness: number;
    damping: number;
    duration: number;
};

interface NativeAnimationOptions {
    delay?: number;
    duration?: number;
    ease?: EasingFunction | Easing | Easing[];
    times?: number[];
    repeat?: number;
    repeatType?: "loop" | "reverse" | "mirror";
}

declare function startOptimizedAppearAnimation(element: HTMLElement, name: string, keyframes: string[] | number[], options: NativeAnimationOptions, onReady?: (animation: Animation) => void): void;

interface NodeGroup {
    add: (node: IProjectionNode) => void;
    remove: (node: IProjectionNode) => void;
    dirty: VoidFunction;
}

interface LayoutGroupContextProps {
    id?: string;
    group?: NodeGroup;
    forceRender?: VoidFunction;
}
declare const LayoutGroupContext: React$1.Context<LayoutGroupContextProps>;

/**
 * @public
 */
interface ScrollMotionValues {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
}

/**
 * This is not an officially supported API and may be removed
 * on any version.
 */
declare function useAnimatedState(initialState: any): any[];

declare const AnimateSharedLayout: React$1.FunctionComponent<React$1.PropsWithChildren<unknown>>;

/**
 * Note: Still used by components generated by old versions of Framer
 *
 * @deprecated
 */
declare const DeprecatedLayoutGroupContext: React$1.Context<string | null>;

interface ScaleMotionValues {
    scaleX: MotionValue<number>;
    scaleY: MotionValue<number>;
}
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @deprecated
 */
declare function useInvertedScale(scale?: Partial<ScaleMotionValues>): ScaleMotionValues;

export { type AbsoluteKeyframe, AcceleratedAnimation, AnimatePresence, type AnimatePresenceProps, AnimateSharedLayout, AnimationControls, AnimationDefinition, type AnimationSequence, type At, Axis, Box, CustomValueType, type Cycle, type CycleState, DOMMotionComponents, type DOMSegment, type DOMSegmentWithTransition, type DelayedFunction, DeprecatedLayoutGroupContext, type Direction, EventInfo, FeatureBundle, FeaturePackages, HTMLMotionProps, IProjectionNode, type InterpolateOptions, LayoutGroup, LayoutGroupContext, LazyMotion, type LazyProps, type MixerFactory, MotionConfig, MotionConfigContext, type MotionConfigProps, MotionContext, MotionGlobalConfig, MotionProps, MotionValue, type MotionValueSegment, type MotionValueSegmentWithTransition, type ObjectSegment, type ObjectSegmentWithTransition, type ObjectTarget, Point, namespace_d as Reorder, type ResolvedAnimationDefinition, type ResolvedAnimationDefinitions, ResolvedValues, type ScrollMotionValues, type Segment, type SequenceLabel, type SequenceLabelWithTime, type SequenceMap, type SequenceOptions, type SequenceTime, type UseInViewOptions, type UseScrollOptions, ValueAnimationOptionsWithRenderContext, type ValueSequence, type ValueType, VisualElement, addPointerEvent, addPointerInfo, addScaleCorrector, animate, animateMini, animateValue, animateVisualElement, animationControls, animations, anticipate, backIn, backInOut, backOut, buildTransform, calcLength, cancelFrame, cancelSync, circIn, circInOut, circOut, clamp, color, complex, createBox, createScopedAnimate, cubicBezier, delay, disableInstantTransitions, distance, distance2D, domAnimation, domMax, domMin, easeIn, easeInOut, easeOut, filterProps, findSpring, frame, frameData, frameSteps, inView, inertia, interpolate, isBrowser, isMotionComponent, isMotionValue, isValidMotionProp, keyframes, m, mirrorEasing, mix, motion, pipe, px, resolveMotionValue, reverseEasing, scrollInfo, spring, stagger, startOptimizedAppearAnimation, steps, sync, time, transform, unwrapMotionComponent, useAnimate, useAnimateMini, useAnimation, useAnimationControls, useAnimationFrame, useCycle, useAnimatedState as useDeprecatedAnimatedState, useInvertedScale as useDeprecatedInvertedScale, useDomEvent, useElementScroll, useForceUpdate, useInView, useInstantLayoutTransition, useInstantTransition, useIsPresent, useIsomorphicLayoutEffect, useMotionTemplate, useMotionValue, useMotionValueEvent, usePresence, usePresenceData, useReducedMotion, useReducedMotionConfig, useResetProjection, useScroll, useSpring, useTime, useTransform, useUnmountEffect, useVelocity, useViewportScroll, useWillChange, visualElementStore, wrap };
