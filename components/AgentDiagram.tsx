'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Animated agent workflow diagram showing a LangGraph-style flow:
 *
 *           ┌─────────┐
 *  User ──▶ │  Agent  │ ──▶ Tool Call ──▶ Response
 *           └─────────┘
 *                │
 *                ▼
 *           ┌─────────┐
 *           │  Memory │
 *           └─────────┘
 *
 * Nodes pulse and edges animate to suggest a live system.
 */
export function AgentDiagram() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % 5), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative card-surface p-8 font-mono text-[11px] backdrop-blur-sm">
      {/* Header strip */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <span className="text-ink-faint tracking-wider">agent_workflow.py</span>
        <span className="text-accent">▶ running</span>
      </div>

      {/* SVG Diagram */}
      <svg viewBox="0 0 440 360" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Edges - drawn first so they sit behind nodes */}
        {/* User → Agent */}
        <line
          x1="70"
          y1="60"
          x2="170"
          y2="60"
          stroke="#27272a"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        {active === 0 && (
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
            x1="70"
            y1="60"
            x2="170"
            y2="60"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        )}

        {/* Agent → Tool */}
        <line
          x1="270"
          y1="60"
          x2="370"
          y2="60"
          stroke="#27272a"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        {active === 1 && (
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
            x1="270"
            y1="60"
            x2="370"
            y2="60"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        )}

        {/* Agent → Memory (down) */}
        <line
          x1="220"
          y1="95"
          x2="220"
          y2="170"
          stroke="#27272a"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        {active === 2 && (
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
            x1="220"
            y1="95"
            x2="220"
            y2="170"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        )}

        {/* Agent → Vector DB (diagonal) */}
        <line
          x1="190"
          y1="95"
          x2="100"
          y2="190"
          stroke="#27272a"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        {active === 3 && (
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
            x1="190"
            y1="95"
            x2="100"
            y2="190"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        )}

        {/* Agent → LLM (diagonal right) */}
        <line
          x1="250"
          y1="95"
          x2="340"
          y2="190"
          stroke="#27272a"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        {active === 4 && (
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
            x1="250"
            y1="95"
            x2="340"
            y2="190"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        )}

        {/* Bottom merge → response */}
        <line
          x1="220"
          y1="240"
          x2="220"
          y2="300"
          stroke="#27272a"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />

        {/* Nodes */}
        {/* User */}
        <g>
          <rect
            x="20"
            y="40"
            width="50"
            height="40"
            fill="#161618"
            stroke={active === 0 ? '#3b82f6' : '#3f3f46'}
            strokeWidth="1.5"
            rx="2"
          />
          <text
            x="45"
            y="64"
            fontSize="10"
            fill="#a1a1aa"
            textAnchor="middle"
            fontFamily="monospace"
          >
            USER
          </text>
        </g>

        {/* Agent (center, larger) */}
        <g>
          <rect
            x="170"
            y="30"
            width="100"
            height="60"
            fill="#161618"
            stroke={active === 1 || active === 2 || active === 3 || active === 4 ? '#3b82f6' : '#3f3f46'}
            strokeWidth="1.5"
            rx="2"
          />
          <text
            x="220"
            y="55"
            fontSize="10"
            fill="#3b82f6"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="600"
          >
            LangGraph
          </text>
          <text
            x="220"
            y="72"
            fontSize="9"
            fill="#71717a"
            textAnchor="middle"
            fontFamily="monospace"
          >
            agent_node
          </text>
        </g>

        {/* Tools */}
        <g>
          <rect
            x="370"
            y="40"
            width="60"
            height="40"
            fill="#161618"
            stroke={active === 1 ? '#3b82f6' : '#3f3f46'}
            strokeWidth="1.5"
            rx="2"
          />
          <text
            x="400"
            y="58"
            fontSize="9"
            fill="#a1a1aa"
            textAnchor="middle"
            fontFamily="monospace"
          >
            MCP
          </text>
          <text
            x="400"
            y="72"
            fontSize="8"
            fill="#71717a"
            textAnchor="middle"
            fontFamily="monospace"
          >
            tools
          </text>
        </g>

        {/* Vector DB (left) */}
        <g>
          <rect
            x="40"
            y="180"
            width="80"
            height="60"
            fill="#161618"
            stroke={active === 3 ? '#3b82f6' : '#3f3f46'}
            strokeWidth="1.5"
            rx="2"
          />
          <text
            x="80"
            y="203"
            fontSize="9"
            fill="#a1a1aa"
            textAnchor="middle"
            fontFamily="monospace"
          >
            Pinecone
          </text>
          <text
            x="80"
            y="220"
            fontSize="8"
            fill="#71717a"
            textAnchor="middle"
            fontFamily="monospace"
          >
            vector
          </text>
        </g>

        {/* Memory (center) */}
        <g>
          <rect
            x="180"
            y="180"
            width="80"
            height="60"
            fill="#161618"
            stroke={active === 2 ? '#3b82f6' : '#3f3f46'}
            strokeWidth="1.5"
            rx="2"
          />
          <text
            x="220"
            y="203"
            fontSize="9"
            fill="#a1a1aa"
            textAnchor="middle"
            fontFamily="monospace"
          >
            State
          </text>
          <text
            x="220"
            y="220"
            fontSize="8"
            fill="#71717a"
            textAnchor="middle"
            fontFamily="monospace"
          >
            memory
          </text>
        </g>

        {/* LLM (right) */}
        <g>
          <rect
            x="320"
            y="180"
            width="80"
            height="60"
            fill="#161618"
            stroke={active === 4 ? '#3b82f6' : '#3f3f46'}
            strokeWidth="1.5"
            rx="2"
          />
          <text
            x="360"
            y="203"
            fontSize="9"
            fill="#a1a1aa"
            textAnchor="middle"
            fontFamily="monospace"
          >
            LiteLLM
          </text>
          <text
            x="360"
            y="220"
            fontSize="8"
            fill="#71717a"
            textAnchor="middle"
            fontFamily="monospace"
          >
            router
          </text>
        </g>

        {/* Response */}
        <g>
          <rect
            x="160"
            y="300"
            width="120"
            height="40"
            fill="#161618"
            stroke="#3b82f6"
            strokeWidth="1.5"
            rx="2"
          />
          <text
            x="220"
            y="325"
            fontSize="10"
            fill="#3b82f6"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="600"
          >
            RESPONSE
          </text>
        </g>

        {/* Pulse dots */}
        <circle cx="220" cy="60" r="3" fill="#3b82f6" className="animate-pulse-glow" />
      </svg>

      {/* Status bar */}
      <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-[10px] text-ink-faint tracking-wider">
        <span>5 nodes · 4 edges</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          live
        </span>
      </div>
    </div>
  );
}
