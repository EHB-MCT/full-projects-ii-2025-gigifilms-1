init();

function init() {
  let tab = "";
  displayHTML();
}

function changeHTMLAcc() {
  tab = account;
  innerHTML = `
     
        <h1>Account</h1>
        <div class="flex column gap-10">
          <label for="name">Full name</label>
          <input type="name" id="name" />
        </div>
        <div class="flex column gap-10">
          <label for="email">E-mail</label>
          <input type="email" id="email" />
        </div>
        <div class="flex column gap-10">
          <label for="telephone">Telephone number</label>
          <input type="telephone" id="telephone" />
        </div>
        <div class="flex column gap-10">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div class="flex column gap-10">
          <label for="password">Confirm password</label>
          <input type="password" id="password" />
        </div>
      </div>
      <div class="buttons">
        <button>Update</button>
        <a>Cancel</a>
      
    `;

  document.querySelector(".container").innerHTML;
}

function changeHTMLPer() {
  tab = personal;
  innerHTML = `<h1>Personal info</h1>
            <div class="flex column gap-10">
              <label aria-label="date_of_birth" for="Date of birth"
                >Date of birth</label
              >
              <input type="date" id="date" />
            </div>
            <div class="flex column gap-10">
              <label for="gender">Gender</label>
              <select id="gender">
                <option aria-label="choose" value="Choose">Choose</option>
                <option aria-label="male" value="male">Male</option>
                <option aria-label="female" value="female">Female</option>
                <option value="x">X</option>
                <option aria-label="other" value="other">Other</option>
                <option aria-label="prefer_not_to_say" value="prefer">
                  Prefer not to say
                </option>
              </select>
            </div>
            <div class="flex column gap-10">
              <label aria-label="region" for="region">Region</label>
              <input type="text" id="region" />
            </div>
            <div class="flex column gap-10">
              <label aria-label="length" for="length">Length</label>
              <input type="length" id="length" />
            </div>
            <div class="group flex column gap-20">
              <div class="languages flex column gap-10">
                <label aria-label="languages">Languages</label>
                <div class="tags flex gap-10 row">
                  <div class="tag flex row center">
                    <span>Dutch</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90579 2.77L7.76579 6.63L11.6058 2.79C11.6906 2.69972 11.7928 2.62749 11.9062 2.57766C12.0196 2.52783 12.1419 2.50141 12.2658 2.5C12.531 2.5 12.7854 2.60536 12.9729 2.79289C13.1604 2.98043 13.2658 3.23478 13.2658 3.5C13.2681 3.6226 13.2454 3.74439 13.1989 3.85788C13.1525 3.97138 13.0834 4.07419 12.9958 4.16L9.10579 8L12.9958 11.89C13.1606 12.0512 13.2572 12.2696 13.2658 12.5C13.2658 12.7652 13.1604 13.0196 12.9729 13.2071C12.7854 13.3946 12.531 13.5 12.2658 13.5C12.1383 13.5053 12.0112 13.484 11.8924 13.4375C11.7736 13.3911 11.6658 13.3204 11.5758 13.23L7.76579 9.37L3.91579 13.22C3.83129 13.3073 3.73035 13.3769 3.61879 13.425C3.50723 13.4731 3.38725 13.4986 3.26579 13.5C3.00057 13.5 2.74622 13.3946 2.55868 13.2071C2.37114 13.0196 2.26579 12.7652 2.26579 12.5C2.26346 12.3774 2.2862 12.2556 2.33263 12.1421C2.37906 12.0286 2.44819 11.9258 2.53579 11.84L6.42579 8L2.53579 4.11C2.37097 3.94876 2.27433 3.73041 2.26579 3.5C2.26579 3.23478 2.37114 2.98043 2.55868 2.79289C2.74622 2.60536 3.00057 2.5 3.26579 2.5C3.50579 2.503 3.73579 2.6 3.90579 2.77Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div class="tag flex row center">
                    <span>French</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90579 2.77L7.76579 6.63L11.6058 2.79C11.6906 2.69972 11.7928 2.62749 11.9062 2.57766C12.0196 2.52783 12.1419 2.50141 12.2658 2.5C12.531 2.5 12.7854 2.60536 12.9729 2.79289C13.1604 2.98043 13.2658 3.23478 13.2658 3.5C13.2681 3.6226 13.2454 3.74439 13.1989 3.85788C13.1525 3.97138 13.0834 4.07419 12.9958 4.16L9.10579 8L12.9958 11.89C13.1606 12.0512 13.2572 12.2696 13.2658 12.5C13.2658 12.7652 13.1604 13.0196 12.9729 13.2071C12.7854 13.3946 12.531 13.5 12.2658 13.5C12.1383 13.5053 12.0112 13.484 11.8924 13.4375C11.7736 13.3911 11.6658 13.3204 11.5758 13.23L7.76579 9.37L3.91579 13.22C3.83129 13.3073 3.73035 13.3769 3.61879 13.425C3.50723 13.4731 3.38725 13.4986 3.26579 13.5C3.00057 13.5 2.74622 13.3946 2.55868 13.2071C2.37114 13.0196 2.26579 12.7652 2.26579 12.5C2.26346 12.3774 2.2862 12.2556 2.33263 12.1421C2.37906 12.0286 2.44819 11.9258 2.53579 11.84L6.42579 8L2.53579 4.11C2.37097 3.94876 2.27433 3.73041 2.26579 3.5C2.26579 3.23478 2.37114 2.98043 2.55868 2.79289C2.74622 2.60536 3.00057 2.5 3.26579 2.5C3.50579 2.503 3.73579 2.6 3.90579 2.77Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="Roots flex column gap-10">
                <label aria-label="roots">Roots</label>
                <div class="tags flex gap-10 row">
                  <div class="tag flex row center">
                    <span>Moroccan</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90579 2.77L7.76579 6.63L11.6058 2.79C11.6906 2.69972 11.7928 2.62749 11.9062 2.57766C12.0196 2.52783 12.1419 2.50141 12.2658 2.5C12.531 2.5 12.7854 2.60536 12.9729 2.79289C13.1604 2.98043 13.2658 3.23478 13.2658 3.5C13.2681 3.6226 13.2454 3.74439 13.1989 3.85788C13.1525 3.97138 13.0834 4.07419 12.9958 4.16L9.10579 8L12.9958 11.89C13.1606 12.0512 13.2572 12.2696 13.2658 12.5C13.2658 12.7652 13.1604 13.0196 12.9729 13.2071C12.7854 13.3946 12.531 13.5 12.2658 13.5C12.1383 13.5053 12.0112 13.484 11.8924 13.4375C11.7736 13.3911 11.6658 13.3204 11.5758 13.23L7.76579 9.37L3.91579 13.22C3.83129 13.3073 3.73035 13.3769 3.61879 13.425C3.50723 13.4731 3.38725 13.4986 3.26579 13.5C3.00057 13.5 2.74622 13.3946 2.55868 13.2071C2.37114 13.0196 2.26579 12.7652 2.26579 12.5C2.26346 12.3774 2.2862 12.2556 2.33263 12.1421C2.37906 12.0286 2.44819 11.9258 2.53579 11.84L6.42579 8L2.53579 4.11C2.37097 3.94876 2.27433 3.73041 2.26579 3.5C2.26579 3.23478 2.37114 2.98043 2.55868 2.79289C2.74622 2.60536 3.00057 2.5 3.26579 2.5C3.50579 2.503 3.73579 2.6 3.90579 2.77Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div class="tag flex row center">
                    <span>Italian</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90579 2.77L7.76579 6.63L11.6058 2.79C11.6906 2.69972 11.7928 2.62749 11.9062 2.57766C12.0196 2.52783 12.1419 2.50141 12.2658 2.5C12.531 2.5 12.7854 2.60536 12.9729 2.79289C13.1604 2.98043 13.2658 3.23478 13.2658 3.5C13.2681 3.6226 13.2454 3.74439 13.1989 3.85788C13.1525 3.97138 13.0834 4.07419 12.9958 4.16L9.10579 8L12.9958 11.89C13.1606 12.0512 13.2572 12.2696 13.2658 12.5C13.2658 12.7652 13.1604 13.0196 12.9729 13.2071C12.7854 13.3946 12.531 13.5 12.2658 13.5C12.1383 13.5053 12.0112 13.484 11.8924 13.4375C11.7736 13.3911 11.6658 13.3204 11.5758 13.23L7.76579 9.37L3.91579 13.22C3.83129 13.3073 3.73035 13.3769 3.61879 13.425C3.50723 13.4731 3.38725 13.4986 3.26579 13.5C3.00057 13.5 2.74622 13.3946 2.55868 13.2071C2.37114 13.0196 2.26579 12.7652 2.26579 12.5C2.26346 12.3774 2.2862 12.2556 2.33263 12.1421C2.37906 12.0286 2.44819 11.9258 2.53579 11.84L6.42579 8L2.53579 4.11C2.37097 3.94876 2.27433 3.73041 2.26579 3.5C2.26579 3.23478 2.37114 2.98043 2.55868 2.79289C2.74622 2.60536 3.00057 2.5 3.26579 2.5C3.50579 2.503 3.73579 2.6 3.90579 2.77Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="Hobbies flex column gap-10">
                <label aria-label="hobbies">Hobbies</label>
                <div class="tags flex gap-10 row">
                  <div class="tag flex row center">
                    <span>Football</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90579 2.77L7.76579 6.63L11.6058 2.79C11.6906 2.69972 11.7928 2.62749 11.9062 2.57766C12.0196 2.52783 12.1419 2.50141 12.2658 2.5C12.531 2.5 12.7854 2.60536 12.9729 2.79289C13.1604 2.98043 13.2658 3.23478 13.2658 3.5C13.2681 3.6226 13.2454 3.74439 13.1989 3.85788C13.1525 3.97138 13.0834 4.07419 12.9958 4.16L9.10579 8L12.9958 11.89C13.1606 12.0512 13.2572 12.2696 13.2658 12.5C13.2658 12.7652 13.1604 13.0196 12.9729 13.2071C12.7854 13.3946 12.531 13.5 12.2658 13.5C12.1383 13.5053 12.0112 13.484 11.8924 13.4375C11.7736 13.3911 11.6658 13.3204 11.5758 13.23L7.76579 9.37L3.91579 13.22C3.83129 13.3073 3.73035 13.3769 3.61879 13.425C3.50723 13.4731 3.38725 13.4986 3.26579 13.5C3.00057 13.5 2.74622 13.3946 2.55868 13.2071C2.37114 13.0196 2.26579 12.7652 2.26579 12.5C2.26346 12.3774 2.2862 12.2556 2.33263 12.1421C2.37906 12.0286 2.44819 11.9258 2.53579 11.84L6.42579 8L2.53579 4.11C2.37097 3.94876 2.27433 3.73041 2.26579 3.5C2.26579 3.23478 2.37114 2.98043 2.55868 2.79289C2.74622 2.60536 3.00057 2.5 3.26579 2.5C3.50579 2.503 3.73579 2.6 3.90579 2.77Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div class="tag flex row center">
                    <span>Coding</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90579 2.77L7.76579 6.63L11.6058 2.79C11.6906 2.69972 11.7928 2.62749 11.9062 2.57766C12.0196 2.52783 12.1419 2.50141 12.2658 2.5C12.531 2.5 12.7854 2.60536 12.9729 2.79289C13.1604 2.98043 13.2658 3.23478 13.2658 3.5C13.2681 3.6226 13.2454 3.74439 13.1989 3.85788C13.1525 3.97138 13.0834 4.07419 12.9958 4.16L9.10579 8L12.9958 11.89C13.1606 12.0512 13.2572 12.2696 13.2658 12.5C13.2658 12.7652 13.1604 13.0196 12.9729 13.2071C12.7854 13.3946 12.531 13.5 12.2658 13.5C12.1383 13.5053 12.0112 13.484 11.8924 13.4375C11.7736 13.3911 11.6658 13.3204 11.5758 13.23L7.76579 9.37L3.91579 13.22C3.83129 13.3073 3.73035 13.3769 3.61879 13.425C3.50723 13.4731 3.38725 13.4986 3.26579 13.5C3.00057 13.5 2.74622 13.3946 2.55868 13.2071C2.37114 13.0196 2.26579 12.7652 2.26579 12.5C2.26346 12.3774 2.2862 12.2556 2.33263 12.1421C2.37906 12.0286 2.44819 11.9258 2.53579 11.84L6.42579 8L2.53579 4.11C2.37097 3.94876 2.27433 3.73041 2.26579 3.5C2.26579 3.23478 2.37114 2.98043 2.55868 2.79289C2.74622 2.60536 3.00057 2.5 3.26579 2.5C3.50579 2.503 3.73579 2.6 3.90579 2.77Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div class="tag flex row center">
                    <span>Martial Arts</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90579 2.77L7.76579 6.63L11.6058 2.79C11.6906 2.69972 11.7928 2.62749 11.9062 2.57766C12.0196 2.52783 12.1419 2.50141 12.2658 2.5C12.531 2.5 12.7854 2.60536 12.9729 2.79289C13.1604 2.98043 13.2658 3.23478 13.2658 3.5C13.2681 3.6226 13.2454 3.74439 13.1989 3.85788C13.1525 3.97138 13.0834 4.07419 12.9958 4.16L9.10579 8L12.9958 11.89C13.1606 12.0512 13.2572 12.2696 13.2658 12.5C13.2658 12.7652 13.1604 13.0196 12.9729 13.2071C12.7854 13.3946 12.531 13.5 12.2658 13.5C12.1383 13.5053 12.0112 13.484 11.8924 13.4375C11.7736 13.3911 11.6658 13.3204 11.5758 13.23L7.76579 9.37L3.91579 13.22C3.83129 13.3073 3.73035 13.3769 3.61879 13.425C3.50723 13.4731 3.38725 13.4986 3.26579 13.5C3.00057 13.5 2.74622 13.3946 2.55868 13.2071C2.37114 13.0196 2.26579 12.7652 2.26579 12.5C2.26346 12.3774 2.2862 12.2556 2.33263 12.1421C2.37906 12.0286 2.44819 11.9258 2.53579 11.84L6.42579 8L2.53579 4.11C2.37097 3.94876 2.27433 3.73041 2.26579 3.5C2.26579 3.23478 2.37114 2.98043 2.55868 2.79289C2.74622 2.60536 3.00057 2.5 3.26579 2.5C3.50579 2.503 3.73579 2.6 3.90579 2.77Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="buttons flex row gap-20">
              <button aria-label="update">Update</button>
              <a aria-label="cancel" class="center">Cancel</a>
            </div>`;
  document.querySelector(".container").innerHTML;
}

function changeHTMLPar() {
  tab = parental;
  innerHTML = `<h1>Parental info (-18)</h1>
            <div class="flex column gap-10">
              <label aria-label="name parent" for="Name parent/guardian"
                >Name parent/guardian</label
              >
              <input type="text" id="name-parent" />
            </div>
            <div class="flex column gap-10">
          <label aria-label="First name parent" for="Name parent/guardian"
                >First name parent/guardian</label
              >
              <input type="text" id="firstname-parent" />
            </div>
             <div class="flex column gap-10">
          <label aria-label="email parent" for="Name parent/guardian"
                >E-mail parent/guardian</label
              >
              <input type="email" id="email-parent" />
            </div>
             <div class="flex column gap-10">
          <label aria-label="phoneparent" for="phone"
                >Telephone number parent/guardian</label
              >
              <input type="tel" id="email-parent" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" />
            </div>
          </div>
            

            <div class="buttons flex row gap-20">
              <button aria-label="update">Update</button>
              <a aria-label="cancel" class="center">Cancel</a>
            </div>`;

  document.querySelector(".container").innerHTML;
}
function changeHTMLVid() {
  tab = video;
  innerHTML = `<h1>Photo’s & video’s</h1>
            <div class="flex column gap-10">
           <label><h2>Short description</h2></label> <textarea id="biotext" rows="10" ></textarea>
            </div>
          <div class="flex  gap-10">
             <form action="/action_page.php">
  <input type="file" id="files" name="files" multiple>
</form> 
          </div>
          </div>
            <div class="buttons flex row gap-20">
              <button aria-label="update">Update</button>
              <a aria-label="cancel" class="center">Cancel</a>
            </div>`;

  document.querySelector(".container").innerHTML;
}

function displayHTML() {
  if (tab == "account") {
    changeHTMLAcc();
  } else if (tab == "personal") {
    changeHTMLPer();
  } else if (tab == "parental") {
    changeHTMLPar();
  } else {
    changeHTMLVid();
  }
}
