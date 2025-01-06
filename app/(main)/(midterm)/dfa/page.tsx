"use client";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  addEdge,
  Background,
  BackgroundVariant,
  ColorMode,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useTheme } from "next-themes";
import { useCallback } from "react";

const initialNodes = [
  {
    id: "annotation-1",
    type: "annotation",
    draggable: true,
    selectable: true,
    data: {
      level: 1,
      label: "Start Node",
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: "translate(-30px,10px) rotate(-80deg)",
      },
    },
    position: { x: -200, y: -30 },
  },
];

const initialEdges = [];

const nodeTypes = {
  // annotation: AnnotationNode,
  // tools: ToolbarNode,
  // resizer: ResizerNode,
  // circle: CircleNode,
  // textinput: TextInputNode,
};

const edgeTypes = {};

const nodeClassName = (node) => node.type;

function DFA() {
  const { theme } = useTheme();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <main className="h-full w-full">
      {/* <SidebarTrigger className="absolute z-10" /> */}

      <div className="h-full w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onConnect={onConnect}
          colorMode={theme as ColorMode}
          fitView
        >
          <MiniMap zoomable pannable nodeClassName={nodeClassName} />
          <Controls />

          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
    </main>

    // <SidebarProvider name="dfa-sidebar" className="h-full w-full">
    //   <Sidebar variant="floating" collapsible="icon" side="right">
    //     <SidebarHeader />
    //     <SidebarContent>
    //       <SidebarGroup />
    //       <SidebarGroup />
    //     </SidebarContent>
    //     <SidebarFooter />
    //   </Sidebar>
    // </SidebarProvider>
  );
}

export default DFA;
