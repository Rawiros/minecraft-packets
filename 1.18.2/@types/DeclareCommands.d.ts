export interface Flag {
	unused: number;
	has_custom_suggestions: number;
	has_redirect_node: number;
	has_command: number;
	command_node_type: number;
}

export interface Node {
	flags: Flag;
	children: number[];
}

export default interface RootObject {
	nodes: Node[];
	rootIndex: number;
}