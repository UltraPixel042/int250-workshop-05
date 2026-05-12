# โปรเจกต์ Vue 3 ที่ใช้สถาปัตยกรรมแบบ Feature-Based

โปรเจกต์นี้สร้างขึ้นโดยใช้ Vue 3, Vite, Tailwind CSS และ Vue Router
โดยมีการบังคับใช้ **Feature-Based Architecture** เพื่อ Scalability, Maintainability, Team Collaboration
ที่ดี

## แนวทางของสถาปัตยกรรม

แทนที่จะจัดกลุ่มไฟล์ตามประเภทของไฟล์ โปรเจกต์นี้จะจัดระเบียบโค้ดตาม **Feature/Domain**

### โครงสร้างไดเรกทอรีมาตรฐาน (Standard Directory Structure)

โครงสร้างของโปรเจกต์จะแบ่งแยกอย่างชัดเจนระหว่าง **Features** และ **Shared**

```
src/
├── features/ # พื้นที่สำหรับ Business Domains (แต่ละฟีเจอร์แยกขาดจากกัน)
│ └── <feature-name>/ # โครงสร้างมาตรฐานเมื่อมีการสร้างฟีเจอร์ใหม่
│ ├──── components/ # UI Components ที่ใช้ "เฉพาะ" ในฟีเจอร์นี้เท่านั้น (Dumb components)
│ ├──── pages/ # หน้าจอหลักของฟีเจอร์นี้ที่จะถูกเรียกผ่าน Router (Smart components)
│ ├──── composables/ # Vue Composables/Logic เฉพาะของฟีเจอร์นี้ (ถ้ามี)
│ ├──── services/ # ไฟล์จัดการ API / การดึงข้อมูลของโดเมนนี้ (ถ้ามี)
│ ├──── stores/ # State Management (Pinia) ของฟีเจอร์นี้ (ถ้ามี)
│ └──── routes.js # ไฟล์กำหนดเส้นทาง (Routes config) ของฟีเจอร์นี้
│
├── shared/ # พื้นที่สำหรับส่วนกลางที่ใช้ร่วมกันทั่วทั้งแอปพลิเคชัน
│ ├── components/ # Shared UI (เช่น Navbar, Button, BaseModal)
│ ├── composables/ # Shared Logic (เช่น useAuth, useTheme)
│ └── utils/ # Helper functions กลาาง (เช่น การแปลงวันที่, format ตัวเลข)
│
├── router/
│ └── index.js # Main Router (ทำหน้าที่รวม routes.js จากทุกฟีเจอร์ และจัดการ Guards)
├── App.vue
└── main.js

```

### การสื่อสารข้ามฟีเจอร์และ Shared UI (UI ที่ใช้ร่วมกัน)

- **Shared UI:** component(s) ใด ๆ ก็ตามที่ใช้ร่วมกันในหลายฟีเจอร์ (เช่น `Navbar.vue`, Button, Layout) จะต้องอยู่ในโฟลเดอร์ `src/shared/components/` ห้าม component(s) ที่ใช้ร่วมกันไปใส่ไว้ใน `features`
- **Direction Of Dependency:** ในทางอุดมคติ แต่ละฟีเจอร์ใน `src/features` ควรเป็นอิสระจากกัน หาก `Feature A` ต้องใช้คอมโพเนนต์จาก `Feature B` ให้ย้ายคอมโพเนนต์นั้นไปไว้ที่ระกับ `shared/` แทน
- **State & Events:** ใช้ Pinia หรือ Global event buses สำหรับ State ข้าม feature ในกรณีที่หลีกเลี่ยงการผูกติด (Coupling) กันไม่ได้

## Tailwind CSS

โปรเจกต์นี้ใช้ `@tailwindcss/vite` (Tailwind CSS v4)
โฟกัสหลักของ CSS จะฉีดเข้าไปที่ `src/assets/main.css`

## ระบบ Routing & การตรวจสอบสิทธิ์ (Routing & Authentication Guard)

แอปพลิเคชันถูกแบ่งออกเป็นสองส่วนหลัก:

1. **Public / User Routes:**
   เส้นทางใดก็ตามที่ **ไม่ได้** ขึ้นต้นด้วย `/admin` (เช่น `/`, `/profile`) จะถือว่า Public และสามารถเข้าถึงได้โดยไม่ต้องเข้าสู่ระบบ

2. **Protected / Admin Routes:**
   เส้นทางใดก็ตามที่ **ขึ้นต้น** ด้วย `/admin` (เช่น `/admin`, `/admin/job`) จะต้อง Authentication

**การทำงานของ Router Guard:**
จะมี guard logic ไว้ใน `vue-router` โดยจะดักจับ path ดังกล่าว:

- หากผู้ใช้ยังไม่ได้ Authen และพยายามเข้าถึงหน้า `/admin...` ใด ๆ (ยกเว้น `/admin/sign-in`) ระบบจะ redirect ไปยังหน้า `/admin/sign-in`
- หากอยู่ในส่วน Public Routes ผู้ใช้จะสามารถดู content ได้ปกติ

## Branch & PR Naming (Mandatory)

**Branch:**

`<type>/<short-description-job-case>`

Types:

- `feat`: ใช้เมื่อเพิ่มฟีเจอร์หรือความสามารถใหม่
- `fix`: ใช้เมื่อแก้ไขบั๊ก (Bug) หรือข้อผิดพลาดในโค้ด
- `refactor`: ใช้เมื่อมีการปรับปรุงโครงสร้างโค้ดหรือประสิทธิภาพการทำงาน (โดยไม่เปลี่ยนพฤติกรรมของระบบ)
- `doc`: ใช้เมื่อมีการปรับปรุงเอกสารเท่านั้น เช่น การแก้ไข README.md หรือไฟล์ .txt
- `test`: ใช้เมื่อต้องการเพิ่มหรือแก้ไขสคริปต์การทดสอบ (Tests)
- `hotfix`: ใช้สำหรับแก้ไขปัญหาเร่งด่วนและวิกฤตที่ต้อง Deploy ขึ้น Production ในทันที

**การตั้งชื่อ PR (Pull Request):**

`<branch-name> - [JIRA Work Key] <short description>`

**Normal Workflow**

1. **ข้อห้ามสำคัญ:** **ห้าม Push โค้ดตรง ไปยัง Branch `main` และ `develop` โดยเด็ดขาด!**
2. เริ่มการพัฒนาโปรเจกต์โดยแตก Branch ใหม่จาก `main` ด้วย branch name ที่เหมาะสม เช่น `feat/example-feature`
3. เมื่อพัฒนาเสร็จสิ้น ให้สร้าง Pull Request (PR) ไปยัง Branch ขาเข้าคือ `develop`
4. เมื่อโค้ดใน `develop` เสถียรและพร้อมสำหรับ Production ให้สร้าง PR จาก `develop` ไปยัง Branch `main`
5. **ข้อกำหนดฝั่ง Vercel Deploy:** การกดปุ่ม **Merge PR** เข้าสู่ `main` ต้องกระทำโดยบัญชี `navysingchai` เท่านั้น! หากเป็นบัญชีอื่นกด Merge ระบบ Vercel จะไม่ทำการ Deploy ให้อัตโนมัติ
