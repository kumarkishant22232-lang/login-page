// =====================================================
// TEAM SPIRIT
// AUTHENTICATION + RECRUITMENT SYSTEM
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("TEAM SPIRIT JS LOADED ✓");


    // =================================================
    // BOOT LOG
    // =================================================

    const bootLines = [
        "> Initializing Team Spirit OS...",
        "> Loading recruitment modules...",
        "> Checking team network...",
        "> Establishing secure connection...",
        "> System online. ✓"
    ];


    // =================================================
    // LOADING LOG
    // =================================================

    const loadingLines = [
        "> Opening Team Spirit workspace...",
        "> Synchronizing team modules...",
        "> Loading mission protocol...",
        "> Preparing connection channels...",
        "> Workspace ready. ✓"
    ];


    // =================================================
    // TEAM SPIRIT MODULES
    // =================================================

    const sections = {

        intro: {
            code: "// MODULE 01",
            title: "TEAM SPIRIT",

            html: `
                <div class="hero-grid">

                    <div class="card">
                        <p class="quote">
                            A group of techies who came together
                            under a single team—
                            <span>
                                not to learn, but to rule and break
                                the limits.
                            </span>
                        </p>
                    </div>

                    <div class="card">
                        <h3>What does the name represent?</h3>
                        <p>
                            Breaking our own limits to achieve
                            more than we ever expected.
                        </p>
                    </div>

                    <div class="card">
                        <h3>What are we trying to achieve?</h3>
                        <p>
                            Our goals remain simple:
                            to learn together,
                            to grow together,
                            and to work together.
                        </p>
                    </div>

                    <div class="card">
                        <h3>THE IDEA</h3>
                        <p>
                            We're building the team before the
                            hackathon so every member becomes
                            capable of contributing when the
                            time comes.
                        </p>
                    </div>

                </div>
            `
        },


        // =================================================
        // MISSION
        // =================================================

        mission: {
            code: "// MODULE 02",
            title: "MISSION",

            html: `
                <div class="card">

                    <p class="quote">
                        We don't join hackathons just to
                        participate.

                        <br>

                        <span>
                            We learn first, practice second,
                            master our craft, and compete last.
                        </span>
                    </p>

                </div>

                <div class="card" style="margin-top:16px">

                    <h3>OUR ORDER</h3>

                    <div class="module-list">

                        <div class="module-card">
                            <b>01 — LEARN</b>
                            <p>Understand what it takes.</p>
                        </div>

                        <div class="module-card">
                            <b>02 — PRACTICE</b>
                            <p>Turn knowledge into ability.</p>
                        </div>

                        <div class="module-card">
                            <b>03 — MASTER</b>
                            <p>Develop your strongest craft.</p>
                        </div>

                        <div class="module-card">
                            <b>04 — COMPETE</b>
                            <p>Bring everything together.</p>
                        </div>

                    </div>

                </div>
            `
        },


        // =================================================
        // TEAM
        // =================================================

        team: {
            code: "// MODULE 03",
            title: "TEAM",

            html: `
                <div class="card">

                    <p class="quote">
                        Success is incomplete without the
                        <span>right mates.</span>
                    </p>

                </div>

                <div class="role-grid">

                    <div class="role">
                        <b>Team Strategist</b>
                        <span>Direction & Coordination</span>
                    </div>

                    <div class="role">
                        <b>Experience Architect</b>
                        <span>Interface & Experience</span>
                    </div>

                    <div class="role">
                        <b>Systems Architect</b>
                        <span>Backend & Infrastructure</span>
                    </div>

                    <div class="role">
                        <b>Intelligence & Research Lead</b>
                        <span>Research & Insights</span>
                    </div>

                    <div class="role">
                        <b>Product Storyteller</b>
                        <span>Pitch & Communication</span>
                    </div>

                    <div class="role">
                        <b>Resource & Operations Lead</b>
                        <span>Resources & Operations</span>
                    </div>

                    <div class="role">
                        <b>Innovation & Solution Architect</b>
                        <span>Ideas & Solutions</span>
                    </div>

                </div>

                <div class="card" style="margin-top:16px">

                    <p>
                        These are primary strengths,
                        not rigid boxes. Every member learns
                        across all seven areas.
                    </p>

                </div>
            `
        },


        // =================================================
        // LEARN
        // =================================================

        learn: {
            code: "// MODULE 04",
            title: "LEARN",

            html: `
                <div class="module-list">

                    <div class="module-card">
                        <b>1. Learn Everything</b>
                        <p>
                            Everyone should understand the basics
                            needed in a hackathon—not just their
                            assigned role.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>2. Train Together</b>
                        <p>
                            We'll conduct activities, exercises,
                            and small challenges where members
                            actually practice.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>3. Practice Through Doing</b>
                        <p>
                            Members will work on small tasks
                            and projects to develop practical
                            ability.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>4. Grow Into Your Role</b>
                        <p>
                            Members can gradually develop their
                            strongest area while understanding
                            the whole team.
                        </p>
                    </div>

                </div>

                <div class="card" style="margin-top:16px;text-align:center">

                    <p class="quote">
                        Learn first.
                        Practice second.
                        Master your craft.
                        Compete last.
                    </p>

                </div>
            `
        },


        // =================================================
        // BUILD
        // =================================================

        build: {
            code: "// MODULE 05",
            title: "BUILD",

            html: `
                <div class="module-list">

                    <div class="module-card">
                        <b>1. Turn Ideas Into Reality</b>
                        <p>
                            Take an idea or problem and turn it
                            into something that actually works.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>2. Build Through Projects</b>
                        <p>
                            Start with small projects and
                            gradually work towards bigger
                            hackathon-level projects.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>3. Try New Things</b>
                        <p>
                            Experiment with new tools,
                            technologies and different ways
                            of solving problems.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>4. Build Together</b>
                        <p>
                            Everyone contributes their skills
                            and works together to create one
                            complete project.
                        </p>
                    </div>

                </div>
            `
        },


        // =================================================
        // PROTOCOL
        // =================================================

        protocol: {
            code: "// MODULE 06",
            title: "PROTOCOL",

            html: `
                <div class="card">

                    <p class="quote">
                        Before you enter Team Spirit,
                        understand
                        <span>what you're entering.</span>
                    </p>

                    <p>
                        This team is built for learning
                        first and hackathons second.
                    </p>

                </div>

                <div class="module-list">

                    <div class="module-card">
                        <b>01. Be Curious</b>
                        <p>
                            Come with curiosity to explore,
                            question, experiment and discover.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>02. Come to Learn</b>
                        <p>
                            Training comes first.
                            Hackathons come second.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>03. Leave the Ego Behind</b>
                        <p>
                            Respect every member,
                            idea and contribution.
                        </p>
                    </div>

                    <div class="module-card">
                        <b>04. Understand & Support</b>
                        <p>
                            Everyone has different strengths
                            and learning speeds. Help your
                            teammates.
                        </p>
                    </div>

                </div>

                <div class="card" style="margin-top:16px;text-align:center">

                    <p>
                        If you're here only to win,
                        you may find a team.

                        <br><br>

                        <strong style="color:var(--green)">
                            If you're here to learn,
                            grow and build something together—
                            you may have found Team Spirit.
                        </strong>
                    </p>

                </div>
            `
        },


        // =================================================
        // JOIN
        // =================================================

        join: {
            code: "// MODULE 07",
            title: "JOIN",

            html: `
                <div class="join-box">

                    <h3>CONNECTION REQUEST</h3>

                    <p>
                        If you agree with our protocol
                        and believe in what Team Spirit
                        stands for, you're invited to join us.

                        <br><br>

                        <strong>
                            Learn first.
                            Grow together.
                            Build together.
                            Break your limits.
                        </strong>

                        <br><br>

                        If you're ready to be part of the
                        journey, become a part of the
                        <strong>Team Spirit family.</strong>
                    </p>

                    <div class="join-links">

                        <a href="#" id="joinRequestBtn">
                            REQUEST TO JOIN
                        </a>

                    </div>

                </div>
            `
        }

    };


    // =================================================
    // MODULE ORDER
    // =================================================

    const order = [
        "intro",
        "mission",
        "team",
        "learn",
        "build",
        "protocol",
        "join"
    ];


    let currentIndex = 0;


    // =================================================
    // ELEMENT HELPER
    // =================================================

    function get(id) {
        return document.getElementById(id);
    }


    // =================================================
    // PROGRESS
    // =================================================

    function animateProgress(
        barEl,
        percentEl,
        duration,
        done
    ) {

        if (!barEl || !percentEl) {
            if (done) done();
            return;
        }

        const start = performance.now();

        function frame(now) {

            const p = Math.min(
                (now - start) / duration,
                1
            );

            const eased =
                1 - Math.pow(1 - p, 1.35);

            const percent =
                Math.round(eased * 100);

            barEl.style.width =
                percent + "%";

            percentEl.textContent =
                percent + "%";

            if (p < 1) {
                requestAnimationFrame(frame);
            } else {
                if (done) done();
            }
        }

        requestAnimationFrame(frame);
    }


    // =================================================
    // LOGS
    // =================================================

    function revealLogs(
        container,
        lines,
        totalDuration
    ) {

        if (!container) return;

        container.innerHTML = "";

        const step =
            totalDuration / lines.length;

        lines.forEach((line, i) => {

            setTimeout(() => {

                const div =
                    document.createElement("div");

                div.textContent = line;

                container.appendChild(div);

            }, i * step);

        });
    }


    // =================================================
    // BOOT
    // =================================================

    function boot() {

        const bootLog =
            get("bootLog");

        revealLogs(
            bootLog,
            bootLines,
            3000
        );

        animateProgress(
            get("bootProgress"),
            get("bootPercent"),
            3000,
            () => {

                if (get("bootScreen")) {
                    get("bootScreen")
                        .classList.add("hidden");
                }

                if (get("entryScreen")) {
                    get("entryScreen")
                        .classList.remove("hidden");
                }

            }
        );
    }


    // =================================================
    // ENTER WORKSPACE
    // =================================================

    function enterWorkspace(user) {

        if (get("entryScreen")) {
            get("entryScreen")
                .classList.add("hidden");
        }

        if (get("loadingScreen")) {
            get("loadingScreen")
                .classList.remove("hidden");
        }

        revealLogs(
            get("loadingLog"),
            loadingLines,
            2000
        );

        animateProgress(
            get("enterProgress"),
            get("enterPercent"),
            2000,
            () => {

                if (get("loadingScreen")) {
                    get("loadingScreen")
                        .classList.add("hidden");
                }

                if (get("desktop")) {
                    get("desktop")
                        .classList.remove("hidden");
                }

                if (get("currentUser")) {
                    get("currentUser").textContent =
                        user.username || "USER";
                }

                renderSection("intro");
            }
        );
    }


    // =================================================
    // RENDER SECTION
    // =================================================

    function renderSection(key) {

        const section = sections[key];

        if (!section) {
            console.error(
                "Section not found:",
                key
            );
            return;
        }

        currentIndex =
            order.indexOf(key);

        if (get("sectionCode")) {
            get("sectionCode").textContent =
                section.code;
        }

        if (get("sectionTitle")) {
            get("sectionTitle").textContent =
                section.title;
        }

        if (get("panel")) {
            get("panel").innerHTML =
                section.html;
        }


        // NAV BUTTONS

        document
            .querySelectorAll(".nav-btn")
            .forEach(btn => {

                btn.classList.toggle(
                    "active",
                    btn.dataset.section === key
                );

            });


        // NEXT BUTTON

        const nextBtn =
            get("nextBtn");

        if (nextBtn) {

            if (
                currentIndex ===
                order.length - 1
            ) {

                nextBtn.innerHTML =
                    'BACK TO INTRO <span>↺</span>';

            } else {

                nextBtn.innerHTML =
                    'NEXT MODULE <span>→</span>';

            }
        }


        // JOIN BUTTON

        const joinButton =
            get("joinRequestBtn");

        if (joinButton) {

            joinButton.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                    alert(
                        "Your connection request has been recorded. ✓"
                    );

                }
            );

        }
    }


    // =================================================
    // NAVIGATION BUTTONS
    // =================================================

    document
        .querySelectorAll(".nav-btn")
        .forEach(btn => {

            btn.addEventListener(
                "click",
                () => {

                    const section =
                        btn.dataset.section;

                    renderSection(section);

                }
            );

        });


    // =================================================
    // NEXT BUTTON
    // =================================================

    if (get("nextBtn")) {

        get("nextBtn").addEventListener(
            "click",
            () => {

                if (
                    currentIndex ===
                    order.length - 1
                ) {

                    renderSection("intro");

                } else {

                    renderSection(
                        order[currentIndex + 1]
                    );

                }

            }
        );
    }


    // =================================================
    // SHOW REGISTER
    // =================================================

    if (get("showRegister")) {

        get("showRegister").addEventListener(
            "click",
            () => {

                get("loginForm")
                    ?.classList.add("hidden");

                get("registerForm")
                    ?.classList.remove("hidden");

                if (get("authTitle")) {
                    get("authTitle").textContent =
                        "CREATE ACCOUNT";
                }

                if (get("authSubtitle")) {
                    get("authSubtitle").textContent =
                        "Register to join Team Spirit.";
                }

            }
        );
    }


    // =================================================
    // SHOW LOGIN
    // =================================================

    if (get("showLogin")) {

        get("showLogin").addEventListener(
            "click",
            () => {

                get("registerForm")
                    ?.classList.add("hidden");

                get("loginForm")
                    ?.classList.remove("hidden");

                if (get("authTitle")) {
                    get("authTitle").textContent =
                        "WELCOME BACK";
                }

                if (get("authSubtitle")) {
                    get("authSubtitle").textContent =
                        "Login to enter Team Spirit.";
                }

            }
        );
    }


    // =================================================
    // LOGIN
    // =================================================

    if (get("loginForm")) {

        get("loginForm").addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();

                const username =
                    get("loginUsername")
                        ?.value.trim();

                const password =
                    get("loginPassword")
                        ?.value;

                const message =
                    get("loginMessage");

                if (!username || !password) {

                    if (message) {
                        message.textContent =
                            "Please enter username and password.";

                        message.style.color =
                            "#ff667a";
                    }

                    return;
                }


                if (message) {
                    message.textContent =
                        "AUTHENTICATING...";

                    message.style.color =
                        "#69ff9b";
                }


                try {

                    const response =
                        await fetch(
                            "http://localhost:3000/api/login",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body: JSON.stringify({
                                    username,
                                    password
                                })
                            }
                        );


                    const data =
                        await response.json();


                    if (!response.ok) {

                        if (message) {

                            message.textContent =
                                data.message ||
                                "Login failed.";

                            message.style.color =
                                "#ff667a";
                        }

                        return;
                    }


                    if (message) {

                        message.textContent =
                            "ACCESS GRANTED ✓";

                        message.style.color =
                            "#69ff9b";
                    }


                    localStorage.setItem(
                        "teamSpiritUser",
                        JSON.stringify(data.user)
                    );


                    setTimeout(() => {

                        enterWorkspace(
                            data.user
                        );

                    }, 700);

                }

                catch (error) {

                    console.error(
                        "LOGIN ERROR:",
                        error
                    );

                    if (message) {

                        message.textContent =
                            "SERVER NOT CONNECTED.";

                        message.style.color =
                            "#ff667a";
                    }

                }

            }
        );
    }


    // =================================================
    // REGISTER
    // =================================================

    if (get("registerForm")) {

        get("registerForm").addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                const name =
                    get("registerName")
                        ?.value.trim();

                const username =
                    get("registerUsername")
                        ?.value.trim();

                const email =
                    get("registerEmail")
                        ?.value.trim();

                const password =
                    get("registerPassword")
                        ?.value;

                const confirm =
                    get("registerConfirm")
                        ?.value;

                const message =
                    get("registerMessage");


                // PASSWORD CHECK

                if (password !== confirm) {

                    if (message) {

                        message.textContent =
                            "Passwords do not match.";

                        message.style.color =
                            "#ff667a";
                    }

                    return;
                }


                if (!password ||
                    password.length < 6) {

                    if (message) {

                        message.textContent =
                            "Password must contain at least 6 characters.";

                        message.style.color =
                            "#ff667a";
                    }

                    return;
                }


                if (message) {

                    message.textContent =
                        "CREATING ACCOUNT...";

                    message.style.color =
                        "#69ff9b";
                }


                try {

                    const response =
                        await fetch(
                            "http://localhost:3000/api/register",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body: JSON.stringify({
                                    name,
                                    username,
                                    email,
                                    password
                                })
                            }
                        );


                    const data =
                        await response.json();


                    if (!response.ok) {

                        if (message) {

                            message.textContent =
                                data.message ||
                                "Registration failed.";

                            message.style.color =
                                "#ff667a";
                        }

                        return;
                    }


                    if (message) {

                        message.textContent =
                            "ACCOUNT CREATED ✓";

                        message.style.color =
                            "#69ff9b";
                    }


                    setTimeout(() => {

                        get("registerForm")
                            ?.classList.add("hidden");

                        get("loginForm")
                            ?.classList.remove("hidden");


                        if (get("authTitle")) {
                            get("authTitle")
                                .textContent =
                                "WELCOME BACK";
                        }


                        if (get("authSubtitle")) {
                            get("authSubtitle")
                                .textContent =
                                "Account created. Login to continue.";
                        }


                        if (get("loginUsername")) {
                            get("loginUsername")
                                .value =
                                username;
                        }


                        if (get("loginPassword")) {
                            get("loginPassword")
                                .value = "";
                        }


                        if (message) {
                            message.textContent = "";
                        }

                    }, 1000);

                }

                catch (error) {

                    console.error(
                        "REGISTER ERROR:",
                        error
                    );

                    if (message) {

                        message.textContent =
                            "SERVER NOT CONNECTED.";

                        message.style.color =
                            "#ff667a";
                    }

                }

            }
        );
    }


    // =================================================
    // LOGOUT
    // =================================================

    if (get("logoutBtn")) {

        get("logoutBtn").addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    "teamSpiritUser"
                );


                get("desktop")
                    ?.classList.add("hidden");

                get("entryScreen")
                    ?.classList.remove("hidden");

                get("loginForm")
                    ?.classList.remove("hidden");

                get("registerForm")
                    ?.classList.add("hidden");


                if (get("authTitle")) {
                    get("authTitle").textContent =
                        "WELCOME BACK";
                }


                if (get("authSubtitle")) {
                    get("authSubtitle").textContent =
                        "Login to enter Team Spirit.";
                }


                if (get("loginUsername")) {
                    get("loginUsername").value = "";
                }


                if (get("loginPassword")) {
                    get("loginPassword").value = "";
                }


                if (get("loginMessage")) {
                    get("loginMessage").textContent = "";
                }

            }
        );
    }


    // =================================================
    // CLOCK
    // =================================================

    function updateClock() {

        const clock =
            get("clock");

        if (!clock) return;

        const d =
            new Date();

        clock.textContent =
            d.toLocaleTimeString(
                [],
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false
                }
            );
    }


    setInterval(
        updateClock,
        1000
    );

    updateClock();


    // =================================================
    // START WEBSITE
    // =================================================

    boot();

});