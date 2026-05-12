# Software Architecture & Design Pattern Guideline: Feature-Based Architecture

เอกสารฉบับนี้อธิบายถึงสถาปัตยกรรมซอฟต์แวร์และรูปแบบการออกแบบ (Design Patterns) ที่ใช้ในโปรเจกต์นี้ เพื่อเป็นมาตรฐานสำหรับการพัฒนาแอปพลิเคชันที่มีความยืดหยุ่น (Scalability), บำรุงรักษาง่าย (Maintainability) และรองรับการทำงานร่วมกันเป็นทีมขนาดใหญ่

---

## 1. Architectural Pattern: Feature-Based Architecture (FBA)

หัวใจหลักของสถาปัตยกรรมนี้คือการจัดกลุ่มโค้ดตาม **Business Domain** หรือ **Feature** แทนที่จะจัดกลุ่มตามประเภทของไฟล์ (เช่น การแยกโฟลเดอร์ components, views, store ออกจากกันทั้งหมด)

### แนวคิดหลัก (Core Concepts)
- **Modularization**: แบ่งแอปพลิเคชันออกเป็นโมดูลอิสระ (Features) ที่สามารถทำงานได้ด้วยตัวเอง
- **High Cohesion**: สิ่งที่ทำงานร่วมกันหรือเกี่ยวข้องกันในเชิงธุรกิจควรอยู่ใกล้กัน
- **Low Coupling**: ลดความผูกพันระหว่างโมดูลให้น้อยที่สุด เพื่อให้การเปลี่ยนแปลงในฟีเจอร์หนึ่งไม่ส่งผลกระทบต่อฟีเจอร์อื่น

---

## 2. โครงสร้างไดเรกทอรีมาตรฐาน (Standard Directory Structure)

โครงสร้างถูกแบ่งออกเป็น 2 ส่วนหลักคือ **Features** และ **Shared**

```text
src/
├── features/               # โมดูลที่บรรจุ Business Logic เฉพาะทาง
│   └── <feature-name>/     # ชื่อโมดูลตาม Business Domain
│       ├── components/     # UI Components ที่ใช้เฉพาะในฟีเจอร์นี้ (Private Components)
│       ├── pages/          # หน้าจอหลัก (Entry Points) ของฟีเจอร์
│       ├── composables/    # Logic หรือ State เฉพาะของฟีเจอร์ (Logic Encapsulation)
│       ├── services/       # การจัดการ API หรือการดึงข้อมูลเฉพาะโดเมน
│       └── routes.js       # การกำหนดเส้นทางภายในโมดูล (Decentralized Routing)
│
├── shared/                 # ทรัพยากรส่วนกลางที่ใช้ร่วมกันทั้งระบบ
│   ├── components/         # Shared UI (เช่น Navbar, Sidebar, Base Components)
│   ├── composables/        # Shared Logic (เช่น useAuth, useTheme)
│   ├── utils/              # Helper functions ทั่วไป
│   └── assets/             # Global CSS, Images, Fonts
│
├── router/                 # จุดรวมการจัดการเส้นทาง (Centralized Router)
├── App.vue                 # Root Layout และจุดรวมของ Main UI Frame
└── main.js                 # Entry point ของแอปพลิเคชัน
```

---

## 3. กฎการจัดการความพึ่งพา (Dependency Rules)

เพื่อให้สถาปัตยกรรมมีความแข็งแกร่ง ต้องปฏิบัติตามกฎดังนี้:

1.  **Unidirectional Dependency**: 
    - `Features` สามารถเรียกใช้ `Shared` ได้
    - `Shared` **ห้าม** เรียกใช้ `Features` โดยเด็ดขาด
2.  **Feature Isolation**:
    - `Feature A` ไม่ควรนำเข้า (Import) สิ่งต่าง ๆ จาก `Feature B` โดยตรง
    - หากมีความจำเป็นต้องใช้คอมโพเนนต์ร่วมกัน ให้ย้ายคอมโพเนนต์นั้นไปอยู่ที่ `shared/components/` แทน
3.  **Global Access**: 
    - ทรัพยากรที่อยู่ใน `shared/` ต้องเป็นทรัพยากรที่เป็นกลาง (Context-free) และไม่ผูกติดกับ Business Logic ของฟีเจอร์ใดฟีเจอร์หนึ่ง

---

## 4. Design Pattern: Smart and Dumb Components

เราใช้รูปแบบการแยกความรับผิดชอบของคอมโพเนนต์ออกเป็นสองระดับ:

### Dumb Components (Presentational)
- อยู่ในโฟลเดอร์ `components/`
- มีหน้าที่แสดงผล UI เท่านั้น รับข้อมูลผ่าน `props` และส่งเหตุการณ์ออกไปผ่าน `emit`
- **ห้าม** มี Logic ที่ซับซ้อน หรือการเรียกใช้ API โดยตรง

### Smart Components (Containers / Pages)
- อยู่ในโฟลเดอร์ `pages/`
- ทำหน้าที่เป็นตัวเชื่อม (Orchestrator) ระหว่าง Business Logic, State และ UI
- จัดการการเรียกใช้ API, การเข้าถึง Store และการส่งต่อข้อมูลให้ Dumb Components

---

## 5. การจัดการเส้นทาง (Routing Strategy)

ใช้ระบบ **Decentralized Routes** เพื่อให้แต่ละฟีเจอร์เป็นอิสระ:
- แต่ละฟีเจอร์จะมีไฟล์ `routes.js` ของตัวเอง
- ไฟล์ `src/router/index.js` จะทำหน้าที่เป็น **Aggregator** เพื่อรวมเส้นทางจากทุกฟีเจอร์เข้าด้วยกัน
- วิธีนี้ช่วยลดความขัดแย้ง (Merge Conflicts) เมื่อพัฒนาหลายฟีเจอร์พร้อมกัน

---

## 6. Authentication & Authorization Pattern (Guard)

ใช้รูปแบบ **Global Navigation Guard** เพื่อควบคุมการเข้าถึงทรัพยากร:
- แบ่งหน้าจอเป็น 2 กลุ่มใหญ่: **Public Routes** และ **Protected Routes**
- มีการใช้ระบบ **Gatekeeper** (Middleware) เพื่อตรวจสอบสถานะการยืนยันตัวตนก่อนการเรนเดอร์คอมโพเนนต์
- หากผู้ใช้ไม่มีสิทธิ์ จะถูก Redirect ไปยังโมดูลการยืนยันตัวตน (Auth Module) โดยอัตโนมัติ

---

## 7. ประโยชน์ของสถาปัตยกรรมนี้
- **Scalability**: สามารถเพิ่มฟีเจอร์ใหม่ได้ง่ายเพียงแค่เพิ่มโฟลเดอร์ใน `features/`
- **Maintainability**: เมื่อเกิดข้อผิดพลาดในฟีเจอร์ใด สามารถจำกัดขอบเขตการแก้ไขได้ชัดเจน
- **Testing**: ง่ายต่อการทำ Unit Test และ Integration Test เนื่องจากแต่ละฟีเจอร์มีขอบเขต (Boundary) ที่ชัดเจน
- **Onboarding**: นักพัฒนาใหม่สามารถเข้าใจระบบได้เร็วขึ้นจากการดูตาม Business Domain
