const { useState, useRef } = React;

// ─── CONFIG / ADMIN ────────────────────────────────────────────────
const ADMIN_PASSWORD = "bloodline-admin-2026"; // change this before deploying

// ─── INITIAL DATA ───────────────────────────────────────────────────
const INITIAL_TREES = [
  {
    "id": "t1",
    "name": "Josh Kariles",
    "status": "inactive",
    "children": [
      {
        "id": "t1-1",
        "name": "Brandon Bol",
        "status": "inactive",
        "children": [
          {
            "id": "t1-1-1",
            "name": "Julian Chien",
            "status": "inactive",
            "children": [
              {
                "id": "t1-1-1-1",
                "name": "Shloak",
                "status": "inactive",
                "children": [
                  {
                    "id": "t1-1-1-1-1",
                    "name": "Dev Ahluwalia",
                    "status": "inactive",
                    "children": [
                      {
                        "id": "t1-1-1-1-1-1",
                        "name": "Yoosung Jung",
                        "status": "active",
                        "children": [
                          {
                            "id": "node-1000",
                            "name": "Ethan Cristall",
                            "status": "active",
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "t1-1-1-1-1-2",
                        "name": "Simon Cha",
                        "status": "inactive",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "id": "t1-1-1-2",
                "name": "Adarsh Venkat",
                "status": "inactive",
                "children": [
                  {
                    "id": "t1-1-1-2-1",
                    "name": "Neev Mandot",
                    "status": "inactive",
                    "children": [
                      {
                        "id": "n1",
                        "name": "Wonsang Chang",
                        "status": "inactive",
                        "children": []
                      },
                      {
                        "id": "n2",
                        "name": "Mihail",
                        "status": "bloodline-head",
                        "children": [
                          {
                            "id": "node-1002",
                            "name": "Nizar Farsakh",
                            "status": "active",
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "n3",
                        "name": "Henry Conlin",
                        "status": "active",
                        "children": [
                          {
                            "id": "node-2a4601fe-be81-42ab-a1d4-0ea76ed4e019",
                            "name": "Logan Crusick",
                            "status": "active",
                            "children": []
                          },
                          {
                            "id": "node-506cf965-9054-4b20-befa-ac5ea99ea0c5",
                            "name": "Nicholas Rybickie",
                            "status": "active",
                            "children": [
                              {
                                "id": "node-24d2e402-2f2f-41b4-ad72-d2a159196807",
                                "name": "???",
                                "status": "pledge",
                                "children": []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "t1-1-1-3",
                "name": "Avi Libman",
                "status": "inactive",
                "children": []
              },
              {
                "id": "t1-1-1-4",
                "name": "Dustin Vu",
                "status": "inactive",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "t1-2",
        "name": "Rodrigo",
        "status": "inactive",
        "children": [
          {
            "id": "t1-2-1",
            "name": "Josh Lee",
            "status": "inactive",
            "children": [
              {
                "id": "t1-2-1-1",
                "name": "William Skaug",
                "status": "inactive",
                "children": []
              }
            ]
          },
          {
            "id": "t1-2-2",
            "name": "Pedro Sanson",
            "status": "inactive",
            "children": [
              {
                "id": "t1-2-2-1",
                "name": "Rajit Agarwal",
                "status": "inactive",
                "children": [
                  {
                    "id": "t1-2-2-1-1",
                    "name": "Arya Bastani",
                    "status": "inactive",
                    "children": [
                      {
                        "id": "t1-2-2-1-1-1",
                        "name": "Shaya Amir",
                        "status": "inactive",
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "t2",
    "name": "Andy Arnold",
    "status": "inactive",
    "children": [
      {
        "id": "t2-1",
        "name": "Neziah Nez",
        "status": "inactive",
        "children": [
          {
            "id": "t2-1-1",
            "name": "Nick Spadone",
            "status": "inactive",
            "children": [
              {
                "id": "t2-1-1-1",
                "name": "Armaan Ismail",
                "status": "inactive",
                "children": []
              },
              {
                "id": "t2-1-1-2",
                "name": "Cameron Kalantar",
                "status": "inactive",
                "children": [
                  {
                    "id": "node-6496eea5-11a0-427b-a982-2e7c4329729f",
                    "name": "James Dominguez",
                    "status": "inactive",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": "t2-1-2",
            "name": "Colin Snyder",
            "status": "inactive",
            "children": [
              {
                "id": "t2-1-2-1",
                "name": "Jason Lee",
                "status": "inactive",
                "children": [
                  {
                    "id": "t2-1-2-1-1",
                    "name": "Leo Hong Johnson",
                    "status": "active",
                    "children": [
                      {
                        "id": "node-b835ef3a-1f21-4ac4-94b4-59b8379fcb18",
                        "name": "Lucas Namikawa",
                        "status": "active",
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "t2-2",
        "name": "Jack Simpson",
        "status": "inactive",
        "children": [
          {
            "id": "t2-2-1",
            "name": "Keaton Elvins",
            "status": "inactive",
            "children": [
              {
                "id": "t2-2-1-1",
                "name": "Varun Shah",
                "status": "inactive",
                "children": [
                  {
                    "id": "t2-2-1-1-1",
                    "name": "Elias Rabine",
                    "status": "active",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "t3",
    "name": "Chad Clay",
    "status": "inactive",
    "children": [
      {
        "id": "t3-1",
        "name": "Julian Faust",
        "status": "inactive",
        "children": [
          {
            "id": "t3-1-1",
            "name": "Desi",
            "status": "inactive",
            "children": [
              {
                "id": "t3-1-1-1",
                "name": "Dylan Aguinaldo",
                "status": "inactive",
                "children": [
                  {
                    "id": "t3-1-1-1-1",
                    "name": "Jaxon Kaeller",
                    "status": "active",
                    "children": [
                      {
                        "id": "t3-1-1-1-1-1",
                        "name": "Simon Karroum",
                        "status": "active",
                        "children": []
                      },
                      {
                        "id": "node-4ae681cf-dbf8-484e-85f0-b521b0871c32",
                        "name": "Paulo Trento",
                        "status": "active",
                        "children": [
                          {
                            "id": "node-4691aac4-5508-402b-af3e-b26607f1cee8",
                            "name": "???",
                            "status": "pledge",
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "t3-2",
        "name": "Aadit Joshi",
        "status": "inactive",
        "children": [
          {
            "id": "t3-2-1",
            "name": "Nithish Rajan",
            "status": "inactive",
            "children": [
              {
                "id": "t3-2-1-1",
                "name": "Rishab Bhatia",
                "status": "active",
                "children": [
                  {
                    "id": "t3-2-1-1-1",
                    "name": "Neil Deshpande",
                    "status": "active",
                    "children": [
                      {
                        "id": "t3-2-1-1-1-1",
                        "name": "Kurtis Bauman",
                        "status": "active",
                        "children": [
                          {
                            "id": "node-1ae7c681-d264-44cb-aeed-b4817e8836a5",
                            "name": "Jerry Liu",
                            "status": "active",
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "t3-2-1-1-1-2",
                        "name": "Adi Khandewal",
                        "status": "active",
                        "children": []
                      },
                      {
                        "id": "node-5665cde5-fff3-4401-af84-93e054b35546",
                        "name": "???",
                        "status": "pledge",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "id": "t3-2-1-2",
                "name": "Alejandro Macias",
                "status": "active",
                "children": [
                  {
                    "id": "node-44742b3b-5800-43bf-a97f-d2fb8f07c3f8",
                    "name": "Max Mueller",
                    "status": "active",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": "t3-2-2",
            "name": "Yahir Serrano",
            "status": "inactive",
            "children": []
          }
        ]
      },
      {
        "id": "t3-3",
        "name": "Andrew Burns",
        "status": "inactive",
        "children": [
          {
            "id": "t3-3-1",
            "name": "Shawn H",
            "status": "inactive",
            "children": [
              {
                "id": "t3-3-1-1",
                "name": "Yash Hande",
                "status": "inactive",
                "children": [
                  {
                    "id": "t3-3-1-1-1",
                    "name": "Nikhil Rajgopal",
                    "status": "active",
                    "children": []
                  },
                  {
                    "id": "t3-3-1-1-2",
                    "name": "Manav Gandhi",
                    "status": "bloodline-head",
                    "children": [
                      {
                        "id": "t3-3-1-1-2-1",
                        "name": "Jayden Burton",
                        "status": "active",
                        "children": []
                      }
                    ]
                  },
                  {
                    "id": "t3-3-1-1-3",
                    "name": "Tyson Gan",
                    "status": "inactive",
                    "children": []
                  }
                ]
              },
              {
                "id": "t3-3-1-2",
                "name": "Conor",
                "status": "inactive",
                "children": [
                  {
                    "id": "t3-3-1-2-1",
                    "name": "Sean Chung",
                    "status": "inactive",
                    "children": []
                  },
                  {
                    "id": "t3-3-1-2-2",
                    "name": "Cade Flores",
                    "status": "inactive",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "t4",
    "name": "Calvin Grewal",
    "status": "inactive",
    "children": [
      {
        "id": "t4-1",
        "name": "Peter Choi",
        "status": "inactive",
        "children": [
          {
            "id": "t4-1-1",
            "name": "Matthew Ho",
            "status": "inactive",
            "children": [
              {
                "id": "t4-1-1-1",
                "name": "Zachary Gee",
                "status": "active",
                "children": []
              }
            ]
          },
          {
            "id": "t4-1-2",
            "name": "Hamzah Bashir",
            "status": "bloodline-head",
            "children": [
              {
                "id": "t4-1-2-1",
                "name": "Nico Monreal",
                "status": "active",
                "children": [
                  {
                    "id": "node-1bba8398-ca9f-4809-9e5c-280ca59fef2b",
                    "name": "Axel Juarez",
                    "status": "active",
                    "children": []
                  }
                ]
              },
              {
                "id": "node-01e52d98-b563-48fc-a4ae-e435f6b90f94",
                "name": "Nikhil Parikh",
                "status": "active",
                "children": []
              }
            ]
          },
          {
            "id": "t4-1-3",
            "name": "Joseph Park",
            "status": "active",
            "children": [
              {
                "id": "t4-1-3-1",
                "name": "Matthew Pham",
                "status": "active",
                "children": [
                  {
                    "id": "node-2c897c36-8726-4102-b57b-e67c1af94cd6",
                    "name": "???",
                    "status": "pledge",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": "t4-1-4",
            "name": "Isaac Kong",
            "status": "active",
            "children": []
          }
        ]
      },
      {
        "id": "t4-2",
        "name": "Saar Maheshwari",
        "status": "inactive",
        "children": [
          {
            "id": "t4-2-1",
            "name": "Yash Fatehpuria",
            "status": "inactive",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": "t5",
    "name": "Hank",
    "status": "inactive",
    "children": [
      {
        "id": "t5-1",
        "name": "Jake Weppner",
        "status": "inactive",
        "children": [
          {
            "id": "t5-1-1",
            "name": "Louis",
            "status": "inactive",
            "children": [
              {
                "id": "t5-1-1-1",
                "name": "Dillon Leung",
                "status": "inactive",
                "children": [
                  {
                    "id": "t5-1-1-1-1",
                    "name": "Bond Chaiprasit",
                    "status": "inactive",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": "t5-1-2",
            "name": "James Park",
            "status": "inactive",
            "children": [
              {
                "id": "t5-1-2-1",
                "name": "Adriel Lee",
                "status": "inactive",
                "children": [
                  {
                    "id": "t5-1-2-1-1",
                    "name": "Eric Wang",
                    "status": "inactive",
                    "children": [
                      {
                        "id": "t5-1-2-1-1-1",
                        "name": "Ethan Chung",
                        "status": "active",
                        "children": []
                      },
                      {
                        "id": "t5-1-2-1-1-2",
                        "name": "Adolfo Vargas",
                        "status": "active",
                        "children": []
                      },
                      {
                        "id": "t5-1-2-1-1-3",
                        "name": "Fabio Oh",
                        "status": "active",
                        "children": [
                          {
                            "id": "t5-1-2-1-1-3-1",
                            "name": "Brendan Zelnis",
                            "status": "active",
                            "children": []
                          },
                          {
                            "id": "t5-1-2-1-1-3-2",
                            "name": "Andrew Marks",
                            "status": "active",
                            "children": []
                          },
                          {
                            "id": "node-86d2643a-bf63-461e-b5ce-2abee9e94747",
                            "name": "Aaron Kun",
                            "status": "active",
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "t5-1-2-1-2",
                    "name": "Conor Devlin",
                    "status": "inactive",
                    "children": [
                      {
                        "id": "t5-1-2-1-2-1",
                        "name": "Kaden Pinkstaff",
                        "status": "active",
                        "children": []
                      }
                    ]
                  },
                  {
                    "id": "t5-1-2-1-3",
                    "name": "Sebastian Vance",
                    "status": "inactive",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "t5-2",
        "name": "Nick Park",
        "status": "inactive",
        "children": [
          {
            "id": "t5-2-1",
            "name": "Ankur Singh",
            "status": "inactive",
            "children": [
              {
                "id": "t5-2-1-1",
                "name": "Ayukt Chaudry",
                "status": "inactive",
                "children": [
                  {
                    "id": "t5-2-1-1-1",
                    "name": "Amin Shah",
                    "status": "inactive",
                    "children": [
                      {
                        "id": "t5-2-1-1-1-2",
                        "name": "Ryan Kim",
                        "status": "active",
                        "children": [
                          {
                            "id": "node-46eefd40-825c-4972-bb8e-fedc9899a2e3",
                            "name": "Russell Wang",
                            "status": "active",
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "node-6a4e6f5d-704b-4c6b-a9bd-503d9bbd010a",
                        "name": "Emmanuel Smirnakis",
                        "status": "active",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "id": "t5-2-1-2",
                "name": "Rob Mitu",
                "status": "inactive",
                "children": [
                  {
                    "id": "t5-2-1-2-1",
                    "name": "Nikhil Kulkrani",
                    "status": "active",
                    "children": [
                      {
                        "id": "t5-2-1-2-1-1",
                        "name": "Luke Joseph",
                        "status": "active",
                        "children": []
                      },
                      {
                        "id": "node-4100d291-6dec-4af7-9b2f-30bd5f26c8a7",
                        "name": "Siddharth Sharma",
                        "status": "active",
                        "children": []
                      }
                    ]
                  },
                  {
                    "id": "t5-2-1-2-2",
                    "name": "Paul Clark",
                    "status": "inactive",
                    "children": [
                      {
                        "id": "t5-2-1-2-2-1",
                        "name": "Henry Ganzorig",
                        "status": "inactive",
                        "children": [
                          {
                            "id": "t5-2-1-2-2-1-1",
                            "name": "Chinguun Batnyam",
                            "status": "active",
                            "children": [
                              {
                                "id": "node-29e9211d-cda3-488f-9eeb-5b5b014dd08e",
                                "name": "???",
                                "status": "pledge",
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "t5-2-1-2-2-1-2",
                            "name": "Nolyn Wong",
                            "status": "active",
                            "children": [
                              {
                                "id": "node-d2b2cf01-8e6e-4363-9e3d-63d0fd285775",
                                "name": "???",
                                "status": "pledge",
                                "children": []
                              }
                            ]
                          },
                          {
                            "id": "node-b7b36488-9a6d-47d6-bb21-a9b915739264",
                            "name": "Seth Herron",
                            "status": "active",
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": "t5-2-1-2-2-2",
                        "name": "Parker Gravel",
                        "status": "active",
                        "children": [
                          {
                            "id": "t5-2-1-2-2-2-1",
                            "name": "Isadore Diamond",
                            "status": "active",
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// ─── CONSTANTS ──────────────────────────────────────────────────────
const NODE_W = 116;
const NODE_H = 30;
const H_GAP = 14;
const V_GAP = 52;

const STATUS_COLORS = {
  inactive:        { fill: "#c8c8c8", stroke: "#999", text: "#333" },
  "bloodline-head":{ fill: "#5b93c9", stroke: "#3d6fa3", text: "#fff" },
  active:          { fill: "#a4bfdf", stroke: "#7199c2", text: "#1a2a3a" },
  pledge:          { fill: "#e8a8c0", stroke: "#c87a9a", text: "#3a1a2a" },
};

const STATUS_LABELS = {
  inactive: "Inactive/Alumni",
  "bloodline-head": "Bloodline Head",
  active: "Active",
  pledge: "Pledge",
};

// ─── HELPERS ────────────────────────────────────────────────────────
let _idCounter = 1000;
const genId = () => {
  // Avoid collisions across reloads (critical once exported data contains node-#### ids)
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `node-${crypto.randomUUID()}`;
  }
  const rand = Math.random().toString(36).slice(2, 10);
  const ts = Date.now().toString(36);
  return `node-${ts}-${rand}-${_idCounter++}`;
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

function findNode(trees, id) {
  for (const t of trees) {
    if (t.id === id) return { node: t, parent: null, treeRoot: t };
    const r = _find(t, id, null, t);
    if (r) return r;
  }
  return null;
}

function _find(node, id, parent, treeRoot) {
  for (const c of node.children || []) {
    if (c.id === id) return { node: c, parent: node, treeRoot };
    const r = _find(c, id, node, treeRoot);
    if (r) return r;
  }
  return null;
}

// ─── LAYOUT ─────────────────────────────────────────────────────────
function computeWidth(node) {
  if (!node.children || node.children.length === 0) {
    node._w = NODE_W;
    return NODE_W;
  }
  let total = 0;
  for (const c of node.children) total += computeWidth(c);
  total += (node.children.length - 1) * H_GAP;
  node._w = Math.max(NODE_W, total);
  return node._w;
}

function assignPos(node, x, y) {
  node._y = y;
  if (!node.children || node.children.length === 0) {
    node._x = x + node._w / 2;
    return;
  }
  let cx = x;
  for (const c of node.children) {
    assignPos(c, cx, y + V_GAP + NODE_H);
    cx += c._w + H_GAP;
  }
  node._x = (node.children[0]._x + node.children[node.children.length - 1]._x) / 2;
}

function layoutTree(root) {
  computeWidth(root);
  assignPos(root, 0, 0);
}

function collectNodes(node, arr) {
  arr.push(node);
  for (const c of node.children || []) collectNodes(c, arr);
  return arr;
}

function collectLinks(node, arr) {
  for (const c of node.children || []) {
    arr.push({ from: node, to: c });
    collectLinks(c, arr);
  }
  return arr;
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────
function BloodlineEditor() {
  const [trees, setTrees] = useState(() => {
    try {
      const saved = window.localStorage.getItem("bloodline_trees");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return deepClone(INITIAL_TREES);
  });
  const [selected, setSelected] = useState(null);
  const [editingName, setEditingName] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [zoom, setZoom] = useState(0.85);
  const [toast, setToast] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminInput, setAdminInput] = useState("");
  const [adminError, setAdminError] = useState(null);
  const svgRef = useRef(null);
  const inputRef = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // Layout all trees into rows
  const laid = deepClone(trees);
  laid.forEach(t => layoutTree(t));

  const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  // 2 trees per row (matches the old 2/2/1 behavior but works for any count)
  const rows = chunk(laid, 2);

  let allNodes = [];
  let allLinks = [];
  let globalOffsetY = 24;
  const TREE_GAP_X = 70;
  const TREE_GAP_Y = 55;

  for (const row of rows) {
    let globalOffsetX = 24;
    let maxH = 0;
    for (const t of row) {
      if (!t) continue;
      const tNodes = collectNodes(t, []);
      const tLinks = collectLinks(t, []);
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (const n of tNodes) {
        minX = Math.min(minX, n._x - NODE_W / 2);
        maxX = Math.max(maxX, n._x + NODE_W / 2);
        minY = Math.min(minY, n._y);
        maxY = Math.max(maxY, n._y + NODE_H);
      }
      for (const n of tNodes) {
        n._rx = n._x - minX + globalOffsetX;
        n._ry = n._y - minY + globalOffsetY;
      }
      allNodes.push(...tNodes);
      allLinks.push(...tLinks);
      globalOffsetX += (maxX - minX) + TREE_GAP_X;
      maxH = Math.max(maxH, maxY - minY);
    }
    globalOffsetY += maxH + TREE_GAP_Y;
  }

  let svgW = 0, svgH = 0;
  for (const n of allNodes) {
    svgW = Math.max(svgW, n._rx + NODE_W / 2 + 40);
    svgH = Math.max(svgH, n._ry + NODE_H + 40);
  }
  if (allNodes.length === 0) {
    svgW = 800;
    svgH = 500;
  }

  // ─── ACTIONS ────────────────────────────────────────────────
  const updateTrees = (fn) => {
    setTrees(prev => {
      const next = deepClone(prev);
      fn(next);
      try {
        window.localStorage.setItem("bloodline_trees", JSON.stringify(next));
      } catch (e) {
        // ignore storage errors
      }
      return next;
    });
  };

  const handleNodeClick = (id) => {
    if (editingName) return;
    setSelected(prev => (prev === id ? null : id));
  };

  const handleDoubleClick = (id, currentName) => {
    if (!isAdmin) return;
    setEditingName(id);
    setNameInput(currentName);
    setSelected(id);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const commitName = () => {
    if (!editingName || !nameInput.trim()) {
      setEditingName(null);
      return;
    }
    const id = editingName;
    const val = nameInput.trim();
    updateTrees(t => {
      const r = findNode(t, id);
      if (r) r.node.name = val;
    });
    setEditingName(null);
  };

  const changeStatus = (status) => {
    if (!isAdmin) return;
    if (!selected) return;
    updateTrees(t => {
      const r = findNode(t, selected);
      if (r) r.node.status = status;
    });
    showToast(`Changed to ${STATUS_LABELS[status]}`);
  };

  const addChild = () => {
    if (!isAdmin) return;
    if (!selected) return;
    const newId = genId();
    updateTrees(t => {
      const r = findNode(t, selected);
      if (r) r.node.children.push({ id: newId, name: "New Member", status: "active", children: [] });
    });
    setSelected(newId);
    setEditingName(newId);
    setNameInput("New Member");
    showToast("Added child — type to rename");
  };

  const deleteNode = () => {
    if (!isAdmin) return;
    if (!selected) return;
    updateTrees(t => {
      const r = findNode(t, selected);
      if (!r) return;
      if (!r.parent) {
        const idx = t.findIndex(x => x.id === selected);
        if (idx >= 0) t.splice(idx, 1);
      } else {
        r.parent.children = r.parent.children.filter(c => c.id !== selected);
      }
    });
    setSelected(null);
    showToast("Removed member");
  };

  const addNewTree = () => {
    if (!isAdmin) return;
    const newId = genId();
    updateTrees(t => {
      t.push({ id: newId, name: "New Bloodline", status: "bloodline-head", children: [] });
    });
    setSelected(newId);
    setEditingName(newId);
    setNameInput("New Bloodline");
    showToast("Added new bloodline");
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(trees, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bloodline_tree.json";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Exported JSON");
  };

  const copyAsCode = () => {
    if (!isAdmin) return;
    const code = `const INITIAL_TREES = ${JSON.stringify(trees, null, 2)};`;
    navigator.clipboard.writeText(code).then(() => {
      showToast("Copied code to clipboard — ready to paste!");
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showToast("Copied code to clipboard — ready to paste!");
    });
  };

  const selectedInfo = selected ? findNode(trees, selected) : null;

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", background: "#eaedf1", fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif" }}>
      {/* ─── TOOLBAR ─── */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8, padding: "10px 16px",
        background: "#fff", borderBottom: "1px solid #d0d4da",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)", flexWrap: "wrap", zIndex: 20
      }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: "#2a3040", marginRight: 8, letterSpacing: -0.3 }}>
          Bloodline Tree Editor
        </span>
        <div style={{ width: 1, height: 22, background: "#d0d4da", margin: "0 4px" }} />

        {/* Zoom */}
        <ToolBtn onClick={() => setZoom(z => Math.max(0.3, z - 0.1))} label="−" />
        <span style={{ fontSize: 12, color: "#666", minWidth: 36, textAlign: "center" }}>{Math.round(zoom * 100)}%</span>
        <ToolBtn onClick={() => setZoom(z => Math.min(2, z + 0.1))} label="+" />
        <ToolBtn onClick={() => setZoom(0.85)} label="Reset" wide />

        <div style={{ width: 1, height: 22, background: "#d0d4da", margin: "0 4px" }} />

        {/* Node actions (admin only) */}
        <ToolBtn onClick={addChild} label="+ Add Little" wide disabled={!selected || !isAdmin} accent />
        <ToolBtn onClick={deleteNode} label="Delete" wide disabled={!selected || !isAdmin} danger />
        <ToolBtn onClick={addNewTree} label="+ New Bloodline" wide disabled={!isAdmin} />

        <div style={{ flex: 1 }} />

        {/* Status pills */}
        {selected && (
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#888", marginRight: 2 }}>Status:</span>
            {Object.entries(STATUS_COLORS).map(([key, c]) => (
              <button key={key} onClick={() => changeStatus(key)} style={{
                padding: "3px 10px", fontSize: 11, borderRadius: 12,
                border: selectedInfo?.node?.status === key ? `2px solid ${c.stroke}` : "1px solid #ccc",
                background: c.fill, color: c.text, cursor: "pointer",
                fontWeight: selectedInfo?.node?.status === key ? 700 : 400,
                transition: "all 0.15s"
              }}>
                {STATUS_LABELS[key]}
              </button>
            ))}
          </div>
        )}

        <div style={{ width: 1, height: 22, background: "#d0d4da", margin: "0 4px" }} />
        {isAdmin && <ToolBtn onClick={copyAsCode} label="Copy as Code" wide accent />}
        <ToolBtn onClick={exportJSON} label="Export JSON" wide />

        {/* Admin login area */}
        <div style={{ width: 1, height: 22, background: "#d0d4da", margin: "0 4px" }} />
        {isAdmin ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600 }}>Admin mode</span>
            <ToolBtn
              onClick={() => { setIsAdmin(false); setAdminInput(""); setAdminError(null); }}
              label="Exit Admin"
            />
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11 }}>
            <span style={{ color: "#888" }}>Admin password:</span>
            <input
              type="password"
              value={adminInput}
              onChange={e => { setAdminInput(e.target.value); setAdminError(null); }}
              style={{
                borderRadius: 4,
                border: "1px solid #d0d4da",
                padding: "4px 6px",
                fontSize: 11,
                minWidth: 120
              }}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  if (adminInput === ADMIN_PASSWORD) {
                    setIsAdmin(true);
                    setAdminError(null);
                    setToast("Admin mode enabled");
                  } else {
                    setAdminError("Incorrect password");
                  }
                }
              }}
            />
            <ToolBtn
              onClick={() => {
                if (adminInput === ADMIN_PASSWORD) {
                  setIsAdmin(true);
                  setAdminError(null);
                  setToast("Admin mode enabled");
                } else {
                  setAdminError("Incorrect password");
                }
              }}
              label="Login"
              wide
            />
            {adminError && (
              <span style={{ color: "#b91c1c", fontSize: 10 }}>
                {adminError}
              </span>
            )}
          </div>
        )}
      </div>

      {/* ─── HINT BAR ─── */}
      <div style={{ padding: "5px 16px", background: "#f5f6f8", borderBottom: "1px solid #e0e2e6", fontSize: 11, color: "#888" }}>
        Click a node to select &middot; {isAdmin ? "Double-click to rename &middot; Use toolbar to add littles, change status, or delete" : "Read-only mode &mdash; log in as admin to edit"}
      </div>

      {/* ─── CANVAS ─── */}
      <div style={{ flex: 1, overflow: "auto", position: "relative" }}>
        <svg
          ref={svgRef}
          width={svgW * zoom}
          height={svgH * zoom}
          viewBox={`0 0 ${svgW} ${svgH}`}
          style={{ display: "block", cursor: "default" }}
          onClick={(e) => { if (e.target === svgRef.current) { setSelected(null); } }}
        >
          {/* Links */}
          {allLinks.map((l, i) => {
            const x1 = l.from._rx;
            const y1 = l.from._ry + NODE_H;
            const x2 = l.to._rx;
            const y2 = l.to._ry;
            const midY = (y1 + y2) / 2;
            return (
              <path key={i} d={`M${x1},${y1} L${x1},${midY} L${x2},${midY} L${x2},${y2}`}
                fill="none" stroke="#9ca3af" strokeWidth={1.2}
              />
            );
          })}

          {/* Nodes */}
          {allNodes.map(n => {
            const c = STATUS_COLORS[n.status] || STATUS_COLORS.inactive;
            const textLen = n.name.length;
            const w = Math.max(NODE_W, textLen * 7.2 + 18);
            const isSelected = selected === n.id;
            const isEditing = editingName === n.id;

            return (
              <g key={n.id}
                onClick={(e) => { e.stopPropagation(); handleNodeClick(n.id); }}
                onDoubleClick={(e) => { e.stopPropagation(); handleDoubleClick(n.id, n.name); }}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x={n._rx - w / 2} y={n._ry}
                  width={w} height={NODE_H}
                  rx={5} ry={5}
                  fill={c.fill} stroke={isSelected ? "#2563eb" : c.stroke}
                  strokeWidth={isSelected ? 2.5 : 1.5}
                  style={{ transition: "stroke 0.15s, stroke-width 0.15s" }}
                />
                {!isEditing && (
                  <text
                    x={n._rx} y={n._ry + NODE_H / 2}
                    textAnchor="middle" dominantBaseline="central"
                    fontSize={11.5} fontFamily="'Segoe UI', sans-serif"
                    fill={c.text} fontWeight={n.status === "bloodline-head" ? 600 : 400}
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {n.name}
                  </text>
                )}
                {isEditing && (
                  <foreignObject x={n._rx - w / 2 + 2} y={n._ry + 2} width={w - 4} height={NODE_H - 4}>
                    <input
                      ref={inputRef}
                      value={nameInput}
                      onChange={e => setNameInput(e.target.value)}
                      onBlur={commitName}
                      onKeyDown={e => { if (e.key === "Enter") commitName(); if (e.key === "Escape") setEditingName(null); }}
                      style={{
                        width: "100%", height: "100%", border: "none", outline: "none",
                        background: "white", borderRadius: 3, textAlign: "center",
                        fontSize: 11.5, fontFamily: "'Segoe UI', sans-serif", padding: 0
                      }}
                    />
                  </foreignObject>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* ─── LEGEND ─── */}
      <div style={{
        position: "fixed", bottom: 12, right: 12, background: "#fff",
        padding: "10px 14px", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontSize: 12, zIndex: 20
      }}>
        {Object.entries(STATUS_COLORS).map(([key, c]) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 3 }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, background: c.fill, border: `1px solid ${c.stroke}` }} />
            <span style={{ color: "#555" }}>{STATUS_LABELS[key]}</span>
          </div>
        ))}
      </div>

      {/* ─── TOAST ─── */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)",
          background: "#1e293b", color: "#fff", padding: "8px 20px", borderRadius: 8,
          fontSize: 13, boxShadow: "0 4px 12px rgba(0,0,0,0.2)", zIndex: 100,
          animation: "fadeIn 0.2s ease"
        }}>
          {toast}
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-50%) translateY(8px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
      `}</style>
    </div>
  );
}

function ToolBtn({ onClick, label, wide, disabled, accent, danger }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: wide ? "5px 12px" : "5px 8px",
        fontSize: 12, borderRadius: 6, cursor: disabled ? "default" : "pointer",
        border: `1px solid ${danger ? "#e5a0a0" : accent ? "#93b5e0" : "#d0d4da"}`,
        background: disabled ? "#f0f0f0" : danger ? "#fde8e8" : accent ? "#e8f0fb" : "#fff",
        color: disabled ? "#aaa" : danger ? "#b91c1c" : accent ? "#1d4ed8" : "#333",
        fontWeight: 500, transition: "all 0.15s", whiteSpace: "nowrap"
      }}
    >
      {label}
    </button>
  );
}

// Mount the app when loaded via a plain script tag
const rootElement = document.getElementById("root");
if (rootElement && ReactDOM.createRoot) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<BloodlineEditor />);
}

