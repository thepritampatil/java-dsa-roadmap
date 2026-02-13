import React, { useState, useMemo, useEffect } from 'react';

// Simple Icon Components
const Icon = ({ d, size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {d}
  </svg>
);

const ChevronDown = (props) => <Icon {...props} d={<polyline points="6 9 12 15 18 9" />} />;
const CheckCircle2 = (props) => <Icon {...props} d={<><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>} />;
const Circle = (props) => <Icon {...props} d={<circle cx="12" cy="12" r="10" />} />;
const BookOpen = (props) => <Icon {...props} d={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>} />;
const Code2 = (props) => <Icon {...props} d={<><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></>} />;
const Trophy = (props) => <Icon {...props} d={<><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></>} />;
const Zap = (props) => <Icon {...props} d={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />} />;
const Layers = (props) => <Icon {...props} d={<><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>} />;
const Search = (props) => <Icon {...props} d={<><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></>} />;
const Layout = (props) => <Icon {...props} d={<><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>} />;
const Target = (props) => <Icon {...props} d={<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>} />;
const Save = (props) => <Icon {...props} d={<><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></>} />;
const Download = (props) => <Icon {...props} d={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>} />;
const Upload = (props) => <Icon {...props} d={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>} />;
const RotateCcw = (props) => <Icon {...props} d={<><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></>} />;
const Check = (props) => <Icon {...props} d={<polyline points="20 6 9 17 4 12" />} />;
const ExternalLink = (props) => <Icon {...props} d={<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></>} />;

// Roadmap Data
const roadmapData = [
  {
    level: "Level 1: Java Fundamentals",
    description: "Build a strong foundation in Java programming",
    color: "blue",
    chapters: [
      {
        title: "Flowcharts & Pseudocode",
        subtopics: ["Problem Solving Logic", "Decision Blocks", "Looping Constructs", "Standard Symbols"],
        patterns: ["Logic Branching", "Iteration Flow"],
      },
      {
        title: "Variables & Data Types",
        subtopics: ["Primitive Types (int, double, char)", "Non-Primitive Types", "Type Casting", "Input/Output (Scanner class)"],
        patterns: ["Data Normalization", "Input Sanitization"],
      },
      {
        title: "Operators",
        subtopics: ["Arithmetic Operators", "Relational Operators", "Logical Operators", "Bitwise Operators", "Assignment Operators"],
        patterns: ["Bit Manipulation Basics", "Short-circuit Logic"],
      },
      {
        title: "Conditional Statements",
        subtopics: ["If-Else Blocks", "Else-If Ladders", "Switch Statements", "Ternary Operator"],
        patterns: ["Conditional Routing", "State Switching"],
      },
      {
        title: "Loops (Flow Control)",
        subtopics: ["While Loops", "For Loops", "Do-While Loops", "Break & Continue", "Nested Loops"],
        patterns: ["Iterative Traversal", "Nested Looping"],
      },
      {
        title: "Patterns & Logic Building",
        subtopics: ["Star Patterns", "Number Patterns", "Character Patterns", "Pyramid Patterns"],
        patterns: ["Symmetry Pattern", "Inverted Pyramid", "Hollow Shape Logic"],
      },
      {
        title: "Functions & Scope",
        subtopics: ["Method Declaration", "Parameters & Return Types", "Call by Value vs Reference", "Method Overloading", "Recursion Basics"],
        patterns: ["Modularization", "Scope Isolation"],
      },
    ],
  },
  {
    level: "Level 2: Core DSA & OOP",
    description: "Master essential data structures and object-oriented concepts",
    color: "emerald",
    chapters: [
      {
        title: "Arrays & 2D Arrays",
        subtopics: ["Array Traversal", "Insert/Delete", "Prefix Sum", "Subarray Problems", "Max/Min Subarray", "2D Matrix", "Spiral Matrix", "Matrix Rotation"],
        patterns: ["Two Pointer", "Sliding Window", "Prefix Sum", "Kadane's Algorithm", "Spiral Matrix", "Merge Intervals"],
      },
      {
        title: "Sorting Algorithms",
        subtopics: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Counting Sort", "Radix Sort", "Stability"],
        patterns: ["Comparison Sorting", "Divide & Conquer Sorting", "Partition Pattern", "In-place Sorting"],
      },
      {
        title: "Strings",
        subtopics: ["String Operations", "Character Frequency", "Palindrome", "StringBuilder", "Pattern Searching", "String Matching", "Anagram Detection"],
        patterns: ["Sliding Window", "Two Pointer", "Frequency Hashing", "KMP Algorithm", "Rabin-Karp"],
      },
      {
        title: "Pointers (Memory & References)",
        subtopics: ["Pass by Value vs Reference", "Object References", "Memory Management", "Shallow vs Deep Copy", "Null References", "Reference Variables"],
        patterns: ["Reference Manipulation", "Memory Optimization", "Object Aliasing"],
      },
      {
        title: "Collections Framework",
        subtopics: ["ArrayList & LinkedList", "HashSet & TreeSet", "HashMap & TreeMap", "Queue & Deque", "PriorityQueue", "Iterator", "Comparable & Comparator"],
        patterns: ["Collection Selection", "Custom Sorting", "Iteration Patterns"],
      },
      {
        title: "Time & Space Complexity",
        subtopics: ["Big O Notation", "Time Complexity", "Space Complexity", "Best/Average/Worst Case", "Amortized Analysis", "Master Theorem"],
        patterns: ["Complexity Calculation", "Algorithm Optimization", "Trade-off Analysis"],
      },
      {
        title: "Recursion & Backtracking",
        subtopics: ["Base & Recursive Case", "Recursion Tree", "Backtracking", "Subsets", "Permutations", "N-Queens", "Sudoku Solver"],
        patterns: ["Pick/Not Pick", "Subset Generation", "Permutation Generation", "Combination Sum"],
      },
      {
        title: "Divide & Conquer",
        subtopics: ["D&C Paradigm", "Merge Sort Analysis", "Quick Sort Analysis", "Binary Search", "Closest Pair", "Strassen's Matrix"],
        patterns: ["Problem Decomposition", "Recursive Merging", "Pivot Selection"],
      },
      {
        title: "Object Oriented Programming",
        subtopics: ["Classes & Objects", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction", "Interfaces", "Access Modifiers", "Constructors", "Static & Final"],
        patterns: ["Design Patterns Intro", "Composition over Inheritance", "Interface Segregation"],
      },
      {
        title: "Linked Lists",
        subtopics: ["Singly Linked List", "Doubly Linked List", "Circular List", "Reverse List", "Detect Cycle", "Merge Lists", "Middle Element", "Remove Nth Node"],
        patterns: ["Fast & Slow Pointer", "Reverse Pattern", "Cycle Detection", "Dummy Node"],
      },
      {
        title: "Stacks & Queues",
        subtopics: ["Stack Implementation", "Queue Implementation", "Circular Queue", "Deque", "Stack using Queues", "Queue using Stacks", "Applications"],
        patterns: ["Monotonic Stack", "Next Greater Element", "Parentheses Validation", "BFS Queue"],
      },
      {
        title: "Binary Trees",
        subtopics: ["Tree Terminology", "Traversals (Pre/In/Post)", "Level Order", "Height", "Diameter", "Path Problems", "Balanced Trees", "View Problems"],
        patterns: ["DFS Traversal", "BFS Level Order", "Height/Depth", "Path Sum"],
      },
      {
        title: "Binary Search Trees",
        subtopics: ["BST Properties", "Search", "Insert", "Delete", "LCA", "BST to Array", "Validate BST", "Inorder Successor"],
        patterns: ["BST Search", "BST Modification", "Range Queries", "BST Validation"],
      },
    ],
  },
  {
    level: "Level 3: Advanced DSA",
    description: "Master complex algorithms and optimization techniques",
    color: "purple",
    chapters: [
      {
        title: "Heaps (Priority Queue)",
        subtopics: ["Min/Max Heap", "Heapify", "Heap Sort", "Top K Problems", "Priority Queue Ops", "Median Finding"],
        patterns: ["Top K Elements", "Merge K Sorted Lists", "Running Median", "Kth Largest/Smallest"],
      },
      {
        title: "HashMaps & HashSets",
        subtopics: ["Hashing Concept", "Collision Handling", "Load Factor", "Frequency Counting", "Pair Sum", "Custom Hash Functions"],
        patterns: ["Frequency Count", "Prefix Sum + HashMap", "Distinct Elements Window", "Subarray Sum"],
      },
      {
        title: "Tries",
        subtopics: ["Trie Structure", "Insert/Search/Delete", "Prefix Matching", "Auto-complete", "Longest Common Prefix", "Word Search"],
        patterns: ["Prefix Search", "Dictionary Problems", "Word Break Pattern"],
      },
      {
        title: "Graphs",
        subtopics: ["Graph Representation", "BFS", "DFS", "Cycle Detection", "Topological Sort", "Dijkstra", "Bellman-Ford", "Floyd-Warshall", "MST", "SCC"],
        patterns: ["BFS/DFS Pattern", "Cycle Detection", "Topological Sort", "Shortest Path", "MST (Kruskal/Prim)"],
      },
      {
        title: "Greedy Algorithms",
        subtopics: ["Greedy Choice", "Activity Selection", "Fractional Knapsack", "Huffman Coding", "Job Sequencing", "Min Platforms", "Coin Change"],
        patterns: ["Greedy Choice", "Interval Scheduling", "Optimization Problems"],
      },
      {
        title: "Dynamic Programming",
        subtopics: ["Memoization", "Tabulation", "Fibonacci DP", "0/1 Knapsack", "Unbounded Knapsack", "LCS", "LIS", "Edit Distance", "Grid DP", "Matrix Chain", "Partition"],
        patterns: ["1D DP", "2D DP", "LCS Pattern", "LIS Pattern", "Knapsack Variants", "Grid DP"],
      },
      {
        title: "Segment Trees",
        subtopics: ["Segment Tree Structure", "Range Query", "Range Update", "Lazy Propagation", "Point Update", "RMQ", "Range Sum Query"],
        patterns: ["Range Query", "Lazy Propagation", "Build/Update/Query"],
      },
    ],
  },
  {
    level: "Level 4: Interview Mastery",
    description: "Advanced topics for competitive programming",
    color: "orange",
    chapters: [
      {
        title: "Advanced Graph Algorithms",
        subtopics: ["A* Algorithm", "Bidirectional Search", "Network Flow", "Bipartite Matching", "Articulation Points", "Bridges", "Tarjan's Algorithm"],
        patterns: ["Graph Optimization", "Network Flow", "Advanced Traversal"],
      },
      {
        title: "Advanced DP Patterns",
        subtopics: ["DP on Trees", "DP on Graphs", "Digit DP", "Bitmask DP", "State Machine DP", "Probability DP"],
        patterns: ["Tree DP", "Bitmask DP", "State Compression"],
      },
      {
        title: "String Algorithms",
        subtopics: ["Z Algorithm", "Manacher's Algorithm", "Suffix Array", "Suffix Tree", "Aho-Corasick", "Boyer-Moore"],
        patterns: ["Pattern Matching", "Palindrome Detection", "Suffix Structures"],
      },
      {
        title: "Advanced Trees",
        subtopics: ["AVL Trees", "Red-Black Trees", "B-Trees", "Fenwick Tree (BIT)", "Sparse Table"],
        patterns: ["Self-Balancing", "Range Query Optimization"],
      },
      {
        title: "System Design Basics",
        subtopics: ["Scalability", "Load Balancing", "Caching", "Database Sharding", "CAP Theorem", "Microservices"],
        patterns: ["Design Patterns", "Scalability Patterns"],
      },
    ],
  },
];

function App() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [expandedChapters, setExpandedChapters] = useState({});
  const [completedItems, setCompletedItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [showExportSuccess, setShowExportSuccess] = useState(false);
  const [showImportSuccess, setShowImportSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('java-dsa-progress');
    if (saved) {
      try {
        setCompletedItems(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error('Error loading progress');
      }
    }
  }, []);

  const saveProgress = (updatedSet) => {
    localStorage.setItem('java-dsa-progress', JSON.stringify(Array.from(updatedSet)));
  };

  const countAllItems = () => {
    let total = 0;
    roadmapData.forEach((lvl) => {
      lvl.chapters.forEach((chap) => {
        total += chap.subtopics.length + chap.patterns.length;
      });
    });
    return total;
  };

  const totalItemsCount = useMemo(() => countAllItems(), []);
  const progress = (completedItems.size / totalItemsCount) * 100;

  const toggleChapter = (title) => {
    setExpandedChapters(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleItem = (key) => {
    const newSet = new Set(completedItems);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setCompletedItems(newSet);
    saveProgress(newSet);
  };

  const exportProgress = () => {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      completedItems: Array.from(completedItems),
      progress: Math.round(progress),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `java-dsa-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowExportSuccess(true);
    setTimeout(() => setShowExportSuccess(false), 3000);
  };

  const importProgress = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.completedItems && Array.isArray(data.completedItems)) {
          const newSet = new Set(data.completedItems);
          setCompletedItems(newSet);
          saveProgress(newSet);
          setShowImportSuccess(true);
          setTimeout(() => setShowImportSuccess(false), 3000);
        }
      } catch (error) {
        alert('Error importing file');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const resetProgress = () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      const newSet = new Set();
      setCompletedItems(newSet);
      saveProgress(newSet);
      setExpandedChapters({});
    }
  };

  const filteredChapters = useMemo(() => {
    const chapters = roadmapData[activeLevel].chapters;
    if (!searchTerm) return chapters;
    return chapters.filter(chap =>
      chap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chap.subtopics.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      chap.patterns.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [activeLevel, searchTerm]);

  const getLevelIcon = (index) => {
    const icons = [BookOpen, Code2, Trophy, Zap];
    return icons[index] || BookOpen;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {showExportSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 z-50">
            <Check size={20} />
            <span className="font-bold">Exported successfully!</span>
          </div>
        )}
        {showImportSuccess && (
          <div className="fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 z-50">
            <Check size={20} />
            <span className="font-bold">Imported successfully!</span>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3 flex-wrap">
              <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg">
                <Code2 size={28} />
              </div>
              <span>
                Java DSA <span className="text-blue-600">Roadmap</span>
              </span>
              <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                <Save size={12} /> Auto-Saved
              </div>
            </h1>
            <p className="text-slate-500 font-medium max-w-lg">
              Master Data Structures & Algorithms with our comprehensive
              curriculum
            </p>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow-xl border border-slate-100 min-w-[280px]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-yellow-50 rounded-lg">
                  <Trophy className="text-yellow-500" size={18} />
                </div>
                <span className="text-sm font-bold text-slate-700">
                  Mastery Score
                </span>
              </div>
              <span className="text-2xl font-black text-blue-600">
                {Math.round(progress)}
                <span className="text-sm text-slate-400 font-bold">%</span>
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-700 h-full rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-3 px-1">
              <span className="text-[11px] font-bold text-slate-400">
                {completedItems.size} Mastered
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                {totalItemsCount} Total
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {roadmapData.map((lvl, index) => {
            const Icon = getLevelIcon(index);
            return (
              <button
                key={index}
                onClick={() => setActiveLevel(index)}
                className={`relative overflow-hidden group p-5 rounded-3xl border-2 transition-all duration-300 text-left ${
                  activeLevel === index
                    ? `border-${lvl.color}-500 bg-white shadow-xl`
                    : "border-transparent bg-white/60 hover:bg-white hover:border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full inline-block ${
                        activeLevel === index
                          ? `text-${lvl.color}-600 bg-${lvl.color}-50`
                          : "text-slate-400 bg-slate-100"
                      }`}
                    >
                      Level {index + 1}
                    </div>
                    <h3
                      className={`text-base font-black leading-tight ${activeLevel === index ? "text-slate-800" : "text-slate-500"}`}
                    >
                      {lvl.level.split(": ")[1]}
                    </h3>
                  </div>
                  <Icon
                    className={`w-5 h-5 ${activeLevel === index ? `text-${lvl.color}-600` : "text-slate-300"}`}
                  />
                </div>
                <p className="text-xs text-slate-400 mt-3">{lvl.description}</p>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search concepts, algorithms, or patterns..."
              className="w-full pl-14 pr-6 py-4 bg-white border border-slate-200 rounded-3xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={exportProgress}
              className="px-5 py-4 bg-green-600 text-white rounded-3xl font-bold flex items-center gap-2 hover:bg-green-700 transition-all shadow-lg"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Export</span>
            </button>
            <label className="px-5 py-4 bg-blue-600 text-white rounded-3xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all cursor-pointer shadow-lg">
              <Upload size={18} />
              <span className="hidden sm:inline">Import</span>
              <input
                type="file"
                accept=".json"
                onChange={importProgress}
                className="hidden"
              />
            </label>
            <button
              onClick={resetProgress}
              className="px-5 py-4 bg-red-600 text-white rounded-3xl font-bold flex items-center gap-2 hover:bg-red-700 transition-all shadow-lg"
            >
              <RotateCcw size={18} />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter) => {
              const items = chapter.subtopics.concat(chapter.patterns);
              const done = items.filter((i) =>
                completedItems.has(`${chapter.title}-${i}`),
              ).length;
              const total = items.length;
              const pct = Math.round((done / total) * 100);

              return (
                <div
                  key={chapter.title}
                  className={`bg-white rounded-[2rem] border transition-all ${
                    expandedChapters[chapter.title]
                      ? "border-slate-300 shadow-xl"
                      : "border-slate-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => toggleChapter(chapter.title)}
                    className="w-full flex items-center justify-between p-6 md:p-7 hover:bg-slate-50/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-2xl ${
                          expandedChapters[chapter.title]
                            ? `bg-${roadmapData[activeLevel].color}-500 text-white`
                            : `bg-${roadmapData[activeLevel].color}-50 text-${roadmapData[activeLevel].color}-600`
                        }`}
                      >
                        <BookOpen size={26} />
                      </div>
                      <div>
                        <h4 className="text-xl font-extrabold text-slate-800">
                          {chapter.title}
                        </h4>
                        <div className="flex items-center gap-4 mt-1.5">
                          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 rounded-md text-[10px] font-bold text-slate-500">
                            <Layout size={12} /> {chapter.subtopics.length}{" "}
                            Topics
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 rounded-md text-[10px] font-bold text-blue-500">
                            <Target size={12} /> {chapter.patterns.length}{" "}
                            Patterns
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="hidden sm:flex flex-col items-end">
                        <div className="text-[10px] font-black text-slate-400 mb-1">
                          Progress
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-${roadmapData[activeLevel].color}-500 transition-all`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs font-black text-slate-600">
                            {pct}%
                          </span>
                        </div>
                      </div>
                      <div
                        className={`p-2 rounded-full bg-slate-50 transition-transform ${expandedChapters[chapter.title] ? "rotate-180" : ""}`}
                      >
                        <ChevronDown className="text-slate-400" size={20} />
                      </div>
                    </div>
                  </button>

                  {expandedChapters[chapter.title] && (
                    <div className="border-t border-slate-100 p-8 bg-slate-50/20">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-5">
                          <h5 className="text-[11px] font-black uppercase text-slate-400 flex items-center gap-2.5">
                            <Layout size={14} /> Core Concepts
                          </h5>
                          <div className="grid gap-2.5">
                            {chapter.subtopics.map((item) => {
                              const isDone = completedItems.has(
                                `${chapter.title}-${item}`,
                              );
                              return (
                                <div
                                  key={item}
                                  onClick={() =>
                                    toggleItem(`${chapter.title}-${item}`)
                                  }
                                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer group hover:translate-x-1 ${
                                    isDone
                                      ? "bg-green-50/50 border-green-200 shadow-sm"
                                      : "bg-white border-slate-100 hover:border-slate-300 hover:shadow-md"
                                  }`}
                                >
                                  {isDone ? (
                                    <div className="bg-green-500 rounded-full p-0.5">
                                      <CheckCircle2
                                        className="text-white"
                                        size={20}
                                      />
                                    </div>
                                  ) : (
                                    <Circle
                                      className="text-slate-200 group-hover:text-slate-400"
                                      size={24}
                                    />
                                  )}
                                  <span
                                    className={`text-sm font-semibold ${isDone ? "text-green-800" : "text-slate-600"}`}
                                  >
                                    {item}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="space-y-5">
                          <h5 className="text-[11px] font-black uppercase text-blue-500 flex items-center gap-2.5">
                            <Zap size={14} /> Problem Patterns
                          </h5>
                          <div className="grid gap-2.5">
                            {chapter.patterns.map((item) => {
                              const isDone = completedItems.has(
                                `${chapter.title}-${item}`,
                              );
                              return (
                                <div
                                  key={item}
                                  onClick={() =>
                                    toggleItem(`${chapter.title}-${item}`)
                                  }
                                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer group hover:translate-x-1 ${
                                    isDone
                                      ? "bg-blue-50 border-blue-200 shadow-sm"
                                      : "bg-white border-slate-200 border-dashed hover:border-blue-400 hover:border-solid hover:shadow-md"
                                  }`}
                                >
                                  <div
                                    className={`p-1.5 rounded-lg ${isDone ? "bg-blue-500 text-white" : "bg-slate-50 text-slate-300 group-hover:text-blue-400"}`}
                                  >
                                    <Target size={18} />
                                  </div>
                                  <span
                                    className={`text-sm font-bold ${isDone ? "text-blue-800" : "text-slate-700"}`}
                                  >
                                    {item}
                                  </span>
                                  {isDone && (
                                    <CheckCircle2
                                      className="ml-auto text-blue-500"
                                      size={16}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          <div className="mt-8 p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                            <h6 className="text-xs font-black uppercase text-blue-400 mb-2">
                              Practice Resources
                            </h6>
                            <p className="text-sm text-slate-300 mb-4">
                              Practice {chapter.title} with curated problem sets
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <a
                                href="https://leetcode.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-[10px] font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors border border-white/5"
                              >
                                <ExternalLink size={10} /> LeetCode
                              </a>
                              <a
                                href="https://www.geeksforgeeks.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-[10px] font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors border border-white/5"
                              >
                                <ExternalLink size={10} /> GFG
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-[2rem] border p-20 text-center">
              <div className="bg-slate-50 p-6 rounded-full mb-6 inline-block">
                <Search className="text-slate-300" size={48} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">
                No results found
              </h3>
              <p className="text-slate-500">Try searching for something else</p>
            </div>
          )}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-12 pb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-[2rem] text-white shadow-2xl">
            <h4 className="text-lg font-black mb-3">Ready for Interviews?</h4>
            <p className="text-sm text-slate-400 mb-6">
              Complete Level 2 & 3, then tackle Striver's SDE Sheet or Blind 75
            </p>
            <a
              href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm transition-all text-center"
            >
              View Problem Sets
            </a>
          </div>
        </div>
        <div className="text-center mt-10 text-sm text-slate-400">
          © 2026 Developed by{" "}
          <span className="font-semibold text-slate-600">Pritam Patil</span>
        </div>
      </div>
    </div>
  );
}

export default App;
