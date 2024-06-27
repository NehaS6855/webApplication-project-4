/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const localData = {
    status: "published",
    tasks: [
      {
        task_id: 18882,
        task_title: "Explore the world of management",
        task_description:
          "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        status: "notworkedyet",
        assets: [
          {
            asset_id: 18883,
            asset_title: "Technical Project Management",
            asset_description:
              "Description : Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
            asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
            display_asset: "display_asset",
            asset_content_type: "video",
          },
          {
            asset_id: 18884,
            asset_title: "Threadbuild",
            asset_description:
              "Description : Watch the video and threadbuild, and jot out key threads while watching the video.",
            asset_content: `
              <div class="threadbuild-container">
                <header>
                  <i class="fa-solid fa-chevron-up icon"></i>
                  <h3>Thread A</h3>
                </header>
                <div class="sub-thread-row">
                  <div class="sub-thread">
                    <input type="text" placeholder="Sub Thread 1">
                    <textarea placeholder="Enter Text Here"></textarea>
                  </div>
                  <div class="sub-thread">
                    <input type="text" placeholder="Sub Interpretation 1">
                    <textarea placeholder="Enter Text Here"></textarea>
                  </div>
                </div>
                <div class="icons-and-selects">
                  <div class="icons">
                    <i class="fa-regular fa-lightbulb"></i>
                    <i class="fa-regular fa-message"></i>
                    <i class="fa-regular fa-circle-question"></i>
                    <i class="fa-solid fa-spa"></i>
                  </div>
                  <div class="selects">
                    <select>
                      <option>Select Category</option>
                    </select>
                    <select>
                      <option>Select Process</option>
                    </select>
                  </div>
                </div>
                <button class="add-thread">+ Sub-thread</button>
                <div class="summary">
                  <input type="text" placeholder="Summary for Thread A">
                  <textarea placeholder="Enter Text Here"></textarea>
                </div>
              </div>`,
            display_asset: "display_asset",
            asset_content_type: "html",
          },
          {
            asset_id: 18885,
            asset_title: "Structure your Pointers",
            asset_description:
              "Description : Write a 400-500 word article from your thread. Publish your understanding and showcase your understanding to the entire world.",
            asset_content: `
              <div class="structure-container">
                <div class="input-group">
                  <label for="structure-title">Title:</label>
                  <input type="text" id="structure-title" placeholder="Enter title here">
                </div>
                <div class="input-group">
                  <label for="structure-content">Content:</label>
                  <div class="toolbar">
                    <button class="toolbar-btn"><i class="fa fa-file"></i> File</button>
                    <button class="toolbar-btn"><i class="fa fa-edit"></i> Edit</button>
                    <button class="toolbar-btn"><i class="fa fa-eye"></i> View</button>
                    <button class="toolbar-btn"><i class="fa fa-insert"></i> Insert</button>
                    <button class="toolbar-btn"><i class="fa fa-format"></i> Format</button>
                    <button class="toolbar-btn"><i class="fa fa-tools"></i> Tools</button>
                    <button class="toolbar-btn"><i class="fa fa-table"></i> Table</button>
                    <button class="toolbar-btn"><i class="fa fa-help"></i> Help</button>
                  </div>
                  <div class="toolbar1">
                    <i class="fa-solid fa-reply"></i>
                    <i class="fa-solid fa-share"></i>
                    <i class="fa-solid fa-maximize"></i>
                    <i class="fa-regular fa-image"></i>
                    <div class="select">
                      <select>
                        <option>Paragraph</option>
                      </select>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                  <textarea id="structure-content" placeholder="Enter content here"></textarea>
                </div>
                <button class="submit-structure">Submit</button>
              </div>`,
            display_asset: "display_asset",
            asset_content_type: "html",
          },
          {
            asset_id: 18886,
            asset_title: "4SA Method",
            asset_description: "Description : To Explore more read more",
            asset_content: `
              <div class="method-container">
                <div class="section">
                  <label for="method-introduction" class="collapsible">
                    <span>Introduction:</span>
                  </label>
                  <textarea id="method-introduction" class="content" placeholder="The 4SA Method, How to bring an idea into process?"></textarea>
                  <button class="see-more">See more</button>
                </div>
                <div class="section">
                  <label for="method-thread-a" class="collapsible">
                    <span>Thread A:</span>
                  </label>
                  <textarea id="method-thread-a" class="content" placeholder="How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?"></textarea>
                  <button class="see-more">See more</button>
                </div>
                <div class="section">
                  <label for="method-example-1" class="collapsible">
                    <span>Example 1:</span>
                  </label>
                  <textarea id="method-example-1" class="content" placeholder="You have a concept; how will you put it into process?"></textarea>
                </div>
              </div>`,
            display_asset: "display_asset",
            asset_content_type: "html",
          },
        ],
      },
    ],
  };

  function createAssetContainer(asset) {
    const assetContainer = document.createElement("div");
    assetContainer.className = "asset-container";

    const header = document.createElement("header");
    header.innerHTML = `<h3>${asset.asset_title}</h3><i class="fa-solid fa-circle-info icon"></i>`;

    const description = document.createElement("div");
    description.className = "description";
    description.style.display = "block";
    description.innerHTML = `<p>${asset.asset_description}</p>`;

    const content = document.createElement("div");
    content.className = "content";
    content.style.display = "block";

    if (asset.asset_content_type === "video") {
      content.innerHTML = `<iframe width="100%" height="200" src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>`;
    } else if (asset.asset_content_type === "text") {
      content.innerHTML = `<p>${asset.asset_content}</p>`;
    } else if (asset.asset_content_type === "html") {
      content.innerHTML = asset.asset_content;
    }

    assetContainer.appendChild(header);
    assetContainer.appendChild(description);
    assetContainer.appendChild(content);

    return assetContainer;
  }

  function renderTask(task) {
    const container = document.getElementById("assets-container");
    container.innerHTML = "";
    task.assets.forEach((asset) => {
      const assetElement = createAssetContainer(asset);
      container.appendChild(assetElement);
    });

    const infoIcons = document.querySelectorAll(".icon");
    infoIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        const description = this.parentElement.nextElementSibling;
        if (description.style.display === "block") {
          description.style.display = "none";
        } else {
          description.style.display = "block";
        }
      });
    });

    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((collapsible) => {
      collapsible.addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
      });
    });

    const seeMoreButtons = document.querySelectorAll(".see-more");
    seeMoreButtons.forEach((button) => {
      button.addEventListener("click", function () {
        alert("See more functionality is not implemented yet.");
      });
    });
  }

  function toggleSidebar(sidebar, expand) {
    if (expand) {
      sidebar.classList.add("expanded");
    } else {
      sidebar.classList.remove("expanded");
    }
  }

  document
    .querySelector(".toggle-arrow")
    .addEventListener("click", function () {
      const sidebarLeft = document.querySelector(".sidebar-left");
      const isExpanded = sidebarLeft.classList.contains("expanded");
      toggleSidebar(sidebarLeft, !isExpanded);
    });

  document
    .querySelector(".toggle-cross")
    .addEventListener("click", function () {
      const sidebarRight = document.querySelector(".sidebar-right");
      const isExpanded = sidebarRight.classList.contains("expanded");
      toggleSidebar(sidebarRight, !isExpanded);
    });

  renderTask(localData.tasks[0]);
});
