import * as i0 from '@angular/core';
import { OnInit, OnDestroy, TemplateRef, ViewContainerRef, EmbeddedViewRef, AfterViewInit, OnChanges, EventEmitter, DoCheck } from '@angular/core';
import * as i1 from '@angular/common';

declare class TreeMobxAutorunDirective implements OnInit, OnDestroy {
    protected templateRef: TemplateRef<any>;
    protected viewContainer: ViewContainerRef;
    protected templateBindings: {};
    protected dispose: any;
    protected view: EmbeddedViewRef<any>;
    treeMobxAutorun: any;
    ngOnInit(): void;
    shouldDetach(): any;
    autoDetect(view: EmbeddedViewRef<any>): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeMobxAutorunDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TreeMobxAutorunDirective, "[treeMobxAutorun]", never, { "treeMobxAutorun": { "alias": "treeMobxAutorun"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeVirtualScroll {
    private treeModel;
    private _dispose;
    yBlocks: number;
    x: number;
    viewportHeight: any;
    viewport: any;
    get y(): number;
    get totalHeight(): number;
    constructor();
    fireEvent(event: any): void;
    init(): void;
    isEnabled(): boolean;
    private _setYBlocks;
    recalcPositions(): void;
    private _getPositionAfter;
    private _getPositionAfterNode;
    clear(): void;
    setViewport(viewport: any): void;
    scrollIntoView(node: any, force: any, scrollToMiddle?: boolean): void;
    getViewportNodes(nodes: any): any;
    fixScroll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeVirtualScroll, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TreeVirtualScroll>;
}

/**
 * Welcome to ng2tree
 */
type IDType = string | number;
type IDTypeDictionary = {
    [id: string]: boolean;
    [id: number]: boolean;
};
/**
 * See ITreeNode for documentation
 */
declare type TreeNode$1 = any;
interface IAllowDropFn {
    (element: any, to: {
        parent: TreeNode$1;
        index: number;
    }, $event?: any): boolean;
}
interface INodeHeightFn {
    (node: TreeNode$1): number;
}
interface IAllowDragFn {
    (node: TreeNode$1): boolean;
}
interface ITreeState {
    expandedNodeIds?: IDTypeDictionary;
    selectedNodeIds?: IDTypeDictionary;
    activeNodeIds?: IDTypeDictionary;
    hiddenNodeIds?: IDTypeDictionary;
    selectedLeafNodeIds?: IDTypeDictionary;
    focusedNodeId?: IDType;
}
interface ITreeOptions {
    /**
     * A string representing the attribute of the node that indicates whether there are child nodes.
 
     * **Default value: `hasChildren`.**
 
     For example, if your nodes have an `isDirectory` attribute that indicates whether there are children, use:
     ```
       options = { hasChildrenField: 'isDirectory' }
     ```
     */
    hasChildrenField?: string;
    /**
     * A string representing the attribute of the node that contains the array of children.
 
     * **Default value: `children`.**
 
     For example, if your nodes have a `nodes` attribute, that contains the children, use:
     ```
       options = { childrenField: 'nodes' }
     ```
     */
    childrenField?: string;
    /**
     * A string representing the attribute of the node to display.
 
     * **Default value: `name`**
 
       For example, if your nodes have a `title` attribute that should be displayed, use:
       ```
         options = { displayField: 'title' }
       ```
     */
    displayField?: string;
    /**
     * A string representing the attribute of the node that contains the unique ID.
       This will be used to construct the `path`, which is an array of IDs that point to the node.
 
       * **Default value: `id`.**
 
       For example, if your nodes have a `uuid` attribute, that contains the unique key, use:
       ```
         options = { idField: 'uuid' }
       ```
     */
    idField?: string;
    /**
     * A string representing the attribute of the node that contains whether the node starts as expanded.
 
       * **Default value: `isExpanded`.**
 
       For example, if your nodes have an `expanded` attribute, that contains a boolean value, use:
       ```
         options = { isExpandedField: 'expanded' }
       ```
     */
    isExpandedField?: string;
    /**
     * Function for loading a node's children.
       The function receives a TreeNode, and returns a value or a promise that resolves to the node's children.
 
       This function will be called whenever a node is expanded, the `hasChildren` (`options.hasChildrenField`)
       field is true, and the `children` field is empty.
       The result will be loaded into the node's children attribute.
 
       Example:
       ```
       * options = {
       *   getChildren: (node:TreeNode) => {
       *     return request('/api/children/' + node.id);
       *   }
       * }
       ```
     */
    getChildren?: (node: TreeNode$1) => any;
    /**
     * Rewire which trigger causes which action using this attribute, or create custom actions / event bindings.
     * See the [Action Mapping Section](https://angular2-tree.readme.io/docs/action-mapping) for more details.
     */
    actionMapping?: any;
    /**
     * Specify if dragging tree nodes is allowed.
     * This could be a boolean, or a function that receives a TreeNode and returns a boolean
 
     * **Default value: false**
 
     Example:
     ```
     * options = {
     *  allowDrag: true
     * }
     ```
     */
    allowDrag?: boolean | IAllowDragFn;
    /**
     * Specify whether dropping inside the tree is allowed. Optional types:
     *  - boolean
     *  - (element:any, to:{parent:TreeNode, index:number}):boolean
          A function that receives the dragged element, and the drop location (parent node and index inside the parent),
          and returns true or false.
 
     * **Default Value: true**
 
     example:
     ```
     * options = {
     *  allowDrop: (element, {parent, index}) => parent.isLeaf
     * }
     ```
    */
    allowDrop?: boolean | IAllowDropFn;
    /**
    Boolean flag to allow adding and removing is-dragging-over and is-dragging-over-disabled classes.

    If set to false it will not add the above mentioned classes and you should handle the styling yourself with css and in
    the actionMapping -> mouse -> dragEnter, dragLeave

    * **Default Value: true**

    example:
    ```
    * options = {
    *   allowDrop: true,
    *   allowDragoverStyling: false
    * }
    ```
    */
    allowDragoverStyling?: boolean;
    /**
    * Specify padding per node (integer).
     Each node will have padding-left value of level * levelPadding, instead of using the default padding for children.
 
     This option is good for example for allowing whole row selection, etc.
 
     You can alternatively use the tree-node-level-X classes to give padding on a per-level basis.
 
     * **Default value: 0**
    */
    levelPadding?: number;
    /**
     * Specify a function that returns a class per node. Useful for styling the nodes individually.
 
       Example:
       ```
       * options = {
       *   nodeClass: (node:TreeNode) => {
       *     return 'icon-' + node.data.icon;
       *   }
       * }
       ```
     */
    nodeClass?: (node: TreeNode$1) => string;
    /**
     Boolean flag to use the virtual scroll option.
 
     To use this option, you must supply the height of the container, and the height of each node in the tree.
 
     You can also specify height for the dropSlot which is located between nodes.
 
     * **Default Value: false**
 
     example:
     ```
     * options = {
     *   useVirtualScroll: true,
     *   nodeHeight: (node: TreeNode) => node.myHeight,
     *   dropSlotHeight: 3
     * }
     ```
     */
    useVirtualScroll?: boolean;
    /**
     * For use with `useVirtualScroll` option.
     * Specify a height for nodes in pixels. Could be either:
     * - number
     * - (node: TreeNode) => number
 
     * **Default Value: 22**
     */
    nodeHeight?: number | INodeHeightFn;
    /**
     * For use with `useVirtualScroll` option.
     * Specify a height for drop slots (located between nodes) in pixels
 
     * **Default Value: 2**
     */
    dropSlotHeight?: number;
    /**
     * Boolean whether or not to animate expand / collapse of nodes.
 
     * **Default Value: false**
     */
    animateExpand?: boolean;
    /**
     * Speed of expand animation (described in pixels per 17 ms).
 
     * **Default Value: 30**
     */
    animateSpeed?: number;
    /**
     * Increase of expand animation speed (described in multiply per 17 ms).
 
     * **Default Value: 1.2**
     */
    animateAcceleration?: number;
    /**
     * Whether to scroll to the node to make it visible when it is activated.
 
     * **Default Value: true**
     */
    scrollOnActivate?: boolean;
    /**
     * Function to clone a node.
     * Receives a TreeNode object, and returns a node object (only the data).
     * This callback will be called when copying a node inside the tree,
     * by either calling copyNode, or by dragging and holding the ctrl key
     *
     * For example:
       ```
         options: ITreeOptions = {
           getNodeClone: (node) => ({
             ...node.data,
             id: uuid.v4(),
             name: `copy of ${node.data.name}`
           })
         };
       ```
     *
     * **Default Value: clone the node using Object.assign, and remove 'id' property**
     */
    getNodeClone?: (node: TreeNode$1) => any;
    /**
     * Makes the tree right-to-left.
     * This include direction, expander style, and change key binding (right key collapse and left key expands instead of vice-versa)
     */
    rtl?: boolean;
    /**
     * Specifies id of root node (virtualRoot)
     */
    rootId?: any;
    /**
     * Whether to display a checkbox next to the node or not
     */
    useCheckbox?: boolean;
    /**
     * Whether to use master checkboxes mechanism if the useCheckbox is set to true
     */
    useTriState?: boolean;
    /**
     * The HTML element that is the scroll container for the tree.
     * The default behaviour is to wrap the tree with a container that has overflow: hidden,
     * and then the scrolling container is the viewport inside the tree component
     */
    scrollContainer?: HTMLElement;
}
interface ITreeNode {
    /**
     * Parent node
     */
    parent: ITreeNode;
    /**
     * The value of the node's field that is used for displaying its content.
     * By default 'name', unless stated otherwise in the options
     */
    displayField: string;
    /**
     * The children of the node.
     * By default is determined by 'node.data.children', unless stated otherwise in the options
     */
    children: ITreeNode[];
    /**
     * Pointer to the original data.
     */
    data: any;
    /**
     * Pointer to the ElementRef of the TreeNodeComponent that's displaying this node
     */
    elementRef: any;
    /**
     * Level in the tree (starts from 1).
     */
    level: number;
    /**
     * Path in the tree: Array of IDs.
     */
    path: string[];
    /**
     * index of the node inside its parent's children
     */
    index: number;
    /**
     * A unique key of this node among its siblings.
     * By default it's the 'id' of the original node, unless stated otherwise in options.idField
     */
    id: IDType;
    isExpanded: boolean;
    isActive: boolean;
    isFocused: boolean;
    isCollapsed: boolean;
    isLeaf: boolean;
    hasChildren: boolean;
    isRoot: boolean;
    /**
     * @param skipHidden whether to skip hidden nodes
     * @returns next sibling (or null)
     */
    findNextSibling(skipHidden: any): ITreeNode;
    /**
     * @param skipHidden whether to skip hidden nodes
     * @returns previous sibling (or null)
     */
    findPreviousSibling(skipHidden: any): ITreeNode;
    /**
     * @param skipHidden whether to skip hidden nodes
     * @returns first child (or null)
     */
    getFirstChild(skipHidden: any): ITreeNode;
    /**
     * @param skipHidden whether to skip hidden nodes
     * @returns last child (or null)
     */
    getLastChild(skipHidden: any): ITreeNode;
    /**
     * Finds the visually next node in the tree.
     * @param goInside whether to look for children or just siblings
     * @returns next node.
     */
    findNextNode(goInside: boolean): ITreeNode;
    /**
     * Finds the visually previous node in the tree.
     * @param skipHidden whether to skip hidden nodes
     * @returns previous node.
     */
    findPreviousNode(skipHidden: any): ITreeNode;
    /**
     * @returns      true if this node is a descendant of the parameter node
     */
    isDescendantOf(node: ITreeNode): boolean;
    /**
     * @returns      in case levelPadding option is supplied, returns the current node's padding
     */
    getNodePadding(): string;
    /**
     * @returns      in case nodeClass option is supplied, returns the current node's class
     */
    getClass(): string;
    /**
     * Expands / Collapses the node
     */
    toggleExpanded(): any;
    /**
     * Expands the node
     */
    expand(): any;
    /**
     * Collapses the node
     */
    collapse(): any;
    /**
     * Expands all ancestors of the node
     */
    ensureVisible(): any;
    /**
     * Activates / Deactivates the node (selects / deselects)
     */
    toggleActivated(multi: any): any;
    /**
     * Focus on the node
     */
    focus(): any;
    /**
     * Blur (unfocus) the node
     */
    blur(): any;
    /**
     * Hides the node
     */
    hide(): any;
    /**
     * Makes the node visible
     */
    show(): any;
    /**
     * @param value  if true makes the node hidden, otherwise visible
     */
    setIsHidden(value: boolean): any;
    /**
     * Scroll the screen to make the node visible
     */
    scrollIntoView(): any;
    /**
     * Fire an event to the renderer of the tree (if it was registered)
     */
    fireEvent(event: any): any;
    /**
     * Invokes a method for every node under this one - depth first
     * @param fn  a function that receives the node
     */
    doForAll(fn: (node: ITreeNode) => any): any;
    /**
     * expand all nodes under this one
     */
    expandAll(): any;
    /**
     * collapse all nodes under this one
     */
    collapseAll(): any;
    /**
     * sets the node to active / inactive according to the value.
     * If multi is true (default false) - does a multiselect.
     */
    setIsActive(value: boolean, multi?: boolean): any;
    /**
     * sets the node to be active and makes sure it's visible by expanding all nodes above it and scrolling it into view.
     * Very similar to calling `activate`, `ensureVisible` and `scrollIntoView` methods.
     * If multi is true (default false) - does a multiselect.
     */
    setActiveAndVisible(multi: boolean): any;
}
interface ITreeModel {
    /**
     * All root nodes
     */
    roots: ITreeNode[];
    /**
     * Current focused node
     */
    focusedNode: ITreeNode;
    /**
     * Options that were passed to the tree component
     */
    options: ITreeOptions;
    /**
     * Is the tree currently focused
     */
    isFocused: boolean;
    /**
     * @returns Current active nodes
     */
    activeNodes: ITreeNode[];
    /**
     * @returns Current expanded nodes
     */
    expandedNodes: ITreeNode[];
    /**
     * @returns Current active node. If multiple nodes are active - returns the first one.
     */
    getActiveNode(): ITreeNode;
    /**
     * @returns Current focused node (either hovered or traversed with keys)
     */
    getFocusedNode(): ITreeNode;
    /**
     * Set focus on a node
     * @param value  true or false - whether to set focus or blur.
     */
    setFocusedNode(node: ITreeNode): any;
    /**
     * @param skipHidden  true or false - whether to skip hidden nodes
     * @returns      first root of the tree
     */
    getFirstRoot(skipHidden?: boolean): ITreeNode;
    /**
     * @param skipHidden  true or false - whether to skip hidden nodes
     * @returns      last root of the tree
     */
    getLastRoot(skipHidden?: boolean): ITreeNode;
    /**
     * @returns      true if the tree is empty
     */
    isEmptyTree(): boolean;
    /**
     * @returns All root nodes that pass the current filter
     */
    getVisibleRoots(): ITreeNode[];
    /**
     * @param     path  array of node IDs to be traversed respectively
     * @param     startNode  optional. Which node to start traversing from
     * @returns   The node, if found - null otherwise
     */
    getNodeByPath(path: any[], startNode?: ITreeNode): ITreeNode;
    /**
     * @param     id  node ID to find
     * @returns   The node, if found - null otherwise
     */
    getNodeById(id: IDType): ITreeNode;
    /**
     * @param     predicate - either an object or a function, used as a test condition on all nodes.
     *            Could be every predicate that's supported by javaScripts Array.prototype.find() method
     * @param     startNode  optional. Which node to start traversing from
     * @returns   First node that matches the predicate, if found - null otherwise
     */
    getNodeBy(predicate: any, startNode?: ITreeNode): ITreeNode;
    /**
     * get tree state
     */
    getState(): ITreeState;
    /**
     * Focuses or blurs the tree
     * @param value  true or false - whether to set focus or blur.
     */
    setFocus(value: boolean): any;
    /**
     * Focuses on the next node in the tree (same as down arrow)
     */
    focusNextNode(): any;
    /**
     * Focuses on the previous node in the tree (same as up arrow)
     */
    focusPreviousNode(): any;
    /**
     * Focuses on the inner child of the current focused node (same as right arrow on an expanded node)
     */
    focusDrillDown(): any;
    /**
     * Focuses on the parent of the current focused node (same as left arrow on a collapsed node)
     */
    focusDrillUp(): any;
    /**
     * Marks isHidden field in all nodes recursively according to the filter param.
     * If a node is marked visible, all of its ancestors will be marked visible as well.
     * @param filter  either a string or a function.
     *   In case it's a string, it will be searched case insensitively in the node's display attribute
     *   In case it's a function, it will be passed the node, and should return true if the node should be visible, false otherwise
     * @param autoShow  if true, make sure all nodes that passed the filter are visible
     */
    filterNodes(filter: any, autoShow?: boolean): any;
    /**
     * Marks all nodes isHidden = false
     */
    clearFilter(): any;
    /**
     * moves a node from one location in the tree to another
     * @param node describes which node needs to be moved
     * @param to describes where to move the node to.
     * @param from describes where to move the node from.
     * Contains a 'parent' node, an 'index', and a 'dropOnNode' - to distinguish between dropping between nodes or on the node
     */
    moveNode(node: ITreeNode, to: {
        parent: ITreeNode;
        index: number;
        dropOnNode: boolean;
    }, from: {
        parent: ITreeNode;
        index: number;
    }): any;
    /**
     * Invokes a method for every node of the tree - depth first
     * @param fn  a function that receives the node
     */
    doForAll(fn: (node: ITreeNode) => any): any;
    /**
     * expand all nodes
     */
    expandAll(): any;
    /**
     * collapse all nodes
     */
    collapseAll(): any;
    /**
     * set tree state
     */
    setState(state: ITreeState): any;
    subscribeToState(fn: (state: ITreeState) => any): any;
}
/**
 * This is the interface of the TreeNodeDrag service
 */
interface ITreeNodeDrag {
    /**
     * Gets the current dragged node. Useful for overriding the drop action.
     * @param node  The parent node of the current dragged node
     * @param index  The index inside parent's children, of the current dragged node
     */
    getDragNode(): {
        node: TreeNode$1;
        index: number;
    };
}

declare class TreeModel implements ITreeModel, OnDestroy {
    static focusedTree: any;
    options: TreeOptions;
    nodes: any[];
    eventNames: string[];
    virtualScroll: TreeVirtualScroll;
    roots: TreeNode[];
    expandedNodeIds: IDTypeDictionary;
    selectedLeafNodeIds: IDTypeDictionary;
    activeNodeIds: IDTypeDictionary;
    hiddenNodeIds: IDTypeDictionary;
    focusedNodeId: IDType;
    virtualRoot: TreeNode;
    private firstUpdate;
    private events;
    private subscriptions;
    fireEvent(event: any): void;
    subscribe(eventName: any, fn: any): void;
    getFocusedNode(): TreeNode;
    getActiveNode(): TreeNode;
    getActiveNodes(): TreeNode[];
    getVisibleRoots(): TreeNode[];
    getFirstRoot(skipHidden?: boolean): TreeNode;
    getLastRoot(skipHidden?: boolean): TreeNode;
    get isFocused(): boolean;
    isNodeFocused(node: any): boolean;
    isEmptyTree(): boolean;
    get focusedNode(): any;
    get expandedNodes(): any[];
    get activeNodes(): any[];
    get hiddenNodes(): any[];
    get selectedLeafNodes(): any[];
    getNodeByPath(path: any[], startNode?: any): TreeNode;
    getNodeById(id: any): any;
    getNodeBy(predicate: any, startNode?: any): any;
    isExpanded(node: any): boolean;
    isHidden(node: any): boolean;
    isActive(node: any): boolean;
    isSelected(node: any): boolean;
    ngOnDestroy(): void;
    dispose(): void;
    unsubscribeAll(): void;
    setData({ nodes, options, events }: {
        nodes: any;
        options: any;
        events: any;
    }): void;
    update(): void;
    setFocusedNode(node: any): void;
    setFocus(value: any): void;
    doForAll(fn: any): void;
    focusNextNode(): void;
    focusPreviousNode(): void;
    focusDrillDown(): void;
    focusDrillUp(): void;
    setActiveNode(node: any, value: any, multi?: boolean): void;
    setSelectedNode(node: any, value: any): void;
    setExpandedNode(node: any, value: any): void;
    expandAll(): void;
    collapseAll(): void;
    setIsHidden(node: any, value: any): void;
    setHiddenNodeIds(nodeIds: any): void;
    performKeyAction(node: any, $event: any): boolean;
    filterNodes(filter: any, autoShow?: boolean): void;
    clearFilter(): void;
    moveNode(node: any, to: any): void;
    copyNode(node: any, to: any): void;
    getState(): {
        expandedNodeIds: IDTypeDictionary;
        selectedLeafNodeIds: IDTypeDictionary;
        activeNodeIds: IDTypeDictionary;
        hiddenNodeIds: IDTypeDictionary;
        focusedNodeId: IDType;
    };
    setState(state: any): void;
    subscribeToState(fn: any): void;
    canMoveNode(node: any, to: any, fromIndex?: any): boolean;
    calculateExpandedNodes(): void;
    private _filterNode;
    private _calculateExpandedNodes;
    private _setActiveNodeSingle;
    private _setActiveNodeMulti;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeModel, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TreeModel>;
}

declare class TreeNode implements ITreeNode {
    data: any;
    parent: TreeNode;
    treeModel: TreeModel;
    private handler;
    get isHidden(): boolean;
    get isExpanded(): boolean;
    get isActive(): boolean;
    get isFocused(): boolean;
    get isSelected(): boolean;
    get isAllSelected(): boolean;
    get isPartiallySelected(): boolean;
    children: TreeNode[];
    index: number;
    position: number;
    height: number;
    get level(): number;
    get path(): string[];
    get elementRef(): any;
    private _originalNode;
    get originalNode(): any;
    constructor(data: any, parent: TreeNode, treeModel: TreeModel, index: number);
    get hasChildren(): boolean;
    get isCollapsed(): boolean;
    get isLeaf(): boolean;
    get isRoot(): boolean;
    get realParent(): TreeNode;
    get options(): TreeOptions;
    fireEvent(event: any): void;
    get displayField(): any;
    get id(): any;
    set id(value: any);
    getField(key: any): any;
    setField(key: any, value: any): void;
    _findAdjacentSibling(steps: any, skipHidden?: boolean): any;
    findNextSibling(skipHidden?: boolean): any;
    findPreviousSibling(skipHidden?: boolean): any;
    getVisibleChildren(): TreeNode[];
    get visibleChildren(): TreeNode[];
    getFirstChild(skipHidden?: boolean): TreeNode;
    getLastChild(skipHidden?: boolean): TreeNode;
    findNextNode(goInside?: boolean, skipHidden?: boolean): any;
    findPreviousNode(skipHidden?: boolean): any;
    _getLastOpenDescendant(skipHidden?: boolean): any;
    private _getParentsChildren;
    private getIndexInParent;
    isDescendantOf(node: TreeNode): any;
    getNodePadding(): string;
    getClass(): string;
    onDrop($event: any): void;
    allowDrop: (element: any, $event?: any) => boolean;
    allowDragoverStyling: () => boolean;
    allowDrag(): boolean;
    loadNodeChildren(): Promise<void>;
    expand(): this;
    collapse(): this;
    doForAll(fn: (node: ITreeNode) => any): void;
    expandAll(): void;
    collapseAll(): void;
    ensureVisible(): this;
    toggleExpanded(): this;
    setIsExpanded(value: any): this;
    autoLoadChildren(): void;
    dispose(): void;
    setIsActive(value: any, multi?: boolean): this;
    isSelectable(): boolean;
    setIsSelected(value: any): this;
    toggleSelected(): this;
    toggleActivated(multi?: boolean): this;
    setActiveAndVisible(multi?: boolean): this;
    scrollIntoView(force?: boolean): void;
    focus(scroll?: boolean): this;
    blur(): this;
    setIsHidden(value: any): void;
    hide(): void;
    show(): void;
    mouseAction(actionName: string, $event: any, data?: any): void;
    getSelfHeight(): number;
    _initChildren(): void;
}

interface IActionHandler {
    (tree: TreeModel, node: TreeNode, $event: any, ...rest: any[]): any;
}
declare const TREE_ACTIONS: {
    TOGGLE_ACTIVE: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    TOGGLE_ACTIVE_MULTI: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    TOGGLE_SELECTED: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    ACTIVATE: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    DEACTIVATE: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    SELECT: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    DESELECT: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    FOCUS: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    TOGGLE_EXPANDED: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    EXPAND: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    COLLAPSE: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    DRILL_DOWN: (tree: TreeModel, node: TreeNode, $event: any) => void;
    DRILL_UP: (tree: TreeModel, node: TreeNode, $event: any) => void;
    NEXT_NODE: (tree: TreeModel, node: TreeNode, $event: any) => void;
    PREVIOUS_NODE: (tree: TreeModel, node: TreeNode, $event: any) => void;
    MOVE_NODE: (tree: TreeModel, node: TreeNode, $event: any, { from, to }: {
        from: any;
        to: any;
    }) => void;
};
interface IActionMapping {
    mouse?: {
        click?: IActionHandler;
        dblClick?: IActionHandler;
        contextMenu?: IActionHandler;
        expanderClick?: IActionHandler;
        checkboxClick?: IActionHandler;
        dragStart?: IActionHandler;
        drag?: IActionHandler;
        dragEnd?: IActionHandler;
        dragOver?: IActionHandler;
        dragLeave?: IActionHandler;
        dragEnter?: IActionHandler;
        drop?: IActionHandler;
        mouseOver?: IActionHandler;
        mouseOut?: IActionHandler;
    };
    keys?: {
        [key: number]: IActionHandler;
    };
}
declare class TreeOptions {
    private options;
    get hasChildrenField(): string;
    get childrenField(): string;
    get displayField(): string;
    get idField(): string;
    get isExpandedField(): string;
    get getChildren(): any;
    get levelPadding(): number;
    get useVirtualScroll(): boolean;
    get animateExpand(): boolean;
    get animateSpeed(): number;
    get animateAcceleration(): number;
    get scrollOnActivate(): boolean;
    get rtl(): boolean;
    get rootId(): any;
    get useCheckbox(): boolean;
    get useTriState(): boolean;
    get scrollContainer(): HTMLElement;
    get allowDragoverStyling(): boolean;
    actionMapping: IActionMapping;
    constructor(options?: ITreeOptions);
    getNodeClone(node: TreeNode): any;
    allowDrop(element: any, to: any, $event?: any): boolean;
    allowDrag(node: TreeNode): boolean;
    nodeClass(node: TreeNode): string;
    nodeHeight(node: TreeNode): number;
    get dropSlotHeight(): number;
}

declare const KEYS: {
    LEFT: number;
    UP: number;
    RIGHT: number;
    DOWN: number;
    ENTER: number;
    SPACE: number;
    CONTEXT_MENU: number;
};

declare class TreeDraggedElement {
    _draggedElement: any;
    set(draggedElement: any): void;
    get(): any;
    isDragging(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDraggedElement, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TreeDraggedElement>;
}

declare class LoadingComponent {
    template: TemplateRef<any>;
    node: TreeNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadingComponent, "tree-loading-component", never, { "template": { "alias": "template"; "required": false; }; "node": { "alias": "node"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeViewportComponent implements AfterViewInit, OnInit, OnDestroy {
    private elementRef;
    virtualScroll: TreeVirtualScroll;
    setViewport: () => void;
    private readonly scrollEventHandler;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getTotalHeight(): string;
    private throttle;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeViewportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeViewportComponent, "tree-viewport", never, {}, {}, never, ["*"], true, never>;
}

declare class TreeComponent implements OnChanges {
    treeModel: TreeModel;
    treeDraggedElement: TreeDraggedElement;
    _nodes: any[];
    _options: TreeOptions;
    loadingTemplate: TemplateRef<any>;
    treeNodeTemplate: TemplateRef<any>;
    treeNodeWrapperTemplate: TemplateRef<any>;
    treeNodeFullTemplate: TemplateRef<any>;
    viewportComponent: TreeViewportComponent;
    set nodes(nodes: any[]);
    set options(options: ITreeOptions);
    set focused(value: boolean);
    set state(state: any);
    toggleExpanded: any;
    activate: any;
    deactivate: any;
    nodeActivate: any;
    nodeDeactivate: any;
    select: any;
    deselect: any;
    focus: any;
    blur: any;
    updateData: any;
    initialized: any;
    moveNode: any;
    copyNode: any;
    loadNodeChildren: any;
    changeFilter: any;
    event: any;
    stateChange: any;
    constructor();
    onKeydown($event: any): void;
    onMousedown($event: any): void;
    ngOnChanges(changes: any): void;
    sizeChanged(): void;
    private pick;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeComponent, "Tree, tree-root", never, { "nodes": { "alias": "nodes"; "required": false; }; "options": { "alias": "options"; "required": false; }; "focused": { "alias": "focused"; "required": false; }; "state": { "alias": "state"; "required": false; }; }, { "toggleExpanded": "toggleExpanded"; "activate": "activate"; "deactivate": "deactivate"; "nodeActivate": "nodeActivate"; "nodeDeactivate": "nodeDeactivate"; "select": "select"; "deselect": "deselect"; "focus": "focus"; "blur": "blur"; "updateData": "updateData"; "initialized": "initialized"; "moveNode": "moveNode"; "copyNode": "copyNode"; "loadNodeChildren": "loadNodeChildren"; "changeFilter": "changeFilter"; "event": "event"; "stateChange": "stateChange"; }, ["loadingTemplate", "treeNodeTemplate", "treeNodeWrapperTemplate", "treeNodeFullTemplate"], never, true, never>;
}

declare class TreeNodeChildrenComponent {
    node: TreeNode;
    templates: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNodeChildrenComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNodeChildrenComponent, "tree-node-children", never, { "node": { "alias": "node"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; }, {}, never, never, true, never>;
}
declare class TreeNodeCollectionComponent implements OnInit, OnDestroy {
    get nodes(): any;
    set nodes(nodes: any);
    treeModel: TreeModel;
    _nodes: any;
    private virtualScroll;
    templates: any;
    viewportNodes: TreeNode[];
    get marginTop(): string;
    _dispose: any[];
    setNodes(nodes: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    trackNode(index: any, node: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNodeCollectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNodeCollectionComponent, "tree-node-collection", never, { "nodes": { "alias": "nodes"; "required": false; }; "treeModel": { "alias": "treeModel"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; }, {}, never, never, true, never>;
}
declare class TreeNodeComponent {
    node: TreeNode;
    index: number;
    templates: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNodeComponent, "TreeNode, tree-node", never, { "node": { "alias": "node"; "required": false; }; "index": { "alias": "index"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeNodeContent {
    node: TreeNode;
    index: number;
    template: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNodeContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNodeContent, "tree-node-content", never, { "node": { "alias": "node"; "required": false; }; "index": { "alias": "index"; "required": false; }; "template": { "alias": "template"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeNodeDropSlot {
    node: TreeNode;
    dropIndex: number;
    onDrop($event: any): void;
    allowDrop(element: any, $event: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNodeDropSlot, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNodeDropSlot, "TreeNodeDropSlot, tree-node-drop-slot", never, { "node": { "alias": "node"; "required": false; }; "dropIndex": { "alias": "dropIndex"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeNodeExpanderComponent {
    node: TreeNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNodeExpanderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNodeExpanderComponent, "tree-node-expander", never, { "node": { "alias": "node"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeNodeWrapperComponent {
    node: TreeNode;
    index: number;
    templates: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNodeWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNodeWrapperComponent, "tree-node-wrapper", never, { "node": { "alias": "node"; "required": false; }; "index": { "alias": "index"; "required": false; }; "templates": { "alias": "templates"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeNodeCheckboxComponent {
    node: TreeNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNodeCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNodeCheckboxComponent, "tree-node-checkbox", never, { "node": { "alias": "node"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeDropDirective implements AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private treeDraggedElement;
    private ngZone;
    allowDragoverStyling: boolean;
    onDropCallback: EventEmitter<any>;
    onDragOverCallback: EventEmitter<any>;
    onDragLeaveCallback: EventEmitter<any>;
    onDragEnterCallback: EventEmitter<any>;
    private readonly dragOverEventHandler;
    private readonly dragEnterEventHandler;
    private readonly dragLeaveEventHandler;
    private _allowDrop;
    set treeAllowDrop(allowDrop: any);
    allowDrop($event: any): boolean;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDragOver($event: any): void;
    onDragEnter($event: any): void;
    onDragLeave($event: any): void;
    onDrop($event: any): void;
    private addClass;
    private removeClass;
    private addDisabledClass;
    private removeDisabledClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDropDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TreeDropDirective, "[treeDrop]", never, { "allowDragoverStyling": { "alias": "allowDragoverStyling"; "required": false; }; "treeAllowDrop": { "alias": "treeAllowDrop"; "required": false; }; }, { "onDropCallback": "treeDrop"; "onDragOverCallback": "treeDropDragOver"; "onDragLeaveCallback": "treeDropDragLeave"; "onDragEnterCallback": "treeDropDragEnter"; }, never, never, true, never>;
}

declare class TreeDragDirective implements AfterViewInit, DoCheck, OnDestroy {
    private el;
    private renderer;
    private treeDraggedElement;
    private ngZone;
    draggedElement: any;
    treeDragEnabled: any;
    private readonly dragEventHandler;
    constructor();
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    onDragStart(ev: any): void;
    onDrag(ev: any): void;
    onDragEnd(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDragDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TreeDragDirective, "[treeDrag]", never, { "draggedElement": { "alias": "treeDrag"; "required": false; }; "treeDragEnabled": { "alias": "treeDragEnabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeAnimateOpenDirective {
    private renderer;
    private templateRef;
    private viewContainerRef;
    private _isOpen;
    animateSpeed: number;
    animateAcceleration: number;
    isEnabled: boolean;
    set isOpen(value: boolean);
    private innerElement;
    private _show;
    private _hide;
    private _animateOpen;
    private _animateClose;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeAnimateOpenDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TreeAnimateOpenDirective, "[treeAnimateOpen]", never, { "animateSpeed": { "alias": "treeAnimateOpenSpeed"; "required": false; }; "animateAcceleration": { "alias": "treeAnimateOpenAcceleration"; "required": false; }; "isEnabled": { "alias": "treeAnimateOpenEnabled"; "required": false; }; "isOpen": { "alias": "treeAnimateOpen"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TreeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TreeModule, never, [typeof i1.CommonModule, typeof TreeComponent, typeof TreeNodeComponent, typeof TreeNodeContent, typeof LoadingComponent, typeof TreeDropDirective, typeof TreeDragDirective, typeof TreeNodeExpanderComponent, typeof TreeNodeChildrenComponent, typeof TreeNodeDropSlot, typeof TreeNodeCollectionComponent, typeof TreeViewportComponent, typeof TreeNodeWrapperComponent, typeof TreeNodeCheckboxComponent, typeof TreeAnimateOpenDirective, typeof TreeMobxAutorunDirective], [typeof TreeComponent, typeof TreeNodeComponent, typeof TreeNodeContent, typeof LoadingComponent, typeof TreeDropDirective, typeof TreeDragDirective, typeof TreeNodeExpanderComponent, typeof TreeNodeChildrenComponent, typeof TreeNodeDropSlot, typeof TreeNodeCollectionComponent, typeof TreeViewportComponent, typeof TreeNodeWrapperComponent, typeof TreeNodeCheckboxComponent, typeof TreeAnimateOpenDirective, typeof TreeMobxAutorunDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TreeModule>;
}

export { KEYS, LoadingComponent, TREE_ACTIONS, TreeAnimateOpenDirective, TreeComponent, TreeDragDirective, TreeDraggedElement, TreeDropDirective, TreeMobxAutorunDirective, TreeModel, TreeModule, TreeNode, TreeNodeCheckboxComponent, TreeNodeChildrenComponent, TreeNodeCollectionComponent, TreeNodeComponent, TreeNodeContent, TreeNodeDropSlot, TreeNodeExpanderComponent, TreeNodeWrapperComponent, TreeViewportComponent, TreeVirtualScroll };
export type { IActionHandler, IActionMapping, IAllowDragFn, IAllowDropFn, IDType, IDTypeDictionary, INodeHeightFn, ITreeModel, ITreeNode, ITreeNodeDrag, ITreeOptions, ITreeState, TreeNode$1 as TreeNodeType };
