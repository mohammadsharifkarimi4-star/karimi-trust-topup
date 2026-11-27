<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>امانت‌داری کریمی — سامانه ویژه مشتریان</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <style>
    :root {
      --emerald-950: #06281e;
      --emerald-900: #064e3b;
      --emerald-800: #065f46;
      --emerald-700: #047857;
      --emerald-600: #059669;
      --emerald-500: #10b981;
      --emerald-100: #d1fae5;
      --emerald-50: #ecfdf5;
      --teal-700: #0f766e;
      --teal-600: #0d9488;
      --teal-50: #f0fdfa;
      --slate-900: #0f172a;
      --slate-800: #1e293b;
      --slate-700: #334155;
      --slate-500: #64748b;
      --slate-300: #cbd5e1;
      --slate-200: #e2e8f0;
      --slate-100: #f1f5f9;
      --slate-50: #f8fafc;
      --white: #ffffff;
      --danger: #dc2626;
      --danger-soft: #fef2f2;
      --warning: #d97706;
      --warning-soft: #fffbeb;
      --radius-xl: 22px;
      --radius-lg: 16px;
      --radius-md: 12px;
      --shadow-card: 0 4px 18px rgba(6, 78, 59, 0.06);
      --shadow-wallet: 0 10px 26px rgba(5, 150, 105, 0.14);
      --shadow-nav: 0 -4px 20px rgba(15, 23, 42, 0.08);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Vazirmatn', system-ui, -apple-system, sans-serif;
      direction: rtl;
      -webkit-tap-highlight-color: transparent;
      font-feature-settings: "tnum";
      font-variant-numeric: tabular-nums;
    }

    html, body {
      height: 100%;
      background: #e6f0ec;
      color: var(--slate-900);
      overflow: hidden;
    }

    body {
      background-image:
        radial-gradient(at 15% 10%, rgba(16, 185, 129, 0.14) 0px, transparent 50%),
        radial-gradient(at 85% 90%, rgba(13, 148, 136, 0.12) 0px, transparent 50%);
      display: flex;
      justify-content: center;
      align-items: stretch;
    }

    .app-viewport {
      width: 100%;
      max-width: 500px;
      height: 100dvh;
      background: #f4f8f6;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    @media (min-width: 540px) {
      body { padding: 14px; align-items: center; }
      .app-viewport {
        height: 92dvh;
        max-height: 860px;
        border-radius: 26px;
        border: 1.5px solid rgba(16, 185, 129, 0.25);
        box-shadow: 0 24px 60px rgba(6, 40, 30, 0.16);
      }
    }

    .top-bar {
      padding: 11px 16px;
      background: linear-gradient(135deg, var(--emerald-800) 0%, var(--teal-700) 100%);
      color: var(--white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      z-index: 20;
    }

    .top-bar-brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .brand-shield {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.18);
      border: 1px solid rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.05rem;
    }

    .brand-texts h1 {
      font-size: 0.94rem;
      font-weight: 900;
      line-height: 1.2;
      color: var(--white);
    }

    .brand-texts span {
      font-size: 0.68rem;
      color: var(--emerald-100);
      font-weight: 600;
      display: block;
    }

    .top-bar-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .icon-circle-btn {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.28);
      color: var(--white);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 0.92rem;
      font-weight: 800;
      text-decoration: none;
    }

    .app-body {
      flex: 1;
      min-height: 0;
      padding: 10px 14px 92px 14px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    #tabHomeView {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-bottom: 16px;
    }

    .greeting-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--white);
      border: 1px solid rgba(16, 185, 129, 0.18);
      border-radius: var(--radius-lg);
      padding: 9px 12px;
      box-shadow: var(--shadow-card);
      flex-shrink: 0;
    }

    .greeting-user {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .avatar-monogram {
      width: 36px;
      height: 36px;
      border-radius: 11px;
      background: linear-gradient(135deg, var(--emerald-600) 0%, var(--teal-700) 100%);
      color: var(--white);
      font-size: 1rem;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .greeting-sub {
      font-size: 0.66rem;
      color: var(--slate-500);
      font-weight: 700;
    }

    .greeting-name {
      font-size: 0.9rem;
      font-weight: 900;
      color: var(--slate-900);
    }

    .counterparty-pill {
      background: var(--emerald-50);
      border: 1px solid #a7f3d0;
      color: var(--emerald-800);
      border-radius: 10px;
      padding: 5px 9px;
      text-align: left;
      max-width: 150px;
    }

    .counterparty-pill small {
      display: block;
      font-size: 0.6rem;
      color: var(--emerald-700);
      font-weight: 700;
    }

    .counterparty-pill strong {
      display: block;
      font-size: 0.74rem;
      font-weight: 900;
      color: var(--emerald-900);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .wallet-hero-card {
      position: relative;
      background: linear-gradient(145deg, #ffffff 0%, #e9f9f1 65%, #dcf5ea 100%);
      border: 1.5px solid #86efac;
      border-radius: var(--radius-xl);
      padding: 13px 15px;
      box-shadow: var(--shadow-wallet);
      overflow: hidden;
      flex-shrink: 0;
    }

    .wallet-top-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }

    .wallet-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: var(--white);
      border: 1px solid #a7f3d0;
      color: var(--emerald-800);
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 900;
    }

    .eye-toggle-btn {
      background: var(--white);
      border: 1px solid #cbd5e1;
      color: var(--slate-700);
      border-radius: 9px;
      padding: 3px 9px;
      font-size: 0.7rem;
      font-weight: 800;
      cursor: pointer;
    }

    .wallet-balance-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin: 4px 0 8px 0;
    }

    .wallet-balance-label {
      font-size: 0.7rem;
      color: var(--slate-500);
      font-weight: 800;
      display: block;
    }

    .wallet-main-amount {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--emerald-950);
      line-height: 1.15;
    }

    .wallet-currency-chip {
      background: var(--emerald-700);
      color: var(--white);
      padding: 4px 10px;
      border-radius: 10px;
      font-size: 0.74rem;
      font-weight: 900;
    }

    .wallet-id-strip {
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: var(--radius-md);
      padding: 6px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .wallet-id-text {
      font-size: 0.74rem;
      color: var(--slate-700);
      font-weight: 800;
    }

    .wallet-id-text b {
      color: var(--emerald-900);
      font-size: 0.82rem;
    }

    .mini-copy-btn {
      background: var(--emerald-50);
      border: 1px solid #6ee7b7;
      color: var(--emerald-800);
      border-radius: 8px;
      padding: 3px 9px;
      font-size: 0.7rem;
      font-weight: 900;
      cursor: pointer;
    }

    .wallet-sub-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
      margin-top: 7px;
    }

    .wallet-stat-box {
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid #d1fae5;
      border-radius: 10px;
      padding: 5px 9px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.7rem;
      font-weight: 800;
    }

    .currency-switcher {
      display: flex;
      gap: 5px;
      background: var(--slate-100);
      padding: 3px;
      border-radius: 12px;
      border: 1px solid var(--slate-200);
      flex-shrink: 0;
    }

    .curr-pill-btn {
      flex: 1;
      padding: 6px 5px;
      border: none;
      border-radius: 9px;
      background: transparent;
      color: var(--slate-500);
      font-size: 0.76rem;
      font-weight: 900;
      cursor: pointer;
    }

    .curr-pill-btn.active {
      background: var(--white);
      color: var(--emerald-800);
      box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
    }

    .quick-grid-card {
      background: var(--white);
      border: 1px solid var(--slate-200);
      border-radius: var(--radius-xl);
      padding: 11px;
      box-shadow: var(--shadow-card);
      flex-shrink: 0;
    }

    .section-heading-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      padding: 0 2px;
    }

    .section-heading-row h3 {
      font-size: 0.84rem;
      font-weight: 900;
      color: var(--slate-900);
    }

    .section-heading-row span {
      font-size: 0.66rem;
      color: var(--slate-500);
      font-weight: 700;
    }

    .quick-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
    }

    .quick-tile {
      background: transparent;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      padding: 3px 2px;
      border-radius: 12px;
    }

    .quick-tile:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    .quick-icon-box {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: var(--emerald-50);
      border: 1px solid #bbf7d0;
      color: var(--emerald-700);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.15rem;
    }

    .quick-tile.active-mode .quick-icon-box {
      background: linear-gradient(135deg, var(--emerald-600) 0%, var(--teal-700) 100%);
      color: var(--white);
      border-color: var(--emerald-700);
    }

    .quick-label {
      font-size: 0.68rem;
      font-weight: 800;
      color: var(--slate-700);
      text-align: center;
      line-height: 1.25;
    }

    .action-panel {
      background: var(--white);
      border: 1.5px solid #a7f3d0;
      border-radius: var(--radius-xl);
      padding: 14px;
      box-shadow: var(--shadow-card);
    }

    .action-panel.collapsed {
      display: none !important;
    }

    .panel-banner-header {
      background: linear-gradient(135deg, var(--emerald-800) 0%, var(--teal-700) 100%);
      color: var(--white);
      border-radius: var(--radius-lg);
      padding: 12px 14px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .panel-banner-header h4 {
      font-size: 0.92rem;
      font-weight: 900;
    }

    .form-group {
      margin-bottom: 10px;
    }

    .form-group label {
      display: block;
      font-size: 0.76rem;
      font-weight: 800;
      color: var(--slate-800);
      margin-bottom: 4px;
    }

    input, select, textarea {
      width: 100%;
      padding: 11px 12px;
      background: var(--slate-50);
      border: 1.5px solid var(--slate-200);
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      font-weight: 800;
      color: var(--slate-900);
      text-align: center;
      outline: none;
    }

    input:focus, select:focus, textarea:focus {
      background: var(--white);
      border-color: var(--emerald-600);
    }

    .recipient-preview-box {
      background: var(--teal-50);
      border: 1.5px solid #99f6e4;
      border-radius: var(--radius-md);
      padding: 9px 12px;
      margin-bottom: 10px;
      font-size: 0.76rem;
      font-weight: 800;
      color: var(--emerald-900);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .recipient-preview-box.invalid {
      background: var(--danger-soft);
      border-color: #fecaca;
      color: #991b1b;
    }

    .calc-summary-box {
      background: var(--emerald-50);
      border: 1px solid #a7f3d0;
      border-radius: var(--radius-md);
      padding: 8px 12px;
      font-size: 0.74rem;
      font-weight: 800;
      color: var(--emerald-800);
      text-align: center;
      margin-bottom: 8px;
      flex-shrink: 0;
    }

    .calc-summary-box.error {
      background: var(--danger-soft);
      border-color: #fca5a5;
      color: #b91c1c;
    }

    .btn {
      width: 100%;
      padding: 11px 14px;
      border: none;
      border-radius: var(--radius-md);
      font-size: 0.88rem;
      font-weight: 900;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-decoration: none;
    }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }

    .btn-primary {
      background: linear-gradient(135deg, var(--emerald-600) 0%, var(--teal-700) 100%);
      color: var(--white);
    }

    .btn-whatsapp {
      background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
      color: var(--white);
    }

    .btn-outline {
      background: var(--white);
      color: var(--slate-800);
      border: 1.5px solid var(--slate-200);
    }

    .btn-soft-emerald {
      background: var(--emerald-50);
      color: var(--emerald-800);
      border: 1px solid #a7f3d0;
    }

    .menu-stack-card {
      background: var(--white);
      border: 1px solid var(--slate-200);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-card);
    }

    .menu-row-item {
      width: 100%;
      background: var(--white);
      border: none;
      border-bottom: 1px solid var(--slate-100);
      padding: 12px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      text-align: right;
    }
    .menu-row-item:last-child { border-bottom: none; }

    .menu-row-right {
      display: flex;
      align-items: center;
      gap: 11px;
    }

    .menu-row-icon {
      width: 36px;
      height: 36px;
      border-radius: 11px;
      background: var(--emerald-50);
      color: var(--emerald-700);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      flex-shrink: 0;
    }

    .menu-row-icon.danger {
      background: var(--danger-soft);
      color: var(--danger);
    }

    .menu-row-title {
      font-size: 0.84rem;
      font-weight: 900;
      color: var(--slate-900);
      display: block;
    }

    .menu-row-sub {
      font-size: 0.7rem;
      color: var(--slate-500);
      font-weight: 700;
      display: block;
    }

    .tx-feed-card {
      background: var(--white);
      border: 1px solid var(--slate-200);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-card);
    }

    .tx-feed-head {
      padding: 11px 14px;
      background: var(--slate-50);
      border-bottom: 1px solid var(--slate-200);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .day-divider {
      background: var(--emerald-900);
      color: var(--white);
      padding: 6px 14px;
      font-size: 0.72rem;
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .tx-item-row {
      padding: 11px 14px;
      border-bottom: 1px solid var(--slate-100);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }
    .tx-item-row:last-child { border-bottom: none; }

    .tx-badge-icon {
      width: 36px;
      height: 36px;
      border-radius: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      font-weight: 900;
      flex-shrink: 0;
    }
    .tx-badge-icon.credit { background: var(--emerald-50); color: var(--emerald-700); border: 1px solid #a7f3d0; }
    .tx-badge-icon.debit { background: var(--danger-soft); color: var(--danger); border: 1px solid #fecaca; }

    .tx-main-info { flex: 1; min-width: 0; }
    .tx-op-title { font-size: 0.82rem; font-weight: 900; color: var(--slate-900); }
    .tx-desc-sub {
      font-size: 0.68rem;
      color: var(--slate-500);
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2px;
    }

    .tx-amount-col { text-align: left; flex-shrink: 0; }
    .tx-amt-val { font-size: 0.85rem; font-weight: 900; display: block; }
    .tx-amt-val.credit { color: var(--emerald-700); }
    .tx-amt-val.debit { color: var(--danger); }
    .tx-time-meta { font-size: 0.66rem; color: var(--slate-500); font-weight: 700; }

    .empty-state-box {
      padding: 28px 16px;
      text-align: center;
    }

    .bottom-nav-bar {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 500px;
      background: rgba(255, 255, 255, 0.99);
      border-top: 1.5px solid #cbd5e1;
      padding: 6px 8px calc(8px + env(safe-area-inset-bottom)) 8px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
      z-index: 2000;
      box-shadow: var(--shadow-nav);
    }

    @media (min-width: 540px) {
      .bottom-nav-bar {
        bottom: 14px;
        border-radius: 0 0 24px 24px;
        max-width: 500px;
      }
    }

    .nav-tab-btn {
      background: transparent;
      border: none;
      border-radius: 12px;
      padding: 5px 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      cursor: pointer;
      color: var(--slate-500);
    }

    .nav-tab-btn .nav-icon { font-size: 1.1rem; line-height: 1; }
    .nav-tab-btn .nav-text { font-size: 0.66rem; font-weight: 800; }
    .nav-tab-btn.active { background: var(--emerald-50); color: var(--emerald-800); }

    .center-dialog-backdrop {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(6, 40, 30, 0.65);
      z-index: 3000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }

    .center-dialog-box {
      background: var(--white);
      width: 100%;
      max-width: 390px;
      border-radius: var(--radius-xl);
      padding: 20px 16px;
      text-align: center;
      box-shadow: 0 24px 50px rgba(0, 0, 0, 0.25);
      border: 1.5px solid #bbf7d0;
      max-height: 90dvh;
      overflow-y: auto;
    }

    .fullscreen-modal {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: var(--slate-50);
      z-index: 2500;
      display: flex;
      flex-direction: column;
      transform: translateY(100%);
      transition: transform 0.22s ease;
      visibility: hidden;
    }
    .fullscreen-modal.open {
      transform: translateY(0);
      visibility: visible;
    }

    .modal-header {
      padding: 13px 16px;
      background: linear-gradient(135deg, var(--emerald-800) 0%, var(--teal-700) 100%);
      color: var(--white);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-scroll-body {
      flex: 1;
      padding: 14px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .receipt-box {
      background: var(--white);
      border: 1.5px solid var(--slate-200);
      border-radius: var(--radius-lg);
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .receipt-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--slate-100);
      padding-bottom: 8px;
      gap: 10px;
    }
    .receipt-row:last-child { border-bottom: none; padding-bottom: 0; }
    .receipt-label { font-size: 0.76rem; color: var(--slate-500); font-weight: 800; }
    .receipt-val { font-size: 0.84rem; color: var(--slate-900); font-weight: 900; text-align: left; }

    .loading-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(6, 40, 30, 0.58);
      z-index: 3800;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }

    .loading-card {
      background: var(--white);
      border-radius: 20px;
      padding: 22px 24px;
      text-align: center;
      max-width: 300px;
      width: 100%;
      border: 2px solid #a7f3d0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 9px;
    }

    .spinner-ring {
      width: 40px;
      height: 40px;
      border: 4px solid var(--emerald-100);
      border-top: 4px solid var(--emerald-600);
      border-radius: 50%;
      animation: spinAnim 0.75s linear infinite;
    }
    @keyframes spinAnim { to { transform: rotate(360deg); } }

    .choice-option-card {
      width: 100%;
      padding: 11px 12px;
      border-radius: 12px;
      border: 1.5px solid var(--slate-200);
      background: var(--slate-50);
      color: var(--slate-900);
      font-size: 0.82rem;
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      margin-bottom: 8px;
      text-align: right;
    }
    .choice-option-card.active {
      background: var(--emerald-50);
      border-color: var(--emerald-600);
      color: var(--emerald-900);
    }

    .admin-notice-card {
      background: var(--white);
      border: 1.5px solid #a7f3d0;
      border-radius: var(--radius-xl);
      padding: 15px 14px;
      box-shadow: var(--shadow-card);
      text-align: center;
    }

    .admin-notice-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: var(--emerald-50);
      border: 1px solid #6ee7b7;
      color: var(--emerald-800);
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 900;
      margin-bottom: 8px;
    }

    .admin-phone-box {
      background: var(--emerald-50);
      border: 1.5px solid #86efac;
      border-radius: var(--radius-md);
      padding: 9px 12px;
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .launch-hub-card {
      background: linear-gradient(155deg, #ffffff 0%, #f1fbf6 100%);
      border: 1.5px solid #86efac;
      border-radius: var(--radius-xl);
      padding: 13px;
      box-shadow: var(--shadow-card);
    }

    .launch-hub-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .launch-hub-header h4 {
      font-size: 0.88rem;
      font-weight: 900;
      color: var(--emerald-950);
    }

    .launch-hub-header span {
      font-size: 0.68rem;
      font-weight: 800;
      color: var(--emerald-700);
      background: var(--emerald-50);
      border: 1px solid #a7f3d0;
      padding: 2px 8px;
      border-radius: 999px;
    }

    .three-option-menu {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .fancy-menu-option {
      width: 100%;
      background: var(--white);
      border: 1.5px solid #bbf7d0;
      border-radius: var(--radius-lg);
      padding: 11px 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      text-align: right;
      box-shadow: 0 3px 10px rgba(6, 78, 59, 0.05);
    }

    .fancy-menu-option.active {
      border-color: var(--emerald-600);
      background: var(--emerald-50);
    }

    .fancy-menu-option.disabled-service {
      opacity: 0.55;
      cursor: not-allowed;
      border-color: var(--slate-200);
      background: var(--slate-50);
    }

    .fancy-opt-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .fancy-opt-badge {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--emerald-600) 0%, var(--teal-700) 100%);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.05rem;
      font-weight: 900;
      flex-shrink: 0;
    }

    .fancy-opt-title {
      font-size: 0.86rem;
      font-weight: 900;
      color: var(--slate-900);
      display: block;
    }

    .fancy-opt-sub {
      font-size: 0.69rem;
      font-weight: 700;
      color: var(--slate-500);
      display: block;
      margin-top: 2px;
    }

    .fancy-opt-cta {
      background: var(--emerald-50);
      border: 1px solid #6ee7b7;
      color: var(--emerald-800);
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 0.72rem;
      font-weight: 900;
      flex-shrink: 0;
    }

    .mandatory-sync-banner {
      background: var(--warning-soft);
      border: 1.5px solid #fcd34d;
      border-radius: var(--radius-md);
      padding: 9px 11px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .mandatory-sync-text {
      font-size: 0.72rem;
      font-weight: 900;
      color: #92400e;
      line-height: 1.45;
    }

    .mandatory-sync-btn {
      background: var(--warning);
      color: var(--white);
      border: none;
      border-radius: 9px;
      padding: 6px 10px;
      font-size: 0.72rem;
      font-weight: 900;
      cursor: pointer;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .admin-toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--slate-50);
      border: 1px solid var(--slate-200);
      border-radius: var(--radius-md);
      padding: 10px 12px;
      margin-bottom: 8px;
      font-size: 0.78rem;
      font-weight: 800;
      color: var(--slate-800);
    }

    .admin-toggle-row input[type="checkbox"] {
      width: 20px;
      height: 20px;
      accent-color: var(--emerald-600);
      cursor: pointer;
    }

    .admin-badge-pill {
      display: inline-block;
      background: var(--emerald-50);
      color: var(--emerald-800);
      border: 1px solid #6ee7b7;
      border-radius: 999px;
      padding: 2px 9px;
      font-size: 0.68rem;
      font-weight: 900;
    }

    .info-callout-box {
      background: var(--emerald-50);
      border: 1px solid #a7f3d0;
      border-radius: var(--radius-md);
      padding: 9px 11px;
      margin-bottom: 10px;
      font-size: 0.72rem;
      font-weight: 800;
      color: var(--emerald-900);
      line-height: 1.55;
      text-align: right;
    }

    .warn-callout-box {
      background: var(--warning-soft);
      border: 1px solid #fcd34d;
      border-radius: var(--radius-md);
      padding: 9px 11px;
      margin-bottom: 10px;
      font-size: 0.72rem;
      font-weight: 800;
      color: #92400e;
      line-height: 1.55;
      text-align: right;
    }

    .admin-report-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
      margin: 8px 0 10px 0;
    }

    .admin-report-stat {
      background: var(--emerald-50);
      border: 1px solid #a7f3d0;
      border-radius: 12px;
      padding: 9px 10px;
      text-align: right;
    }

    .admin-report-stat small {
      display: block;
      font-size: 0.66rem;
      font-weight: 800;
      color: var(--emerald-700);
    }

    .admin-report-stat strong {
      display: block;
      font-size: 0.84rem;
      font-weight: 900;
      color: var(--emerald-950);
      margin-top: 2px;
    }

    .admin-mini-list {
      background: var(--slate-50);
      border: 1px solid var(--slate-200);
      border-radius: 12px;
      padding: 8px 10px;
      margin-bottom: 10px;
      max-height: 150px;
      overflow-y: auto;
      text-align: right;
    }

    .admin-mini-item {
      padding: 5px 0;
      border-bottom: 1px dashed var(--slate-200);
      font-size: 0.72rem;
      font-weight: 800;
      color: var(--slate-800);
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }

    .admin-mini-item:last-child {
      border-bottom: none;
    }


    .credit-wallet-card {
      background: linear-gradient(145deg, #ffffff 0%, #effcf6 60%, #e0f7ec 100%);
      border: 1.5px solid #6ee7b7;
      border-radius: var(--radius-xl);
      padding: 12px 14px;
      box-shadow: var(--shadow-card);
      flex-shrink: 0;
    }
    .credit-wallet-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }
    .credit-wallet-pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: var(--white);
      border: 1px solid #6ee7b7;
      color: var(--emerald-900);
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 900;
    }
    .credit-wallet-balance-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 4px 0 8px 0;
    }
    .credit-wallet-balance-val {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--emerald-950);
    }
    .credit-wallet-actions {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 6px;
      margin-top: 8px;
    }
    .credit-wallet-act-btn {
      padding: 8px 6px;
      border-radius: 10px;
      border: 1px solid #a7f3d0;
      background: var(--white);
      color: var(--emerald-900);
      font-size: 0.7rem;
      font-weight: 900;
      cursor: pointer;
      text-align: center;
    }
    .credit-wallet-act-btn.primary-cw {
      background: linear-gradient(135deg, var(--emerald-600) 0%, var(--teal-700) 100%);
      color: var(--white);
      border-color: transparent;
    }

    .eng-num { font-family: 'Vazirmatn', Tahoma, sans-serif; direction: ltr; display: inline-block; }
    .hidden { display: none !important; }
  
    .tx-badge-icon.verified-green {
      background: #dcfce7 !important;
      color: #15803d !important;
      border: 1.5px solid #22c55e !important;
    }

  </style>
</head>
<body>

  <div id="realLoadingOverlay" class="loading-overlay hidden">
    <div class="loading-card">
      <div class="spinner-ring"></div>
      <div id="loadingOverlayTitle" style="font-size:0.9rem; font-weight:900; color:var(--slate-900);">در حال همگام‌سازی...</div>
      <div id="loadingOverlaySub" style="font-size:0.74rem; color:var(--slate-500); font-weight:700;">لطفاً صبر کنید</div>
    </div>
  </div>

  <div class="app-viewport">
    <header class="top-bar">
      <div class="top-bar-brand">
        <div class="brand-shield">🛡️</div>
        <div class="brand-texts">
          <h1>امانت‌داری کریمی</h1>
          <span id="headerSubtitleText">سامانه مالی و شارژ مشتریان</span>
        </div>
      </div>
      <div class="top-bar-actions">
        <button type="button" id="headerRefreshBtn" class="icon-circle-btn hidden" title="بروزرسانی" onclick="refreshAccountData()">🔄</button>
        <a id="headerSupportWaBtn" href="https://wa.me/9647721878997" target="_blank" class="icon-circle-btn" title="پشتیبانی">💬</a>
      </div>
    </header>

    <main id="appBody" class="app-body">

      <!-- گام ۱: ورود با شماره تماس -->
      <div id="phoneSection">
        <div class="wallet-hero-card" style="margin-bottom:12px;">
          <div class="wallet-top-meta">
            <span class="wallet-badge">حساب مشتریان</span>
          </div>
          <h2 style="font-size:1.1rem; font-weight:900; color:var(--emerald-950); margin-bottom:4px;">ورود به حساب</h2>
          <p style="font-size:0.78rem; color:var(--slate-700);">شماره تماس ثبت‌شده خود را وارد کنید.</p>
        </div>

        <div class="quick-grid-card" style="margin-bottom:12px;">
          <div class="form-group">
            <label for="phoneInput">شماره تماس</label>
            <input type="tel" inputmode="numeric" id="phoneInput" placeholder="077xxxxxxxx" dir="ltr" onkeydown="if(event.key==='Enter') checkPhone()">
          </div>
          <button type="button" class="btn btn-primary" onclick="checkPhone()">ادامه</button>

          <button type="button" class="btn btn-soft-emerald" style="margin-top:8px;" onclick="openSelfRegister()">افتتاح حساب جدید</button>

          <div id="biometricBtnWrapper" class="hidden" style="margin-top:8px;">
            <button type="button" class="btn btn-soft-emerald" onclick="loginWithBiometric()">ورود با اثر انگشت / قفل گوشی</button>
          </div>
        </div>
      </div>

      <!-- گام ۲: ورود با پین / پسورد یا ایجاد رمز برای حساب بدون رمز -->
      <div id="accountSection" class="hidden" style="margin:auto 0;">
        <div class="quick-grid-card" style="text-align:center; padding:20px 16px;">
          <div id="greetingMsg" style="font-size:1rem; font-weight:900; color:var(--slate-900); margin-bottom:4px;"></div>
          <div id="candidateManagerHint" style="font-size:0.74rem; color:var(--emerald-700); font-weight:800; margin-bottom:12px;"></div>
          <input type="hidden" id="accountIdInput">
          <div id="loginPinRequiredBox" class="form-group">
            <label for="loginAccountPinInput">پین / پسورد حساب</label>
            <input type="password" id="loginAccountPinInput" placeholder="پین یا پسورد خود را وارد کنید" dir="ltr" onkeydown="if(event.key==='Enter') verifyAccount()">
          </div>
          <div id="legacyNoPinSetupBox" class="warn-callout-box hidden">
            <div style="margin-bottom:6px;">ایجاد رمز جدید برای حساب:</div>
            <div class="form-group" style="margin-bottom:6px;">
              <label for="legacyInitialPinInput">ایجاد پسورد / پین جدید</label>
              <input type="password" id="legacyInitialPinInput" placeholder="پسورد جدید" dir="ltr">
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <label for="legacyInitialPinConfirmInput">تکرار پسورد / پین جدید</label>
              <input type="password" id="legacyInitialPinConfirmInput" placeholder="تکرار پسورد" dir="ltr">
            </div>
          </div>
          <button type="button" class="btn btn-primary" onclick="verifyAccount()">ورود با پین / پسورد</button>
          <button type="button" class="btn btn-outline" style="margin-top:8px;" onclick="navigateToStep('phone')">بازگشت</button>
        </div>
      </div>

      <!-- گام ۳: افتتاح حساب جدید -->
      <div id="registerSection" class="hidden">
        <div class="quick-grid-card">
          <div class="panel-banner-header">
            <h4>افتتاح حساب جدید</h4>
          </div>
          <div class="warn-callout-box">
            رمز حداقل ۶ کاراکتر شامل حروف کوچک، بزرگ و عدد؛ شماره همراه با + و کد کشور.
          </div>
          <div class="form-group">
            <label for="regAccId">شناسه حساب (Account ID)</label>
            <input type="text" id="regAccId" dir="ltr" readonly>
          </div>
          <div class="form-group">
            <label for="regFullName">نام و نام خانوادگی</label>
            <input type="text" id="regFullName">
          </div>
          <div class="form-group">
            <label for="regPhone">شماره همراه (با + و کد کشور)</label>
            <input type="tel" id="regPhone" placeholder="+[کد کشور]..." dir="ltr">
          </div>
          <div class="form-group">
            <label for="regPin">رمز ثابت / پین (حروف کوچک، بزرگ و عدد)</label>
            <input type="password" id="regPin" dir="ltr">
          </div>
          <div class="form-group">
            <label for="regPinConfirm">تکرار رمز ثابت</label>
            <input type="password" id="regPinConfirm" dir="ltr">
          </div>
          <button type="button" class="btn btn-primary" onclick="submitRealAccountCreation()">ثبت حساب</button>
          <button type="button" class="btn btn-outline" style="margin-top:8px;" onclick="navigateToStep('phone')">بازگشت</button>
        </div>
      </div>

      <!-- گام ۴: محیط اصلی حساب مشتری -->
      <div id="dashboardSection" class="hidden" style="display:flex; flex-direction:column; gap:10px;">

        <!-- تب ۱: صفحه اصلی -->
        <div id="tabHomeView">
          <div class="greeting-row">
            <div class="greeting-user">
              <div id="userAvatarLetter" class="avatar-monogram">م</div>
              <div>
                <span class="greeting-sub">خوش آمدید</span>
                <div id="dashName" class="greeting-name">---</div>
              </div>
            </div>
            <div class="counterparty-pill">
              <small>طرف حساب</small>
              <strong id="dashCounterpartyName">محمد شریف</strong>
            </div>
          </div>

          <div class="wallet-hero-card">
            <div class="wallet-top-meta">
              <span class="wallet-badge">موجودی حساب</span>
              <button type="button" class="eye-toggle-btn" onclick="toggleBalanceVisibility()">
                <span id="eyeToggleIcon">👁️</span>
              </button>
            </div>

            <div class="wallet-balance-row">
              <div>
                <span class="wallet-balance-label">مانده خالص (<span id="odometerCurrencyLabel">IQD</span>)</span>
                <div id="odometerValue" class="wallet-main-amount eng-num">0</div>
              </div>
              <span id="walletCurrBadge" class="wallet-currency-chip eng-num">IQD</span>
            </div>

            <div class="wallet-id-strip">
              <div class="wallet-id-text">کد حساب: <b id="dashAccountId" class="eng-num">---</b></div>
              <button type="button" class="mini-copy-btn" onclick="copyAccountId()">کپی</button>
            </div>

            <div class="wallet-sub-stats">
              <div class="wallet-stat-box">
                <span style="color:var(--slate-500);">بستانکار (+)</span>
                <span id="odometerCredit" class="eng-num" style="color:var(--emerald-700);">0</span>
              </div>
              <div class="wallet-stat-box">
                <span style="color:var(--slate-500);">بدهکار (-)</span>
                <span id="odometerDebit" class="eng-num" style="color:var(--danger);">0</span>
              </div>
            </div>
          </div>


          <div class="credit-wallet-card" id="creditWalletHomeCard">
            <div class="credit-wallet-top">
              <span class="credit-wallet-pill">📲 کیف پول ارسال کردیت (IQD)</span>
              <button type="button" class="mini-copy-btn" onclick="copyCreditWalletId()">کپی آیدی کیف</button>
            </div>
            <div class="credit-wallet-balance-row">
              <div>
                <span class="wallet-balance-label">موجودی کیف کردیت (همیشه ≥ ۰)</span>
                <div id="creditWalletBalanceDisplay" class="credit-wallet-balance-val eng-num">0</div>
              </div>
              <span class="wallet-currency-chip eng-num">IQD</span>
            </div>
            <div class="wallet-id-strip">
              <div class="wallet-id-text">آیدی کیف پول: <b id="dashCreditWalletId" class="eng-num">CW---</b></div>
              <span style="font-size:0.68rem; color:var(--emerald-800); font-weight:800;">نرخ: <span id="dashCreditWalletRate" class="eng-num">24.5</span> IQD</span>
            </div>
            <div class="credit-wallet-actions">
              <button type="button" class="credit-wallet-act-btn primary-cw" onclick="openCreditWalletModal('from_main')">از حساب به کیف</button>
              <button type="button" class="credit-wallet-act-btn" onclick="openCreditWalletModal('wallet_transfer')">ارسال بین کیف‌ها</button>
              <button type="button" class="credit-wallet-act-btn" onclick="openCreditWalletModal('tx_history')">تراکنش‌های کیف</button>
            </div>
          </div>

          <div class="currency-switcher" id="currencyTabs"></div>

          <div class="quick-grid-card">
            <div class="section-heading-row">
              <h3>دسترسی سریع</h3>
              <span id="lastSyncTimeText">آماده</span>
            </div>
            <div class="quick-grid" style="grid-template-columns: repeat(5, 1fr);">
              <button type="button" class="quick-tile" id="qTileTransfer" onclick="openServiceForm('transfer')">
                <div class="quick-icon-box">⇄</div>
                <span class="quick-label">انتقال موجودی</span>
              </button>
              <button type="button" class="quick-tile" id="qTileAfn" onclick="openServiceForm('afn')">
                <div class="quick-icon-box">📲</div>
                <span class="quick-label">ارسال کردیت</span>
              </button>
              <button type="button" class="quick-tile" id="qTileIq" onclick="openServiceForm('iq')">
                <div class="quick-icon-box">🇮🇶</div>
                <span class="quick-label">شارژ عراق</span>
              </button>
              <button type="button" class="quick-tile" id="qTileChargeAcc" onclick="openChargeAccountModal()">
                <div class="quick-icon-box">💳</div>
                <span class="quick-label">شارژ کردن حساب</span>
              </button>
              <button type="button" class="quick-tile" id="qTileTxQuick" onclick="switchBottomTab('tx')">
                <div class="quick-icon-box">🧾</div>
                <span class="quick-label">تراکنش‌ها</span>
              </button>
            </div>
          </div>

          <div class="admin-notice-card" id="homeAnnouncementCard">
            <div class="admin-notice-badge">📢 اطلاعیه و راهنمای مشتریان</div>
            <div id="homeAnnouncementText" style="font-size:0.8rem; font-weight:800; color:var(--emerald-950); line-height:1.75; text-align:right;">
              شما با این برنامه می‌توانید خودتان در هر زمان به شماره‌های افغانستان کردیت ارسال کنید. همچنین آخرین اطلاعیه‌ها، پیشنهادات و پیام‌های مدیریت در همین بخش نمایش داده می‌شوند.
            </div>
          </div>
        </div>

        <!-- تب ۲: تراکنش‌ها و تراکنش‌های شارژ در پایین -->
        <div id="tabTxView" class="hidden" style="display:flex; flex-direction:column; gap:12px;">
          <div class="tx-feed-card">
            <div class="tx-feed-head">
              <span style="font-size:0.88rem; font-weight:900; color:var(--slate-900);">تراکنش‌ها</span>
              <span id="txCountBadge" class="eng-num" style="font-size:0.72rem; background:var(--emerald-50); color:var(--emerald-800); border:1px solid #a7f3d0; padding:2px 8px; border-radius:8px; font-weight:800;">0</span>
            </div>
            <div id="transactionsContainer"></div>
          </div>

          <div class="tx-feed-card" id="bottomChargeTxSection">
            <div class="tx-feed-head" style="background:#ecfdf5; border-bottom-color:#a7f3d0;">
              <span style="font-size:0.88rem; font-weight:900; color:#065f46;">📲 تراکنش‌های شارژ رسمی</span>
              <span id="chargeTabCountBadge" class="eng-num" style="font-size:0.72rem; background:#dcfce7; color:#15803d; border:1px solid #86efac; padding:2px 8px; border-radius:8px; font-weight:900;">0</span>
            </div>
            <div id="chargeTabTransactionsContainer"></div>
          </div>
        </div>

        <!-- تب تراکنش‌های شارژ در منوی پایین -->
        <div id="tabChargeTxView" class="hidden" style="display:flex; flex-direction:column; gap:10px;">
          <div class="tx-feed-card">
            <div class="tx-feed-head">
              <span style="font-size:0.88rem; font-weight:900; color:var(--slate-900);">تراکنش‌های شارژ</span>
              <span id="chargeTabCountBadge" class="eng-num" style="font-size:0.72rem; background:var(--emerald-50); color:var(--emerald-800); border:1px solid #a7f3d0; padding:2px 8px; border-radius:8px; font-weight:800;">0</span>
            </div>
            <div id="chargeTabTransactionsContainer"></div>
          </div>
        </div>

        <!-- تب ۳: انتقال و شارژ -->
        <div id="tabServicesView" class="hidden" style="display:flex; flex-direction:column; gap:10px;">
          <div class="currency-switcher" style="flex-wrap:wrap;">
            <button type="button" class="curr-pill-btn" id="srvSubTransfer" onclick="openServiceForm('transfer')">⇄ انتقال موجودی</button>
            <button type="button" class="curr-pill-btn" id="srvSubAfn" onclick="openServiceForm('afn')">📲 کردیت</button>
            <button type="button" class="curr-pill-btn" id="srvSubBundles" disabled aria-disabled="true" style="opacity:0.45; cursor:not-allowed; pointer-events:none;">📦 شارژ بسته‌ها (غیرفعال)</button>
            <button type="button" class="curr-pill-btn" id="srvSubIq" onclick="openServiceForm('iq')">🇮🇶 شارژ عراق</button>
          </div>

          <div id="serviceEmptyPlaceholder" class="launch-hub-card">
            <div class="launch-hub-header">
              <h4>انتخاب و باز کردن فرم عملیات</h4>
              <span>فرم بسته است</span>
            </div>
            <div class="three-option-menu">
              <button type="button" class="fancy-menu-option" id="srvMenuOptTransfer" onclick="openServiceForm('transfer')">
                <div class="fancy-opt-left">
                  <div class="fancy-opt-badge">⇄</div>
                  <div>
                    <span class="fancy-opt-title">فرم انتقال موجودی</span>
                    <span class="fancy-opt-sub">انتقال موجودی از طریق اکانت آیدی و تایید پین</span>
                  </div>
                </div>
                <span class="fancy-opt-cta">باز کردن فرم</span>
              </button>

              <button type="button" class="fancy-menu-option" id="srvMenuOptAfn" onclick="openServiceForm('afn')">
                <div class="fancy-opt-left">
                  <div class="fancy-opt-badge">📲</div>
                  <div>
                    <span class="fancy-opt-title">کردیت</span>
                    <span class="fancy-opt-sub">ارسال مستقیم کردیت (فقط کردیت؛ بدون بسته‌های اینترنت و تماس)</span>
                  </div>
                </div>
                <span class="fancy-opt-cta">باز کردن فرم</span>
              </button>

              <div class="fancy-menu-option disabled-service" id="srvMenuOptBundles" aria-disabled="true" style="pointer-events:none; user-select:none;">
                <div class="fancy-opt-left">
                  <div class="fancy-opt-badge">📦</div>
                  <div>
                    <span class="fancy-opt-title">شارژ بسته‌ها</span>
                    <span class="fancy-opt-sub">این گزینه غیرفعال است</span>
                  </div>
                </div>
                <span class="fancy-opt-cta">غیرفعال</span>
              </div>

              <button type="button" class="fancy-menu-option" id="srvMenuOptIq" onclick="openServiceForm('iq')">
                <div class="fancy-opt-left">
                  <div class="fancy-opt-badge">🇮🇶</div>
                  <div>
                    <span class="fancy-opt-title">شارژ عراق</span>
                    <span class="fancy-opt-sub">آسیاسل و زین‌العراق — ثبت تراکنش و ارسال درخواست در واتس‌اپ</span>
                  </div>
                </div>
                <span class="fancy-opt-cta">باز کردن فرم</span>
              </button>

              <button type="button" class="fancy-menu-option" id="srvMenuOptChargeAcc" onclick="openChargeAccountModal()">
                <div class="fancy-opt-left">
                  <div class="fancy-opt-badge">💳</div>
                  <div>
                    <span class="fancy-opt-title">شارژ کردن حساب</span>
                    <span class="fancy-opt-sub">دریافت موجودی از طریق فرد دارای حساب در امانت‌داری کریمی و پیام به ادمین</span>
                  </div>
                </div>
                <span class="fancy-opt-cta">راهنما و پیام</span>
              </button>
            </div>
          </div>

          <!-- پنل شارژ بسته‌ها -->
          <div id="panelTopupBundles" class="action-panel collapsed">
            <div class="panel-banner-header">
              <h4>شارژ بسته‌ها</h4>
              <button type="button" class="mini-copy-btn" onclick="collapseServiceForms()">بستن فرم</button>
            </div>
            <div class="info-callout-box" style="text-align:center; padding:18px 14px;">
              <div style="font-size:1rem; font-weight:900; margin-bottom:6px;">به‌زودی</div>
              <div style="font-size:0.76rem; font-weight:700;">بخش شارژ بسته‌ها به‌زودی فعال خواهد شد. برای ارسال کردیت مستقیم از گزینه «کردیت» استفاده کنید.</div>
            </div>
          </div>

          <!-- پنل ۱: انتقال موجودی -->
          <div id="panelTransfer" class="action-panel collapsed">
            <div class="panel-banner-header">
              <h4>انتقال موجودی حساب به حساب</h4>
              <button type="button" class="mini-copy-btn" onclick="collapseServiceForms()">بستن فرم</button>
            </div>

            <div class="mandatory-sync-banner" id="mandatoryBannerTransfer">
              <span class="mandatory-sync-text" id="mandatoryBannerTextTransfer">قبل از انجام تراکنش حسابت را به‌روزرسانی کن. (اجباری)</span>
              <button type="button" class="mandatory-sync-btn" id="mandatoryBtnTransfer" onclick="mandatoryRefreshBeforeForm('transfer')">به‌روزرسانی اجباری</button>
            </div>

            <div class="form-group">
              <label for="transferTargetAccIdInput">کد حساب مقصد (Account ID)</label>
              <input type="text" id="transferTargetAccIdInput" placeholder="Account ID مقصد" dir="ltr" oninput="previewTransferRecipient()">
            </div>

            <div id="transferRecipientPreview" class="recipient-preview-box invalid">
              <span>مقصد</span>
              <span>کد حساب مقصد (Account ID) را وارد کنید</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1.4fr; gap:8px;" class="form-group">
              <div>
                <label for="transferCurrencySelect">ارز</label>
                <select id="transferCurrencySelect" onchange="recalcTransferBox()"></select>
              </div>
              <div>
                <label for="transferAmountInput">مبلغ</label>
                <input type="number" id="transferAmountInput" dir="ltr" oninput="recalcTransferBox()">
              </div>
            </div>

            <div id="transferCalcBox" class="calc-summary-box">
              موجودی قابل انتقال: <b id="transferAvailBalance" class="eng-num">0</b>
            </div>

            <button type="button" class="btn btn-primary" id="btnExecuteTransfer" onclick="prepareTransferWithPin()">
              تایید و انتقال
            </button>
          </div>

          <!-- پنل ۲: ارسال کردیت (افغانستان) -->
          <div id="panelTopupAfn" class="action-panel collapsed">
            <div class="panel-banner-header">
              <h4>ارسال کردیت</h4>
              <button type="button" class="mini-copy-btn" onclick="collapseServiceForms()">بستن فرم</button>
            </div>

            <div class="mandatory-sync-banner" id="mandatoryBannerAfn">
              <span class="mandatory-sync-text" id="mandatoryBannerTextAfn">قبل از انجام تراکنش حسابت را به‌روزرسانی کن. (اجباری)</span>
              <button type="button" class="mandatory-sync-btn" id="mandatoryBtnAfn" onclick="mandatoryRefreshBeforeForm('afn')">به‌روزرسانی اجباری</button>
            </div>

            <div class="form-group">
              <label for="afnTargetPhone">شماره موبایل مقصد (AFN)</label>
              <input type="tel" id="afnTargetPhone" maxlength="10" placeholder="07xxxxxxxx" dir="ltr" oninput="this.value=this.value.replace(/[^0-9]/g,'')">
            </div>

            <div class="form-group">
              <label for="afnAmountInput">مبلغ (AFN)</label>
              <input type="number" id="afnAmountInput" dir="ltr" oninput="recalcTopupCost()">
            </div>

            <div id="afnCalcBox" class="calc-summary-box">
              معادل دینار (IQD): <b id="afnCalculatedIqd" class="eng-num">0</b> IQD
            </div>

            <div id="topupAfnEligibilityMsg" style="font-size:0.72rem; font-weight:800; color:var(--danger); text-align:center; margin-bottom:6px;"></div>

            <button type="button" class="btn btn-primary" id="btnExecuteTopupAfn" onclick="executeCustomerTopup('afn')">
              تایید و ارسال کردیت
            </button>
          </div>

          <!-- پنل ۳: شارژ عراق -->
          <div id="panelTopupIq" class="action-panel collapsed">
            <div class="panel-banner-header">
              <h4>شارژ عراق</h4>
              <button type="button" class="mini-copy-btn" onclick="collapseServiceForms()">بستن فرم</button>
            </div>

            <div class="mandatory-sync-banner" id="mandatoryBannerIq">
              <span class="mandatory-sync-text" id="mandatoryBannerTextIq">قبل از انجام تراکنش حسابت را به‌روزرسانی کن. (اجباری)</span>
              <button type="button" class="mandatory-sync-btn" id="mandatoryBtnIq" onclick="mandatoryRefreshBeforeForm('iq')">به‌روزرسانی اجباری</button>
            </div>

            <div class="info-callout-box">
              پس از ثبت، درخواست برای دریافت رمز شارژ ارسال می‌شود.
            </div>

            <div class="form-group">
              <label for="iqNetworkSelect">شبکه</label>
              <select id="iqNetworkSelect">
                <option value="Zain (زین عراق)">Zain (زین عراق)</option>
                <option value="AsiaCell (آسیاسل)">AsiaCell (آسیاسل)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="iqCardSelect">مبلغ (IQD)</label>
              <select id="iqCardSelect" onchange="recalcTopupCost()"></select>
            </div>

            <div id="iqCalcBox" class="calc-summary-box">
              مبلغ کسر (IQD): <b id="iqCalculatedIqd" class="eng-num">1,000</b> IQD
            </div>

            <div id="topupIqEligibilityMsg" style="font-size:0.72rem; font-weight:800; color:var(--danger); text-align:center; margin-bottom:6px;"></div>

            <button type="button" class="btn btn-primary" id="btnExecuteTopupIq" onclick="executeCustomerTopup('iq')">
              تایید و ثبت شارژ
            </button>
          </div>
        </div>

        <!-- تب ۴: حساب کاربری -->
        <div id="tabProfileView" class="hidden" style="display:flex; flex-direction:column; gap:10px;">
          <div class="wallet-hero-card">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
              <div id="profileAvatarLetter" class="avatar-monogram">م</div>
              <div>
                <div id="profileFullName" style="font-size:0.96rem; font-weight:900; color:var(--emerald-950);">---</div>
                <div style="font-size:0.72rem; color:var(--emerald-800); font-weight:800;">طرف حساب: <span id="profileCounterpartyName">محمد شریف</span></div>
              </div>
            </div>

            <div class="wallet-id-strip" style="margin-bottom:6px;">
              <div class="wallet-id-text">کد حساب: <b id="profileAccIdVal" class="eng-num">---</b></div>
              <button type="button" class="mini-copy-btn" onclick="copyAccountId()">کپی</button>
            </div>

            <div class="wallet-id-strip">
              <div class="wallet-id-text">شماره تماس: <b id="profilePhoneVal" class="eng-num">---</b></div>
              <button type="button" class="mini-copy-btn" onclick="copyPhoneNumber()">کپی</button>
            </div>
            <div class="wallet-id-strip" style="margin-top:6px;">
              <div class="wallet-id-text">آیدی کیف کردیت: <b id="profileCreditWalletId" class="eng-num">CW---</b> (<span id="profileCreditWalletBal" class="eng-num">0</span> IQD)</div>
              <button type="button" class="mini-copy-btn" onclick="openCreditWalletModal('from_main')">مدیریت کیف</button>
            </div>

          </div>

          <div class="menu-stack-card">
            <button type="button" class="menu-row-item" onclick="openManagementModal()">
              <div class="menu-row-right">
                <div class="menu-row-icon">⚙️</div>
                <div>
                  <span id="mgmtMenuTitle" class="menu-row-title">بخش مدیریت و تنظیمات (app_settings)</span>
                  <span id="mgmtMenuSub" class="menu-row-sub">ورود مدیر و کنترل نرخ و وضعیت خدمات</span>
                </div>
              </div>
              <span class="admin-badge-pill" id="mgmtSessionBadge">مدیریت</span>
            </button>

            <button type="button" class="menu-row-item" onclick="openSetPinModal()">
              <div class="menu-row-right">
                <div class="menu-row-icon">🔒</div>
                <div>
                  <span id="setPinMenuTitle" class="menu-row-title">تغییر رمز ثابت</span>
                </div>
              </div>
              <span style="color:var(--slate-500); font-weight:900;">‹</span>
            </button>

            <button type="button" class="menu-row-item" onclick="toggleBiometricSetting()">
              <div class="menu-row-right">
                <div class="menu-row-icon">🔑</div>
                <div>
                  <span class="menu-row-title">ورود و تایید با اثر انگشت / قفل گوشی</span>
                  <span id="bioStatusSub" class="menu-row-sub">غیرفعال</span>
                </div>
              </div>
              <span style="color:var(--emerald-700); font-weight:900;">تغییر</span>
            </button>

            <button type="button" class="menu-row-item" onclick="toggleTxBiometricSetting()">
              <div class="menu-row-right">
                <div class="menu-row-icon">🛡️</div>
                <div>
                  <span class="menu-row-title">تایید تراکنش با قفل گوشی (اثر انگشت/پین/الگو)</span>
                  <span id="txBioStatusSub" class="menu-row-sub">فعال — رمز ثابت پشتیبان</span>
                </div>
              </div>
              <span style="color:var(--emerald-700); font-weight:900;">تغییر</span>
            </button>

            <button type="button" class="menu-row-item" onclick="openNotificationModeModal()">
              <div class="menu-row-right">
                <div class="menu-row-icon">🔔</div>
                <div>
                  <span class="menu-row-title">تنظیمات اعلان‌ها</span>
                  <span id="notifModeSub" class="menu-row-sub">اعلان با صدا و لرزش</span>
                </div>
              </div>
              <span style="color:var(--emerald-700); font-weight:900;">انتخاب</span>
            </button>

            <button type="button" class="menu-row-item" onclick="logout()">
              <div class="menu-row-right">
                <div class="menu-row-icon danger">🚪</div>
                <div>
                  <span class="menu-row-title" style="color:var(--danger);">خروج از حساب</span>
                </div>
              </div>
              <span style="color:var(--danger); font-weight:900;">‹</span>
            </button>
          </div>
        </div>

      </div>
    </main>

    <!-- منوی ثابت پایین -->
    <nav id="bottomNavBar" class="bottom-nav-bar hidden" style="grid-template-columns: repeat(4, 1fr);">
      <button type="button" class="nav-tab-btn active" id="navHomeBtn" onclick="switchBottomTab('home')">
        <span class="nav-icon">🏠</span>
        <span class="nav-text">صفحه اصلی</span>
      </button>
      <button type="button" class="nav-tab-btn" id="navTxBtn" onclick="switchBottomTab('tx')">
        <span class="nav-icon">🧾</span>
        <span class="nav-text">تراکنش‌ها</span>
      </button>
      <button type="button" class="nav-tab-btn" id="navServicesBtn" onclick="switchBottomTab('services')">
        <span class="nav-icon">⇄</span>
        <span class="nav-text">انتقال و شارژ</span>
      </button>
      <button type="button" class="nav-tab-btn" id="navProfileBtn" onclick="switchBottomTab('profile')">
        <span class="nav-icon">👤</span>
        <span class="nav-text">حساب کاربری</span>
      </button>
    </nav>
  </div>

  <!-- مودال بخش مدیریت عملیاتی و تنظیمات دیتابیس -->
  <div id="managementModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box" style="text-align:right;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <h3 style="font-size:0.96rem; font-weight:900; color:var(--emerald-950);">بخش مدیریت عملیاتی</h3>
        <span class="admin-badge-pill" id="mgmtActiveAdminLabel">قفل</span>
      </div>

      <!-- فرم ورود مدیر -->
      <div id="mgmtLoginBox">
        <p style="font-size:0.74rem; color:var(--slate-600); margin-bottom:10px; line-height:1.5;">
          برای دسترسی به تنظیمات فعال/غیرفعال بودن بخش‌ها و نرخ تبدیل در جدول <code>app_settings</code>، شناسه/ایمیل مدیر و رمز را وارد کنید.
        </p>
        <div class="form-group">
          <label for="mgmtIdentifierInput">ایمیل یا شناسه مدیر (Admins / Owner)</label>
          <input type="text" id="mgmtIdentifierInput" placeholder="admin@example.com یا ADM-01" dir="ltr">
        </div>
        <div class="form-group">
          <label for="mgmtPinInput">رمز مدیر (Pin)</label>
          <input type="password" id="mgmtPinInput" placeholder="رمز مدیریت" dir="ltr" onkeydown="if(event.key==='Enter') verifyManagementLogin()">
        </div>
        <button type="button" class="btn btn-primary" onclick="verifyManagementLogin()" style="margin-bottom:6px;">ورود به پنل مدیریت</button>
      </div>

      <!-- پنل کنترل تنظیمات پس از ورود مدیر -->
      <div id="mgmtControlsBox" class="hidden">
        <div class="admin-toggle-row">
          <span>فعال بودن انتقال موجودی (transfer_enabled)</span>
          <input type="checkbox" id="cfgTransferEnabled">
        </div>
        <div class="admin-toggle-row">
          <span>فعال بودن ارسال کردیت (topup_afn_enabled)</span>
          <input type="checkbox" id="cfgTopupAfnEnabled">
        </div>
        <div class="admin-toggle-row">
          <span>فعال بودن شارژ عراق (topup_iq_enabled)</span>
          <input type="checkbox" id="cfgTopupIqEnabled">
        </div>
        <div class="admin-toggle-row">
          <span>فعال بودن API کردیت (afn_api_enabled)</span>
          <input type="checkbox" id="cfgAfnApiEnabled">
        </div>

        <div class="form-group">
          <label for="cfgAfnToIqdRate">نرخ تبدیل افغانی به دینار (afn_to_iqd_rate)</label>
          <input type="number" step="0.01" id="cfgAfnToIqdRate" dir="ltr">
        </div>

        <div class="form-group">
          <label for="cfgHomeAnnouncementInput">متن اعلان، پیشنهاد یا پیام صفحه اصلی (قابل اعمال از مدیریت)</label>
          <textarea id="cfgHomeAnnouncementInput" rows="3" placeholder="متن دلخواه خود را برای نمایش در صفحه اصلی بنویسید..."></textarea>
        </div>

        <div class="info-callout-box" style="margin-top:8px;">
          <div style="font-size:0.82rem; font-weight:900; margin-bottom:6px;">مدیریت شارژ عراق (آسیاسل و زین‌العراق — بدون JSON)</div>
          <div class="form-group" style="margin-bottom:6px;">
            <label for="mgmtIqOperatorSelect">انتخاب اپراتور</label>
            <select id="mgmtIqOperatorSelect" onchange="renderAdminIqItemsList()">
              <option value="AsiaCell (آسیاسل)">آسیاسل (AsiaCell)</option>
              <option value="Zain (زین عراق)">زین‌العراق (Zain)</option>
            </select>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;" class="form-group">
            <div>
              <label for="mgmtIqCardPriceInput">قیمت شارژ (IQD)</label>
              <input type="number" id="mgmtIqCardPriceInput" placeholder="مثلاً 5000" dir="ltr">
            </div>
            <div>
              <label for="mgmtIqDeductPriceInput">قیمت آنجا / مبلغ کسر از حساب (IQD)</label>
              <input type="number" id="mgmtIqDeductPriceInput" placeholder="مثلاً 5200" dir="ltr">
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:8px;">
            <button type="button" class="btn btn-primary" onclick="saveAdminIqItemForm()">افزودن / ذخیره مورد</button>
            <button type="button" class="btn btn-outline" onclick="clearAdminIqItemForm()">پاک کردن فرم</button>
          </div>
          <div id="mgmtIqItemsListBox" class="admin-mini-list"></div>
        </div>

        <input type="hidden" id="cfgAfnApiEndpoint" value="/api/iimobile-topup">
        <input type="hidden" id="cfgAfnApiMode" value="proxy_api">
        <textarea id="cfgIqNetworksJson" class="hidden" rows="1"></textarea>
        <textarea id="cfgIqPackagesJson" class="hidden" rows="1"></textarea>

        <button type="button" class="btn btn-primary" onclick="saveAppSettingsToSupabase()" style="margin-bottom:8px;">ذخیره و اعمال تنظیمات در دیتابیس</button>
        <button type="button" class="btn btn-soft-emerald" onclick="reloadAppSettingsFromDb()" style="margin-bottom:10px;">خواندن مجدد از دیتابیس</button>


        <div class="info-callout-box" style="margin-top:8px; background:#f0fdf4; border-color:#4ade80;">
          <div style="font-size:0.82rem; font-weight:900; margin-bottom:6px; color:var(--emerald-950);">افزایش موجودی کیف پول کردیت (وقتی کیف شارژ صفر یا منفی/بدهکار است)</div>
          <div style="font-size:0.7rem; margin-bottom:6px; line-height:1.55;">
            با وارد کردن شناسه حساب (Account ID) یا شماره تماس و مبلغ دیناری (مثلاً 5000)، موجودی کیف پول کردیت همان فرد افزایش می‌یابد و هم‌زمان همان مبلغ به عنوان <b>بدهکار</b> به نام «ارسال به کیف پول کردیت» در <b>حساب اصلی (transactions)</b> او ثبت می‌شود.
          </div>
          <div class="form-group" style="margin-bottom:6px;">
            <label for="mgmtCwTargetAccOrPhone">کد حساب (Account ID) یا شماره تماس</label>
            <input type="text" id="mgmtCwTargetAccOrPhone" placeholder="مثلاً ACC-1001 یا 077xxxxxxxx" dir="ltr">
          </div>
          <div class="form-group" style="margin-bottom:6px;">
            <label for="mgmtCwGrantAmountIqd">مبلغ افزایش کیف کردیت (IQD)</label>
            <input type="number" id="mgmtCwGrantAmountIqd" placeholder="مثلاً 5000" dir="ltr">
          </div>
          <div class="form-group" style="margin-bottom:6px;">
            <label for="mgmtCwGrantDesc">شرح اختیاری</label>
            <input type="text" id="mgmtCwGrantDesc" placeholder="ارسال به کیف پول کردیت (دوست/آشنا)">
          </div>
          <button type="button" class="btn btn-primary" onclick="adminGrantCreditWalletWithMainDebt()">ثبت افزایش کیف کردیت و بدهکار کردن حساب اصلی</button>
          <div id="mgmtCwGrantResult" style="margin-top:6px; font-size:0.74rem; font-weight:900; color:var(--emerald-900); text-align:center;"></div>
        </div>

        <div class="info-callout-box" style="margin-top:8px;">
          <div style="font-size:0.82rem; font-weight:900; margin-bottom:6px;">ریست نمودن رمز طرف و تولیدش</div>
          <div style="font-size:0.7rem; margin-bottom:6px;">شناسه حساب (Account ID) یا شماره تماس مشتری را وارد کنید تا رمز جدید تولید و در ستون PinHash حساب ذخیره شود:</div>
          <div class="form-group" style="margin-bottom:6px;">
            <input type="text" id="mgmtResetAccOrPhoneInput" placeholder="مثلاً ACC-983244 یا 077xxxxxxxx" dir="ltr">
          </div>
          <div class="form-group" style="margin-bottom:6px;">
            <input type="text" id="mgmtCustomOrGeneratedPinInput" placeholder="رمز دلخواه یا خالی برای تولید خودکار ۶ رقمی" dir="ltr">
          </div>
          <button type="button" class="btn btn-soft-emerald" onclick="adminResetAndGenerateAccountPin()">ریست نمودن رمز طرف و تولیدش</button>
          <div id="mgmtGeneratedPinResult" dir="ltr" style="margin-top:6px; font-size:0.76rem; font-weight:900; color:var(--emerald-900); text-align:center;"></div>
        </div>

        <div class="info-callout-box" style="margin-top:8px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:0.82rem; font-weight:900;">گزارش موجودی و فروش شرکت (معیار: AFN)</span>
            <button type="button" class="mini-copy-btn" onclick="renderAdminAfnReports()">به‌روزرسانی گزارش</button>
          </div>
          <div class="form-group" style="margin-bottom:6px;">
            <label for="mgmtAfnCompanyStockInput">موجودی کل شارژ شرکت (AFN)</label>
            <input type="number" id="mgmtAfnCompanyStockInput" value="50000" dir="ltr" oninput="renderAdminAfnReports()">
          </div>
          <div class="admin-report-grid">
            <div class="admin-report-stat">
              <small>میزان فروش کل (AFN)</small>
              <strong id="mgmtTotalSalesAfn" class="eng-num">0 AFN</strong>
            </div>
            <div class="admin-report-stat">
              <small>مجموع فروش امروز (AFN)</small>
              <strong id="mgmtTodaySalesAfn" class="eng-num">0 AFN</strong>
            </div>
            <div class="admin-report-stat">
              <small>شارژ مانده شرکت (AFN)</small>
              <strong id="mgmtRemainingStockAfn" class="eng-num">0 AFN</strong>
            </div>
            <div class="admin-report-stat">
              <small>وضعیت شارژ شرکت</small>
              <strong id="mgmtStockStatusAfn">در دسترس</strong>
            </div>
          </div>
          <div style="font-size:0.72rem; font-weight:900; margin-bottom:4px;">حساب‌هایی که خرید داشته‌اند (به AFN):</div>
          <div id="mgmtBuyersListBox" class="admin-mini-list">---</div>
          <div style="font-size:0.72rem; font-weight:900; margin-bottom:4px;">حساب‌هایی که خرید نداشته‌اند:</div>
          <div id="mgmtNonBuyersListBox" class="admin-mini-list">---</div>
        </div>

        <button type="button" class="btn btn-outline" onclick="logoutManagementSession()" style="margin-bottom:6px;">خروج از حالت مدیریت</button>
      </div>

      <button type="button" class="btn btn-outline" onclick="closeManagementModal()">بستن</button>
    </div>
  </div>

  <!-- مودال شارژ کردن حساب -->
  <div id="chargeAccountModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box" style="text-align:right;">
      <h3 style="font-size:0.96rem; font-weight:900; color:var(--emerald-950); margin-bottom:8px;">شارژ کردن حساب</h3>
      <div class="info-callout-box">
        برای شارژ کردن حساب خود، می‌توانید مبلغ را به فردی که در <b>امانت‌داری کریمی</b> موجودی یا حساب دارد پرداخت کنید تا به حساب شما منتقل شود، یا مستقیماً برای هماهنگی شارژ حساب به ادمین پیام دهید.
      </div>
      <div class="admin-phone-box">
        <span style="font-size:0.74rem; font-weight:800; color:var(--emerald-900);">شماره تماس ادمین:</span>
        <strong id="chargeAccAdminPhone" class="eng-num" style="font-size:0.84rem; color:var(--emerald-950);">9647721878997</strong>
      </div>
      <a id="chargeAccountWhatsAppBtn" href="#" target="_blank" class="btn btn-whatsapp" style="margin-bottom:6px;">پیام به ادمین در واتساپ برای شارژ حساب</a>
      <button type="button" class="btn btn-outline" onclick="closeChargeAccountModal()">بستن</button>
    </div>
  </div>

  <!-- مودال انتخاب وضعیت اعلان‌ها -->
  <div id="notifSettingsModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box">
      <h3 style="font-size:0.96rem; font-weight:900; margin-bottom:6px;">تنظیمات اعلان‌ها</h3>
      <p style="font-size:0.74rem; color:var(--slate-500); margin-bottom:12px;">نحوه دریافت اعلان‌های جدید گوشی را انتخاب کنید:</p>

      <button type="button" class="choice-option-card" id="notifOptSoundVib" onclick="selectNotificationMode('sound_vibration')">
        <span>اعلان با صدا و لرزش</span>
        <span>🔊📳</span>
      </button>
      <button type="button" class="choice-option-card" id="notifOptVibOnly" onclick="selectNotificationMode('vibration_only')">
        <span>اعلان فقط با لرزش</span>
        <span>📳</span>
      </button>
      <button type="button" class="choice-option-card" id="notifOptSilent" onclick="selectNotificationMode('silent')">
        <span>اعلان بی‌صدا و بدون لرزش</span>
        <span>🔕</span>
      </button>
      <button type="button" class="choice-option-card" id="notifOptOff" onclick="selectNotificationMode('off')">
        <span>خاموش کردن کامل اعلان‌ها</span>
        <span>⛔</span>
      </button>

      <button type="button" class="btn btn-outline" onclick="closeNotificationModeModal()">بستن</button>
    </div>
  </div>

  <!-- مودال تایید تراکنش -->
  <div id="txPinConfirmModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box">
      <h3 id="pinModalHeading" style="font-size:0.96rem; font-weight:900; margin-bottom:6px;">تایید تراکنش با پسورد / پین</h3>
      <p id="txPinSummaryText" style="font-size:0.78rem; color:var(--slate-700); line-height:1.6; margin-bottom:8px;"></p>

      <div id="txFallbackPinBox">
        <div class="form-group">
          <input type="password" id="txVerifyPinInput" placeholder="پسورد / پین حساب (اولویت اصلی)" dir="ltr" onkeydown="if(event.key==='Enter') confirmPendingOperation()">
        </div>
        <button type="button" class="btn btn-primary" onclick="confirmPendingOperation()" style="margin-bottom:8px;">تایید تراکنش با پسورد / پین</button>
      </div>

      <div id="txBiometricActionBox" style="margin-bottom:8px;">
        <button type="button" class="btn btn-soft-emerald" onclick="confirmOperationWithDeviceLock()">
          تایید اختیاری با اثر انگشت / قفل گوشی
        </button>
      </div>

      <button type="button" class="btn btn-outline" onclick="closeTxPinConfirmModal()">انصراف</button>
    </div>
  </div>

  <!-- مودال تغییر رمز ثابت -->
  <div id="setPinModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box">
      <h3 style="font-size:0.96rem; font-weight:900; margin-bottom:10px;">تغییر رمز ثابت</h3>
      <div class="form-group"><input type="password" id="oldAccountPinInput" placeholder="رمز فعلی" dir="ltr"></div>
      <div class="form-group"><input type="password" id="newAccountPinInput" placeholder="رمز جدید" dir="ltr"></div>
      <div class="form-group"><input type="password" id="confirmAccountPinInput" placeholder="تکرار رمز جدید" dir="ltr"></div>
      <button type="button" class="btn btn-primary" onclick="saveAccountPassword()" style="margin-bottom:6px;">ذخیره</button>
      <button type="button" class="btn btn-outline" onclick="closeSetPinModal()">انصراف</button>
    </div>
  </div>

  <!-- مودال فعال‌سازی رمز -->
  <div id="legacyPinActivationModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box">
      <h3 style="font-size:0.96rem; font-weight:900; margin-bottom:8px;">رمز ثابت فعال نیست</h3>
      <p style="font-size:0.76rem; color:var(--slate-700); margin-bottom:12px;">برای انجام عملیات، رمز ثابت حساب را از طریق واتساپ فعال کنید.</p>
      <a id="legacyActivateWhatsAppBtn" href="#" target="_blank" class="btn btn-whatsapp" style="margin-bottom:6px;">واتساپ</a>
      <button type="button" class="btn btn-outline" onclick="closeLegacyPinActivationModal()">بستن</button>
    </div>
  </div>

  <!-- مودال اثر انگشت -->
  <div id="biometricPromptModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box">
      <h3 style="font-size:0.96rem; font-weight:900; margin-bottom:8px;">اثر انگشت / قفل گوشی</h3>
      <p style="font-size:0.76rem; color:var(--slate-500); margin-bottom:12px;">ورود سریع و تایید تراکنش با اثر انگشت یا قفل خود گوشی فعال شود؟</p>
      <button type="button" class="btn btn-primary" onclick="confirmEnableBiometric()" style="margin-bottom:6px;">فعال شود</button>
      <button type="button" class="btn btn-outline" onclick="dismissBiometricPrompt()">خیر</button>
    </div>
  </div>

  <!-- مودال شماره یافت نشد -->
  <div id="errorModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box">
      <h3 style="font-size:0.96rem; font-weight:900; color:var(--danger); margin-bottom:8px;">شماره یافت نشد</h3>
      <p style="font-size:0.76rem; color:var(--slate-700); margin-bottom:12px;">این شماره در سیستم ثبت نشده است.</p>
      <a id="modalWhatsAppErrorBtn" href="#" target="_blank" class="btn btn-whatsapp" style="margin-bottom:6px;">واتساپ</a>
      <button type="button" class="btn btn-outline" onclick="closeErrorModal()">بستن</button>
    </div>
  </div>

  <!-- مودال نمایش دقیق پیام انگلیسی سرور شارژ -->
  <div id="topupRawErrorModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box">
      <h3 style="font-size:0.96rem; font-weight:900; color:var(--danger); margin-bottom:8px;">خطا در انجام شارژ</h3>
      <div id="topupRawErrorEnglishText" dir="ltr" style="background:var(--danger-soft); border:1.5px solid #fca5a5; color:#991b1b; border-radius:12px; padding:12px; font-family:monospace, sans-serif; font-size:0.84rem; font-weight:700; text-align:left; word-break:break-word; margin-bottom:12px; line-height:1.5;"></div>
      <button type="button" class="btn btn-primary" onclick="closeTopupRawErrorModal()">بستن</button>
    </div>
  </div>

  <!-- مودال تراکنش‌های شارژ -->
  <div id="chargeTxModal" class="fullscreen-modal">
    <div class="modal-header">
      <h3 style="font-size:0.94rem; font-weight:900;">تراکنش‌های شارژ</h3>
      <button type="button" class="icon-circle-btn" style="width:auto; padding:0 12px; font-size:0.76rem;" onclick="closeChargeTransactionsView()">بازگشت</button>
    </div>
    <div class="modal-scroll-body">
      <div class="tx-feed-card">
        <div class="tx-feed-head">
          <span style="font-size:0.86rem; font-weight:900; color:var(--slate-900);">لیست تراکنش‌های شارژ</span>
          <span id="chargeModalCountBadge" class="eng-num" style="font-size:0.72rem; background:var(--emerald-50); color:var(--emerald-800); border:1px solid #a7f3d0; padding:2px 8px; border-radius:8px; font-weight:800;">0</span>
        </div>
        <div id="chargeTransactionsContainer"></div>
      </div>
    </div>
  </div>

  <!-- مودال رسید تراکنش -->
  <div id="txDetailModal" class="fullscreen-modal">
    <div class="modal-header">
      <h3 style="font-size:0.94rem; font-weight:900;">رسید تراکنش</h3>
      <button type="button" class="icon-circle-btn" style="width:auto; padding:0 12px; font-size:0.76rem;" onclick="closeTxDetailModal()">بازگشت</button>
    </div>
    <div class="modal-scroll-body">
      <div class="receipt-box">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px dashed var(--slate-200); padding-bottom:8px;">
          <span style="font-size:0.88rem; font-weight:900; color:var(--emerald-900);">امانت‌داری کریمی</span>
          <span id="receiptDateStr" class="eng-num" style="font-size:0.72rem; color:var(--slate-500); font-weight:800;">---</span>
        </div>
        <div id="modalBody" style="display:flex; flex-direction:column; gap:9px;"></div>
      </div>
      <button type="button" id="receiptSendAdminWaBtn" class="btn btn-whatsapp hidden" onclick="sendCurrentIraqTopupToAdminWhatsApp()">ارسال درخواست به واتساپ ادمین</button>
      <button type="button" class="btn btn-whatsapp" onclick="shareReceiptToWhatsApp()">ارسال رسید در واتساپ</button>
      <button type="button" class="btn btn-primary" onclick="closeTxDetailModal()">تایید و بستن رسید</button>
    </div>
  </div>


  <!-- مودال کیف پول ارسال کردیت (credit_wallets & credit_wallet_transactions) -->
  <div id="creditWalletModal" class="center-dialog-backdrop hidden">
    <div class="center-dialog-box" style="text-align:right; max-width:430px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <h3 style="font-size:0.96rem; font-weight:900; color:var(--emerald-950);">کیف پول ارسال کردیت (IQD)</h3>
        <button type="button" class="mini-copy-btn" onclick="closeCreditWalletModal()">بستن</button>
      </div>

      <div class="wallet-id-strip" style="margin-bottom:8px;">
        <div class="wallet-id-text">آیدی کیف شما: <b id="cwModalMyWalletId" class="eng-num">CW---</b></div>
        <div class="wallet-id-text">موجودی کیف: <b id="cwModalBalanceIqd" class="eng-num" style="color:var(--emerald-800);">0</b> IQD</div>
      </div>

      <div class="currency-switcher" style="margin-bottom:10px;">
        <button type="button" class="curr-pill-btn active" id="cwTabFromMain" onclick="switchCreditWalletModalTab('from_main')">از حساب اصلی</button>
        <button type="button" class="curr-pill-btn" id="cwTabWalletTransfer" onclick="switchCreditWalletModalTab('wallet_transfer')">ارسال بین کیف‌ها</button>
        <button type="button" class="curr-pill-btn" id="cwTabHistory" onclick="switchCreditWalletModalTab('tx_history')">تراکنش‌های کیف</button>
      </div>

      <!-- تب ۱: انتقال دینار از حساب اصلی به کیف پول کردیت -->
      <div id="cwPaneFromMain">
        <div class="info-callout-box">
          موجودی دینار (IQD) را از حساب اصلی خود به کیف پول کردیت منتقل کنید تا بتوانید کردیت ارسال نمایید. موجودی کیف پول همیشه صفر یا مثبت می‌ماند.
        </div>
        <div class="calc-summary-box" id="cwMainAvailBox">
          موجودی دینار حساب اصلی: <b id="cwMainAccountIqdAvail" class="eng-num">0</b> IQD
        </div>
        <div class="form-group">
          <label for="cwFromMainAmountIqd">مبلغ انتقال به کیف کردیت (IQD)</label>
          <input type="number" id="cwFromMainAmountIqd" placeholder="مبلغ به دینار" dir="ltr">
        </div>
        <button type="button" class="btn btn-primary" onclick="executeTransferMainToCreditWallet()" style="margin-bottom:6px;">انتقال از حساب اصلی به کیف کردیت</button>
      </div>

      <!-- تب ۲: انتقال بین کیف پول‌های کردیت با آیدی کیف پول -->
      <div id="cwPaneWalletTransfer" class="hidden">
        <div class="info-callout-box">
          اگر در کیف پول کردیت خود موجودی دارید، می‌توانید با آیدی کیف پول مقصد (مثلاً CW-ACC-1001) از کیف کردیت خود به کیف کردیت فرد دیگر موجودی بفرستید.
        </div>
        <div class="form-group">
          <label for="cwTargetWalletIdInput">آیدی کیف پول مقصد (Wallet ID)</label>
          <input type="text" id="cwTargetWalletIdInput" placeholder="مثلاً CW-ACC-1001" dir="ltr" oninput="previewTargetCreditWallet()">
        </div>
        <div id="cwTargetWalletPreview" class="recipient-preview-box invalid">
          <span>مقصد کیف</span>
          <span>آیدی کیف پول مقصد را وارد کنید</span>
        </div>
        <div class="form-group">
          <label for="cwWalletTransferAmountIqd">مبلغ انتقال (IQD)</label>
          <input type="number" id="cwWalletTransferAmountIqd" placeholder="مبلغ به دینار" dir="ltr">
        </div>
        <button type="button" class="btn btn-primary" onclick="executeWalletToWalletTransfer()" style="margin-bottom:6px;">ارسال به کیف پول مقصد</button>
      </div>

      <!-- تب ۳: تراکنش‌های اختصاصی کیف پول کردیت -->
      <div id="cwPaneHistory" class="hidden">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.78rem; font-weight:900; color:var(--slate-800);">تراکنش‌های جدول credit_wallet_transactions</span>
          <button type="button" class="mini-copy-btn" onclick="refreshCreditWalletData(true)">به‌روزرسانی</button>
        </div>
        <div id="cwTransactionsListBox" class="admin-mini-list" style="max-height:220px;">در حال بارگذاری...</div>
      </div>

      <button type="button" class="btn btn-outline" style="margin-top:6px;" onclick="closeCreditWalletModal()">بستن</button>
    </div>
  </div>

  <script>
    const OWNER_NAME_DISPLAY = "محمد شریف";
    const OWNER_EMAIL = "";
    const OWNER_WHATSAPP = "9647721878997";

    const DEFAULT_IQ_NETWORKS = [
      "Zain (زین عراق)",
      "AsiaCell (آسیاسل)"
    ];

    const DEFAULT_IQ_PACKAGES = [];

    const DEFAULT_HOME_ANNOUNCEMENT = "شما با این برنامه می‌توانید خودتان در هر زمان به شماره‌های افغانستان کردیت ارسال کنید. اطلاعات، اعلان‌ها و پیشنهادات مدیریت در همین بخش نمایش داده می‌شوند.";

    const DEFAULT_APP_SETTINGS = {
      id: "default",
      transfer_enabled: true,
      topup_afn_enabled: true,
      topup_iq_enabled: true,
      afn_to_iqd_rate: 24.5,
      home_announcement: DEFAULT_HOME_ANNOUNCEMENT,
      iq_networks: DEFAULT_IQ_NETWORKS,
      iq_packages: DEFAULT_IQ_PACKAGES,
      afn_api_enabled: true,
      afn_api_endpoint: "/api/iimobile-topup",
      afn_api_mode: "proxy_api"
    };

    let appSettingsState = { ...DEFAULT_APP_SETTINGS };
    let adminsList = [];
    let ownerSettingsList = [];
    let activeManagementAdmin = null;
    let realtimeSettingsChannel = null;

    function parseJsonIfNeeded(rawVal, fallback) {
      if (Array.isArray(rawVal) || (rawVal && typeof rawVal === 'object')) return rawVal;
      if (typeof rawVal === 'string' && rawVal.trim()) {
        try {
          return JSON.parse(rawVal);
        } catch (e) {
          return fallback;
        }
      }
      return fallback;
    }

    function normalizeAppSettingsRow(row) {
      const src = row || {};
      const parsedRate = parseFloat(toEnglishDigits(getVal(src, ['afn_to_iqd_rate'])));
      const rateVal = (!isNaN(parsedRate) && parsedRate > 0) ? parsedRate : DEFAULT_APP_SETTINGS.afn_to_iqd_rate;

      const rawNets = parseJsonIfNeeded(getVal(src, ['iq_networks']), DEFAULT_IQ_NETWORKS);
      const cleanNets = Array.isArray(rawNets) && rawNets.length > 0
        ? rawNets.map(n => String(n).trim()).filter(Boolean)
        : DEFAULT_IQ_NETWORKS;

      const rawPkgs = parseJsonIfNeeded(getVal(src, ['iq_packages']), DEFAULT_IQ_PACKAGES);
      const cleanPkgs = Array.isArray(rawPkgs) && rawPkgs.length > 0
        ? rawPkgs.filter(p => p && p.active !== false)
        : DEFAULT_IQ_PACKAGES;

      const endpointVal = String(getVal(src, ['afn_api_endpoint']) || '').trim() || DEFAULT_APP_SETTINGS.afn_api_endpoint;
      const modeVal = String(getVal(src, ['afn_api_mode']) || '').trim() || DEFAULT_APP_SETTINGS.afn_api_mode;

      const rawAnn = String(getVal(src, ['home_announcement', 'announcement', 'banner_text']) || '').trim();
      return {
        id: String(getVal(src, ['id']) || 'default').trim() || 'default',
        transfer_enabled: getVal(src, ['transfer_enabled']) !== false && String(getVal(src, ['transfer_enabled'])).toLowerCase() !== 'false',
        topup_afn_enabled: getVal(src, ['topup_afn_enabled']) !== false && String(getVal(src, ['topup_afn_enabled'])).toLowerCase() !== 'false',
        topup_iq_enabled: getVal(src, ['topup_iq_enabled']) !== false && String(getVal(src, ['topup_iq_enabled'])).toLowerCase() !== 'false',
        afn_to_iqd_rate: rateVal,
        home_announcement: rawAnn || DEFAULT_HOME_ANNOUNCEMENT,
        iq_networks: cleanNets,
        iq_packages: cleanPkgs,
        afn_api_enabled: getVal(src, ['afn_api_enabled']) !== false && String(getVal(src, ['afn_api_enabled'])).toLowerCase() !== 'false',
        afn_api_endpoint: endpointVal,
        afn_api_mode: modeVal
      };
    }

    function getAfnExchangeRate() {
      const r = parseFloat(appSettingsState.afn_to_iqd_rate);
      return (!isNaN(r) && r > 0) ? r : DEFAULT_APP_SETTINGS.afn_to_iqd_rate;
    }

    function resolveIraqPackagePricing(pkg, networkName = '') {
      const p = pkg || {};
      const cardAmt = parseFloat(toEnglishDigits(p.card_amount ?? p.amount ?? p.value ?? p.label ?? 0)) || 0;
      let chargeAmt = NaN;

      if (networkName && p.network_prices && typeof p.network_prices === 'object') {
        const netVal = p.network_prices[networkName];
        if (netVal !== undefined && netVal !== null && netVal !== '') {
          chargeAmt = parseFloat(toEnglishDigits(netVal));
        }
      }

      if (isNaN(chargeAmt)) {
        const rawCharge = p.charge_amount ?? p.price ?? p.sell_price ?? p.deduct_amount ?? p.cost;
        if (rawCharge !== undefined && rawCharge !== null && rawCharge !== '') {
          chargeAmt = parseFloat(toEnglishDigits(rawCharge));
        }
      }

      if (isNaN(chargeAmt)) {
        const pct = parseFloat(toEnglishDigits(p.commission_pct ?? p.fee_pct ?? p.markup_pct ?? appSettingsState.iq_commission_pct ?? 0));
        const fee = parseFloat(toEnglishDigits(p.fee_amount ?? p.fee ?? appSettingsState.iq_fee_amount ?? 0));
        const mult = parseFloat(toEnglishDigits(p.multiplier ?? p.rate ?? appSettingsState.iq_to_iqd_rate ?? 1));
        const baseVal = (!isNaN(mult) && mult > 0) ? (cardAmt * mult) : cardAmt;
        chargeAmt = Math.round(baseVal + (baseVal * ((isNaN(pct) ? 0 : pct) / 100)) + (isNaN(fee) ? 0 : fee));
      }

      if (isNaN(chargeAmt) || chargeAmt < 0) chargeAmt = cardAmt;
      const labelTxt = p.label ? String(p.label) : formatEnMoney(cardAmt);
      return {
        id: String(p.id || `iq-${cardAmt}`),
        label: labelTxt,
        cardAmount: cardAmt,
        chargeAmount: chargeAmt
      };
    }

    function getSelectedIraqPackageInfo() {
      const sel = document.getElementById('iqCardSelect');
      const netSel = document.getElementById('iqNetworkSelect');
      const netName = netSel ? String(netSel.value || '') : '';
      const pkgs = Array.isArray(appSettingsState.iq_packages) && appSettingsState.iq_packages.length > 0
        ? appSettingsState.iq_packages
        : DEFAULT_IQ_PACKAGES;

      let chosenPkg = null;
      if (sel && sel.selectedIndex >= 0 && sel.options[sel.selectedIndex]) {
        const opt = sel.options[sel.selectedIndex];
        const pkgId = opt.getAttribute('data-pkg-id');
        if (pkgId) {
          chosenPkg = pkgs.find(p => String(p.id) === String(pkgId)) || null;
        }
        if (!chosenPkg) {
          const valNum = parseFloat(toEnglishDigits(opt.value)) || 0;
          chosenPkg = pkgs.find(p => (parseFloat(toEnglishDigits(p.card_amount ?? p.amount ?? p.value ?? 0)) || 0) === valNum) || null;
        }
      }

      if (!chosenPkg) {
        chosenPkg = pkgs[0] || DEFAULT_IQ_PACKAGES[0];
      }
      return resolveIraqPackagePricing(chosenPkg, netName);
    }

    function populateAfnAndIqSelectorsFromSettings() {
      const iqNetSel = document.getElementById('iqNetworkSelect');
      if (iqNetSel) {
        const prevNet = iqNetSel.value;
        const nets = appSettingsState.iq_networks || DEFAULT_IQ_NETWORKS;
        iqNetSel.innerHTML = nets.map(net => `<option value="${net}">${net}</option>`).join('');
        if (prevNet && nets.includes(prevNet)) iqNetSel.value = prevNet;
        else iqNetSel.selectedIndex = 0;
        if (!iqNetSel.getAttribute('data-bound-change')) {
          iqNetSel.setAttribute('data-bound-change', '1');
          iqNetSel.addEventListener('change', () => recalcTopupCost());
        }
      }

      const iqCardSel = document.getElementById('iqCardSelect');
      if (iqCardSel) {
        const prevCard = iqCardSel.value;
        const currentNet = iqNetSel ? String(iqNetSel.value || '') : '';
        const pkgs = Array.isArray(appSettingsState.iq_packages) ? appSettingsState.iq_packages.filter(p => p && p.active !== false) : [];
        if (!pkgs.length) {
          iqCardSel.innerHTML = '<option value="">تنظیم نشده در مدیریت</option>';
        } else {
          iqCardSel.innerHTML = pkgs.map((pkg, idx) => {
            const info = resolveIraqPackagePricing(pkg, currentNet);
            const diffNote = info.chargeAmount !== info.cardAmount ? ` (${formatEnMoney(info.chargeAmount)} IQD)` : '';
            return `<option value="${info.cardAmount}" data-pkg-id="${info.id || idx}">${info.label}${diffNote}</option>`;
          }).join('');
          if (prevCard && Array.from(iqCardSel.options).some(o => o.value === String(prevCard))) {
            iqCardSel.value = String(prevCard);
          } else if (iqCardSel.options.length > 0) {
            iqCardSel.selectedIndex = 0;
          }
        }
      }
    }

    function applyAppSettingsToUi() {
      populateAfnAndIqSelectorsFromSettings();

      const tEnabled = Boolean(appSettingsState.transfer_enabled);
      const aEnabled = Boolean(appSettingsState.topup_afn_enabled);
      const iEnabled = Boolean(appSettingsState.topup_iq_enabled);

      const qT = document.getElementById('qTileTransfer');
      const qA = document.getElementById('qTileAfn');
      const qI = document.getElementById('qTileIq');
      if (qT) qT.disabled = !tEnabled;
      if (qA) qA.disabled = !aEnabled;
      if (qI) qI.disabled = !iEnabled;

      const sT = document.getElementById('srvSubTransfer');
      const sA = document.getElementById('srvSubAfn');
      const sI = document.getElementById('srvSubIq');
      if (sT) sT.disabled = !tEnabled;
      if (sA) sA.disabled = !aEnabled;
      if (sI) sI.disabled = !iEnabled;

      const smT = document.getElementById('srvMenuOptTransfer');
      const smA = document.getElementById('srvMenuOptAfn');
      const smI = document.getElementById('srvMenuOptIq');

      [smT].forEach(el => {
        if (!el) return;
        el.disabled = !tEnabled;
        el.classList.toggle('disabled-service', !tEnabled);
      });
      [smA].forEach(el => {
        if (!el) return;
        el.disabled = !aEnabled;
        el.classList.toggle('disabled-service', !aEnabled);
      });
      [smI].forEach(el => {
        if (!el) return;
        el.disabled = !iEnabled;
        el.classList.toggle('disabled-service', !iEnabled);
      });

      const annEl = document.getElementById('homeAnnouncementText');
      if (annEl) {
        annEl.innerText = appSettingsState.home_announcement || DEFAULT_HOME_ANNOUNCEMENT;
      }

      if (activeServiceMode === 'transfer' && !tEnabled) collapseServiceForms();
      if (activeServiceMode === 'afn' && !aEnabled) collapseServiceForms();
      if (activeServiceMode === 'iq' && !iEnabled) collapseServiceForms();

      recalcTransferBox();
      recalcTopupCost();
      updateManagementBadgeUi();
    }

    async function fetchAppSettingsFromSupabase() {
      try {
        localStorage.setItem('karimi_cache_app_settings', JSON.stringify(appSettingsState));
      } catch (e) {}

      const ready = await initSupabaseFromEnv();
      if (!ready || !_supabase) {
        applyAppSettingsToUi();
        return appSettingsState;
      }

      try {
        const [setRes, admRes, ownRes] = await Promise.all([
          _supabase.from('app_settings').select('*').eq('id', 'default').limit(1),
          _supabase.from('admins').select('*'),
          _supabase.from('owner_settings').select('*')
        ]);

        if (setRes.data && setRes.data.length > 0) {
          appSettingsState = normalizeAppSettingsRow(setRes.data[0]);
          try {
            localStorage.setItem('karimi_cache_app_settings', JSON.stringify(appSettingsState));
          } catch (e) {}
        } else {
          const anySet = await _supabase.from('app_settings').select('*').limit(1);
          if (anySet.data && anySet.data.length > 0) {
            appSettingsState = normalizeAppSettingsRow(anySet.data[0]);
            try {
              localStorage.setItem('karimi_cache_app_settings', JSON.stringify(appSettingsState));
            } catch (e) {}
          }
        }

        if (admRes.data) adminsList = admRes.data;
        if (ownRes.data) ownerSettingsList = ownRes.data;
      } catch (e) {}

      applyAppSettingsToUi();
      return appSettingsState;
    }

    function subscribeRealtimeSettings() {
      if (!_supabase) return;
      if (realtimeSettingsChannel) {
        try { _supabase.removeChannel(realtimeSettingsChannel); } catch (e) {}
        realtimeSettingsChannel = null;
      }
      try {
        realtimeSettingsChannel = _supabase
          .channel('karimi-app-settings-live')
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'app_settings' },
            async () => {
              await fetchAppSettingsFromSupabase();
            }
          )
          .subscribe();
      } catch (e) {}
    }

    function updateManagementBadgeUi() {
      const badge = document.getElementById('mgmtSessionBadge');
      const sub = document.getElementById('mgmtMenuSub');
      if (!badge || !sub) return;
      if (activeManagementAdmin) {
        badge.innerText = 'باز است';
        sub.innerText = `مدیر: ${activeManagementAdmin.name} — نرخ افغانی: ${getAfnExchangeRate()} IQD`;
      } else {
        badge.innerText = 'ورود مدیر';
        sub.innerText = `نرخ فعلی: ${getAfnExchangeRate()} IQD | کنترل خدمات`;
      }
    }

    let editingIqPackageId = null;

    function getIqPackagesForOperator(opName) {
      const pkgs = Array.isArray(appSettingsState.iq_packages) && appSettingsState.iq_packages.length > 0
        ? appSettingsState.iq_packages
        : DEFAULT_IQ_PACKAGES;
      const targetOp = String(opName || '').trim();
      return pkgs.filter(p => {
        const pOp = String((p && (p.operator || p.network)) || '').trim();
        return !pOp || pOp === targetOp;
      });
    }

    function clearAdminIqItemForm() {
      editingIqPackageId = null;
      const cInp = document.getElementById('mgmtIqCardPriceInput');
      const dInp = document.getElementById('mgmtIqDeductPriceInput');
      if (cInp) cInp.value = '';
      if (dInp) dInp.value = '';
    }

    function editAdminIqItem(pkgId) {
      playSound('click');
      const pkgs = Array.isArray(appSettingsState.iq_packages) ? appSettingsState.iq_packages : DEFAULT_IQ_PACKAGES;
      const found = pkgs.find(p => String(p.id) === String(pkgId));
      if (!found) return;
      editingIqPackageId = String(found.id);
      const opSel = document.getElementById('mgmtIqOperatorSelect');
      if (opSel && (found.operator || found.network)) {
        const opVal = String(found.operator || found.network);
        if (Array.from(opSel.options).some(o => o.value === opVal)) opSel.value = opVal;
      }
      const info = resolveIraqPackagePricing(found, opSel ? opSel.value : '');
      document.getElementById('mgmtIqCardPriceInput').value = String(info.cardAmount);
      document.getElementById('mgmtIqDeductPriceInput').value = String(info.chargeAmount);
    }

    function deleteAdminIqItem(pkgId) {
      playSound('click');
      const pkgs = Array.isArray(appSettingsState.iq_packages) ? appSettingsState.iq_packages.slice() : DEFAULT_IQ_PACKAGES.slice();
      const filtered = pkgs.filter(p => String(p.id) !== String(pkgId));
      appSettingsState.iq_packages = filtered.length > 0 ? filtered : DEFAULT_IQ_PACKAGES.slice();
      if (editingIqPackageId === String(pkgId)) clearAdminIqItemForm();
      syncHiddenIqJsonInputs();
      renderAdminIqItemsList();
      applyAppSettingsToUi();
    }

    function saveAdminIqItemForm() {
      playSound('click');
      const opName = document.getElementById('mgmtIqOperatorSelect').value || 'AsiaCell (آسیاسل)';
      const cardVal = parseFloat(toEnglishDigits(document.getElementById('mgmtIqCardPriceInput').value));
      const deductVal = parseFloat(toEnglishDigits(document.getElementById('mgmtIqDeductPriceInput').value));

      if (isNaN(cardVal) || cardVal <= 0) {
        alert('قیمت شارژ را وارد کنید.');
        return;
      }
      if (isNaN(deductVal) || deductVal <= 0) {
        alert('قیمت آنجا (مبلغ کسر از حساب) را وارد کنید.');
        return;
      }

      const pkgs = Array.isArray(appSettingsState.iq_packages) ? appSettingsState.iq_packages.slice() : DEFAULT_IQ_PACKAGES.slice();
      const itemObj = {
        id: editingIqPackageId || ('iq-' + Date.now() + '-' + Math.floor(Math.random() * 1000)),
        operator: opName,
        label: formatEnMoney(cardVal),
        active: true,
        card_amount: cardVal,
        charge_amount: deductVal
      };

      if (editingIqPackageId) {
        const idx = pkgs.findIndex(p => String(p.id) === String(editingIqPackageId));
        if (idx >= 0) pkgs[idx] = itemObj;
        else pkgs.push(itemObj);
      } else {
        pkgs.push(itemObj);
      }

      appSettingsState.iq_packages = pkgs;
      clearAdminIqItemForm();
      syncHiddenIqJsonInputs();
      renderAdminIqItemsList();
      applyAppSettingsToUi();
      playSound('success');
    }

    function syncHiddenIqJsonInputs() {
      const netsEl = document.getElementById('cfgIqNetworksJson');
      const pkgsEl = document.getElementById('cfgIqPackagesJson');
      if (netsEl) netsEl.value = JSON.stringify(appSettingsState.iq_networks || DEFAULT_IQ_NETWORKS);
      if (pkgsEl) pkgsEl.value = JSON.stringify(appSettingsState.iq_packages || DEFAULT_IQ_PACKAGES);
    }

    function renderAdminIqItemsList() {
      const listBox = document.getElementById('mgmtIqItemsListBox');
      const opSel = document.getElementById('mgmtIqOperatorSelect');
      if (!listBox || !opSel) return;
      const opName = opSel.value;
      const items = getIqPackagesForOperator(opName);

      if (!items.length) {
        listBox.innerHTML = '<div style="font-size:0.72rem; color:var(--slate-500);">موردی برای این اپراتور ثبت نشده است.</div>';
        return;
      }

      listBox.innerHTML = items.map(pkg => {
        const info = resolveIraqPackagePricing(pkg, opName);
        return `
          <div class="admin-mini-item" style="align-items:center;">
            <div>
              <div>قیمت شارژ: <b class="eng-num">${formatEnMoney(info.cardAmount)} IQD</b></div>
              <div style="color:var(--emerald-800);">قیمت آنجا / کسر: <b class="eng-num">${formatEnMoney(info.chargeAmount)} IQD</b></div>
            </div>
            <div style="display:flex; gap:5px; flex-shrink:0;">
              <button type="button" class="mini-copy-btn" onclick="editAdminIqItem('${info.id}')">ویرایش</button>
              <button type="button" class="mini-copy-btn" style="background:var(--danger-soft); border-color:#fca5a5; color:var(--danger);" onclick="deleteAdminIqItem('${info.id}')">حذف</button>
            </div>
          </div>`;
      }).join('');
    }

    function populateManagementFormFields() {
      document.getElementById('cfgTransferEnabled').checked = Boolean(appSettingsState.transfer_enabled);
      document.getElementById('cfgTopupAfnEnabled').checked = Boolean(appSettingsState.topup_afn_enabled);
      document.getElementById('cfgTopupIqEnabled').checked = Boolean(appSettingsState.topup_iq_enabled);
      document.getElementById('cfgAfnApiEnabled').checked = Boolean(appSettingsState.afn_api_enabled);
      document.getElementById('cfgAfnToIqdRate').value = String(getAfnExchangeRate());
      const annInp = document.getElementById('cfgHomeAnnouncementInput');
      if (annInp) annInp.value = String(appSettingsState.home_announcement || DEFAULT_HOME_ANNOUNCEMENT);
      document.getElementById('cfgAfnApiEndpoint').value = String(appSettingsState.afn_api_endpoint || '/api/iimobile-topup');
      document.getElementById('cfgAfnApiMode').value = String(appSettingsState.afn_api_mode || 'proxy_api');
      syncHiddenIqJsonInputs();
      clearAdminIqItemForm();
      renderAdminIqItemsList();
    }

    async function openManagementModal() {
      playSound('click');
      await fetchAppSettingsFromSupabase();
      const modal = document.getElementById('managementModal');
      const loginBox = document.getElementById('mgmtLoginBox');
      const ctrlBox = document.getElementById('mgmtControlsBox');
      const lbl = document.getElementById('mgmtActiveAdminLabel');

      if (activeManagementAdmin) {
        loginBox.classList.add('hidden');
        ctrlBox.classList.remove('hidden');
        lbl.innerText = activeManagementAdmin.name;
        populateManagementFormFields();
        renderAdminAfnReports();
      } else {
        loginBox.classList.remove('hidden');
        ctrlBox.classList.add('hidden');
        lbl.innerText = 'نیاز به رمز';
        document.getElementById('mgmtIdentifierInput').value = '';
        document.getElementById('mgmtPinInput').value = '';
      }

      modal.classList.remove('hidden');
      ensureSentinelHistory();
    }

    function closeManagementModal() {
      playSound('click');
      document.getElementById('managementModal').classList.add('hidden');
    }

    function logoutManagementSession() {
      playSound('click');
      activeManagementAdmin = null;
      updateManagementBadgeUi();
      openManagementModal();
    }

    async function verifyManagementLogin() {
      playSound('click');
      const idVal = toEnglishDigits(document.getElementById('mgmtIdentifierInput').value.trim()).toLowerCase();
      const pinVal = toEnglishDigits(document.getElementById('mgmtPinInput').value.trim());

      if (!idVal || !pinVal) {
        alert('شناسه/ایمیل و رمز مدیریت را وارد کنید.');
        return;
      }

      showRealLoading('در حال بررسی دسترسی مدیریت...', 'بررسی جداول admins و owner_settings');
      await fetchAppSettingsFromSupabase();
      hideRealLoading();

      const matchedOwner = ownerSettingsList.find(o => {
        const em = String(getVal(o, ['email']) || '').trim().toLowerCase();
        const oid = String(getVal(o, ['id']) || '').trim().toLowerCase();
        const opin = toEnglishDigits(String(getVal(o, ['pin']) || '')).trim();
        return (idVal === em || idVal === oid) && pinVal === opin;
      });

      if (matchedOwner) {
        activeManagementAdmin = {
          name: String(getVal(matchedOwner, ['name']) || 'مالک سامانه').trim(),
          role: 'owner'
        };
        document.getElementById('mgmtLoginBox').classList.add('hidden');
        document.getElementById('mgmtControlsBox').classList.remove('hidden');
        document.getElementById('mgmtActiveAdminLabel').innerText = activeManagementAdmin.name;
        populateManagementFormFields();
        renderAdminAfnReports();
        updateManagementBadgeUi();
        return;
      }

      const matchedAdmin = adminsList.find(a => {
        const em = String(getVal(a, ['Email', 'email']) || '').trim().toLowerCase();
        const aid = String(getVal(a, ['AdminID', 'adminid']) || '').trim().toLowerCase();
        const apin = toEnglishDigits(String(getVal(a, ['Pin', 'pin']) || '')).trim();
        return (idVal === em || idVal === aid) && pinVal === apin;
      });

      if (matchedAdmin) {
        activeManagementAdmin = {
          name: String(getVal(matchedAdmin, ['Name', 'name']) || 'ادمین').trim(),
          role: 'admin'
        };
        document.getElementById('mgmtLoginBox').classList.add('hidden');
        document.getElementById('mgmtControlsBox').classList.remove('hidden');
        document.getElementById('mgmtActiveAdminLabel').innerText = activeManagementAdmin.name;
        populateManagementFormFields();
        renderAdminAfnReports();
        updateManagementBadgeUi();
        return;
      }

      alert('اطلاعات ورود مدیریت صحیح نیست.');
    }

    async function reloadAppSettingsFromDb() {
      playSound('click');
      showRealLoading('در حال دریافت تنظیمات از دیتابیس...', 'خواندن app_settings');
      await fetchAppSettingsFromSupabase();
      populateManagementFormFields();
      hideRealLoading();
      alert('تنظیمات جدول app_settings به‌روزرسانی شد.');
    }

    async function saveAppSettingsToSupabase() {
      if (!activeManagementAdmin) {
        alert('ابتدا وارد بخش مدیریت شوید.');
        return;
      }

      const rateNum = parseFloat(toEnglishDigits(document.getElementById('cfgAfnToIqdRate').value));
      if (isNaN(rateNum) || rateNum <= 0) {
        alert('نرخ تبدیل افغانی به دینار باید عدد مثبت باشد.');
        return;
      }

      const parsedNets = Array.isArray(appSettingsState.iq_networks) && appSettingsState.iq_networks.length > 0
        ? appSettingsState.iq_networks
        : DEFAULT_IQ_NETWORKS;
      const parsedPkgs = Array.isArray(appSettingsState.iq_packages) && appSettingsState.iq_packages.length > 0
        ? appSettingsState.iq_packages
        : DEFAULT_IQ_PACKAGES;
      const annVal = String((document.getElementById('cfgHomeAnnouncementInput')?.value || '')).trim() || DEFAULT_HOME_ANNOUNCEMENT;

      const payload = {
        id: 'default',
        transfer_enabled: Boolean(document.getElementById('cfgTransferEnabled').checked),
        topup_afn_enabled: Boolean(document.getElementById('cfgTopupAfnEnabled').checked),
        topup_iq_enabled: Boolean(document.getElementById('cfgTopupIqEnabled').checked),
        afn_api_enabled: Boolean(document.getElementById('cfgAfnApiEnabled').checked),
        afn_to_iqd_rate: rateNum,
        afn_api_endpoint: String(document.getElementById('cfgAfnApiEndpoint').value || '').trim() || '/api/iimobile-topup',
        afn_api_mode: String(document.getElementById('cfgAfnApiMode').value || '').trim() || 'proxy_api',
        iq_networks: parsedNets,
        iq_packages: parsedPkgs,
        updated_at: new Date().toISOString()
      };

      showRealLoading('در حال ذخیره در app_settings...', 'ثبت تغییرات در دیتابیس');
      const ready = await initSupabaseFromEnv();
      if (!ready || !_supabase) {
        hideRealLoading();
        alert('اتصال به دیتابیس برقرار نیست.');
        return;
      }

      const { error } = await _supabase
        .from('app_settings')
        .upsert([payload], { onConflict: 'id' });

      appSettingsState.home_announcement = annVal;
      await fetchAppSettingsFromSupabase();
      appSettingsState.home_announcement = annVal;
      applyAppSettingsToUi();
      hideRealLoading();

      if (error) {
        alert('خطا در ذخیره تنظیمات: ' + error.message);
        return;
      }

      playSound('success');
      alert('تنظیمات با موفقیت در جدول app_settings ذخیره و اعمال شد.');
    }

    function showReceiptForTransactionData(txData) {
      if (!txData || !currentFoundUser) return;
      selectedTxItem = txData;
      const dir = String(getVal(txData, ['Direction', 'direction'])).trim();
      const isCredit = dir.includes('بستانکار') || dir.includes('دریافت');
      const amtColor = isCredit ? 'var(--emerald-700)' : 'var(--danger)';
      const amountVal = parseFloat(getVal(txData, ['Amount', 'amount', 'value'])) || 0;
      const transId = String(getVal(txData, ['TransID', 'transid', 'id', 'transaction_id']) || '---');
      const opType = getVal(txData, ['OperationType', 'operationtype', 'type']) || 'تراکنش';
      const dateStr = getVal(txData, ['Date', 'date', 'created_at']) || new Date().toISOString();
      const dateOnly = extractDateOnly(dateStr);
      const timeStr = extractTimeOnly(dateStr) || '---';
      const currStr = getVal(txData, ['Currency', 'currency']) || 'IQD';
      const statusStr = getVal(txData, ['Status', 'status']) || 'ثبت شده';
      const descStr = String(getVal(txData, ['Description', 'description', 'desc']) || '---').replaceAll('+', ' ');
      const nameVal = getVal(currentFoundUser, ['Name', 'name', 'fullname']) || '---';
      const cpName = resolveCounterpartyName(currentFoundUser);

      document.getElementById('receiptDateStr').innerText = dateOnly;

      const txCurr = currStr.toUpperCase();
      const allChron = sortChronologically(customerTransactions, true);
      let runningBalance = 0, balBefore = 0, balAfter = 0;

      allChron.forEach(t => {
        const c = String(getVal(t, ['Currency', 'currency']) || 'IQD').toUpperCase();
        const tidItem = String(getVal(t, ['TransID', 'transid', 'id', 'transaction_id']) || '');
        if (c === txCurr) {
          const a = parseFloat(getVal(t, ['Amount', 'amount', 'value'])) || 0;
          const d = String(getVal(t, ['Direction', 'direction'])).trim();
          if (tidItem === transId || t === txData) {
            balBefore = runningBalance;
            if (d.includes('بستانکار') || d.includes('دریافت')) runningBalance += a;
            else if (d.includes('بدهکار') || d.includes('پرداخت')) runningBalance -= a;
            balAfter = runningBalance;
          } else {
            if (d.includes('بستانکار') || d.includes('دریافت')) runningBalance += a;
            else if (d.includes('بدهکار') || d.includes('پرداخت')) runningBalance -= a;
          }
        }
      });

      document.getElementById('modalBody').innerHTML = `
        <div style="background:var(--emerald-50); border:1.5px solid #6ee7b7; border-radius:var(--radius-md); padding:11px 12px; line-height:1.75; text-align:right; color:var(--emerald-950); font-size:0.82rem; font-weight:800;">
          <div style="font-size:0.72rem; color:var(--emerald-700); font-weight:900; margin-bottom:4px;">شرح رسمی رسید</div>
          <div>${descStr}</div>
        </div>
        <div class="receipt-row"><span class="receipt-label">صاحب حساب</span><span class="receipt-val">${nameVal}</span></div>
        <div class="receipt-row"><span class="receipt-label">طرف حساب</span><span class="receipt-val">${cpName}</span></div>
        <div class="receipt-row"><span class="receipt-label">تاریخ و ساعت</span><span class="receipt-val eng-num">${dateOnly} ${timeStr}</span></div>
        <div class="receipt-row"><span class="receipt-label">عملیات</span><span class="receipt-val">${opType}</span></div>
        <div class="receipt-row"><span class="receipt-label">کد سند</span><span class="receipt-val eng-num">${transId}</span></div>
        <div class="receipt-row"><span class="receipt-label">مبلغ</span><span class="receipt-val eng-num" style="color:${amtColor};">${formatEnMoney(amountVal)} ${currStr}</span></div>
        <div class="receipt-row"><span class="receipt-label">مانده قبل</span><span class="receipt-val eng-num">${formatEnMoney(balBefore)} ${currStr}</span></div>
        <div class="receipt-row"><span class="receipt-label">مانده بعد</span><span class="receipt-val eng-num">${formatEnMoney(balAfter)} ${currStr}</span></div>
        <div class="receipt-row"><span class="receipt-label">وضعیت</span><span class="receipt-val">${statusStr}</span></div>
      `;
      const adminWaBtn = document.getElementById('receiptSendAdminWaBtn');
      if (adminWaBtn) {
        const isIqTopup = String(opType).trim() === 'شارژ عراق';
        if (isIqTopup) {
          const phoneVal = toEnglishDigits(getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']) || '---');
          lastIraqTopupAdminUrl = buildIraqTopupAdminWhatsAppUrl({
            accName: nameVal,
            accId: String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '---'),
            accPhone: phoneVal,
            network: descStr,
            cardAmt: amountVal,
            txId: transId,
            dateStr: `${dateOnly} ${timeStr}`
          });
          adminWaBtn.classList.remove('hidden');
        } else {
          adminWaBtn.classList.add('hidden');
        }
      }
      document.getElementById('txDetailModal').classList.add('open');
      ensureSentinelHistory();
    }

    function formatErrorDisplayText(msg) {
      const str = String(msg || 'Unknown error').trim();
      const jsonMatch = str.match(/(\{[\s\S]*\})$/);
      if (jsonMatch) {
        try {
          const parsed = JSON.parse(jsonMatch[1]);
          const prefix = str.slice(0, jsonMatch.index).trim();
          const pretty = JSON.stringify(parsed, null, 2);
          return prefix ? `${prefix}\n${pretty}` : pretty;
        } catch (e) {}
      }
      return str;
    }

    function showTopupRawErrorModal(rawEnglishMsg) {
      const box = document.getElementById('topupRawErrorEnglishText');
      if (box) {
        box.style.whiteSpace = 'pre-wrap';
        box.style.unicodeBidi = 'plaintext';
        box.style.direction = 'ltr';
        box.style.textAlign = 'left';
        box.textContent = formatErrorDisplayText(rawEnglishMsg);
      }
      const modal = document.getElementById('topupRawErrorModal');
      if (modal) modal.classList.remove('hidden');
      ensureSentinelHistory();
    }

    function closeTopupRawErrorModal() {
      playSound('click');
      const modal = document.getElementById('topupRawErrorModal');
      if (modal) modal.classList.add('hidden');
    }

    function resetAllOperationForms() {
      const tAcc = document.getElementById('transferTargetAccIdInput');
      const tAmt = document.getElementById('transferAmountInput');
      if (tAcc) tAcc.value = '';
      if (tAmt) tAmt.value = '';
      const tPrev = document.getElementById('transferRecipientPreview');
      if (tPrev) {
        tPrev.className = 'recipient-preview-box invalid';
        tPrev.innerHTML = '<span>مقصد</span><span>کد حساب مقصد (Account ID) را وارد کنید</span>';
      }

      const afnPhone = document.getElementById('afnTargetPhone');
      const afnAmt = document.getElementById('afnAmountInput');
      const afnErr = document.getElementById('topupAfnEligibilityMsg');
      if (afnPhone) afnPhone.value = '';
      if (afnAmt) afnAmt.value = '';
      if (afnErr) afnErr.innerText = '';

      const iqErr = document.getElementById('topupIqEligibilityMsg');
      if (iqErr) iqErr.innerText = '';

      populateAfnAndIqSelectorsFromSettings();

      const pinInput = document.getElementById('txVerifyPinInput');
      if (pinInput) pinInput.value = '';

      recalcTransferBox();
      recalcTopupCost();
    }

    function buildIraqTopupAdminWhatsAppUrl(data) {
      const msgLines = [
        'درخواست شارژ عراق — امانت‌داری کریمی',
        `نام مشتری: ${data.accName}`,
        `کد حساب: ${data.accId}`,
        `شماره مشتری: ${data.accPhone || '---'}`,
        `شبکه: ${data.network}`,
        `مبلغ شارژ: ${formatEnMoney(data.cardAmt)} IQD`,
        `کد سند: ${data.txId}`,
        `تاریخ و ساعت: ${data.dateStr}`
      ];
      return `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msgLines.join('\n'))}`;
    }

    let lastIraqTopupAdminUrl = '';

    function sendCurrentIraqTopupToAdminWhatsApp() {
      playSound('click');
      if (!lastIraqTopupAdminUrl) return;
      window.open(lastIraqTopupAdminUrl, '_blank');
    }

    function initAdminContactFromDataCode() {
      const waBtn = document.getElementById('headerSupportWaBtn');
      const adminPhone = String(OWNER_WHATSAPP || '').trim();
      if (waBtn && adminPhone) {
        waBtn.href = `https://wa.me/${adminPhone}`;
      }
    }

    function copyTextValue(val, label) {
      if (!val || val === '---') return;
      navigator.clipboard?.writeText(String(val));
      playSound('success');
    }

    const TOPUP_API_CONFIG = {
      enabled: false,
      endpoint: '',
      apiKey: '',
      timeoutMs: 15000
    };

    async function callExternalTopupApi(payload) {
      if (!TOPUP_API_CONFIG.enabled || !TOPUP_API_CONFIG.endpoint) {
        return { handledByExternalApi: false, ok: false };
      }
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), TOPUP_API_CONFIG.timeoutMs);
      try {
        const resp = await fetch(TOPUP_API_CONFIG.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(TOPUP_API_CONFIG.apiKey ? { 'Authorization': `Bearer ${TOPUP_API_CONFIG.apiKey}` } : {})
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        const data = await resp.json().catch(() => ({}));
        return {
          handledByExternalApi: true,
          ok: resp.ok && (data.success !== false),
          referenceId: data.referenceId || data.ref || data.id || null,
          raw: data
        };
      } catch (err) {
        return {
          handledByExternalApi: true,
          ok: false,
          error: err && err.message ? err.message : 'خطای اتصال به API شارژ'
        };
      } finally {
        clearTimeout(timer);
      }
    }

    let _supabase = null;
    let runtimeConfigLoaded = false;

    async function initSupabaseFromEnv() {
      if (_supabase && runtimeConfigLoaded) return true;
      try {
        const resp = await fetch('/api/config', { cache: 'no-store' });
        if (resp.ok) {
          const cfg = await resp.json();
          if (cfg && cfg.supabaseUrl && cfg.supabaseKey) {
            _supabase = supabase.createClient(String(cfg.supabaseUrl).trim(), String(cfg.supabaseKey).trim());
            runtimeConfigLoaded = true;
            return true;
          }
        }
      } catch (e) {}
      return false;
    }

    let accountsList = [];
    let transactionsList = [];
    let currentFoundUser = null;
    let customerTransactions = [];
    let customerBalances = {};
    let currencyList = [];
    let activeCurrencyIndex = 0;
    let balanceHidden = false;
    let activeBottomTab = 'home';
    let activeServiceMode = null;
    let selectedTxItem = null;
    let currentStep = 'phone';
    let pendingAction = null;
    let isHandlingBack = false;
    let realtimeTxChannel = null;

    function loadCachedData() {
      try {
        const cAcc = localStorage.getItem('karimi_cache_accounts');
        const cTx = localStorage.getItem('karimi_cache_transactions');
        const cSet = localStorage.getItem('karimi_cache_app_settings');
        if (cAcc) accountsList = JSON.parse(cAcc);
        if (cTx) transactionsList = JSON.parse(cTx);
        if (cSet) appSettingsState = normalizeAppSettingsRow(JSON.parse(cSet));
      } catch (e) {}
    }
    loadCachedData();

    function toEnglishDigits(str) {
      if (str === null || str === undefined) return '';
      return String(str).replace(/[۰-۹٠-٩]/g, d =>
        d.charCodeAt(0) >= 1776 ? d.charCodeAt(0) - 1776 : d.charCodeAt(0) - 1632
      );
    }

    function getLast9Digits(str) {
      if (!str) return '';
      return toEnglishDigits(String(str)).replace(/\D/g, '').slice(-9);
    }

    function formatEnMoney(amount) {
      const num = parseFloat(amount);
      if (isNaN(num)) return '0';
      return num.toLocaleString('en-US');
    }

    function formatBalanceDisplay(amount) {
      if (balanceHidden) return '••••••';
      return formatEnMoney(amount);
    }

    function getVal(obj, keys) {
      if (!obj) return '';
      for (let k of keys) {
        if (obj[k] !== undefined && obj[k] !== null && obj[k] !== '') return obj[k];
        const lower = k.toLowerCase();
        for (let prop in obj) {
          if (prop.toLowerCase() === lower && obj[prop] !== undefined && obj[prop] !== null && obj[prop] !== '') {
            return obj[prop];
          }
        }
      }
      return '';
    }

    function resolveCounterpartyName(accObj) {
      const rawRef = String(
        getVal(accObj, ['AssignedUserEmail', 'assigneduseremail', 'CreatedBy', 'createdby']) || ''
      ).trim();
      if (!rawRef) return OWNER_NAME_DISPLAY;
      const lower = rawRef.toLowerCase();
      if (lower === OWNER_EMAIL.toLowerCase() || lower.includes('mohammadsharif') || lower.includes('karimi') || rawRef === 'مالک' || rawRef === 'owner') {
        return OWNER_NAME_DISPLAY;
      }
      if (rawRef.includes('@')) {
        return rawRef.split('@')[0].replace(/[._-]+/g, ' ').trim() || rawRef;
      }
      return rawRef;
    }

    function extractDateOnly(rawDate) {
      if (!rawDate) return 'بدون تاریخ';
      const s = toEnglishDigits(String(rawDate)).trim();
      if (s.includes('T')) return s.split('T')[0];
      if (s.includes(' ')) return s.split(' ')[0];
      return s.slice(0, 10);
    }

    function extractTimeOnly(rawDate) {
      if (!rawDate) return '';
      const s = String(rawDate).trim();
      if (!s.includes('T') && !s.includes(' ')) return '';
      const d = new Date(s);
      if (isNaN(d.getTime())) return '';
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      if (hh === '00' && mm === '00') return '';
      return `${hh}:${mm}`;
    }

    function getTxTimestamp(tx) {
      const raw = getVal(tx, ['Date', 'date', 'created_at', 'CreatedAt']);
      if (!raw) return 0;
      const s = toEnglishDigits(String(raw)).trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
        const t = new Date(s + 'T00:00:00').getTime();
        return isNaN(t) ? 0 : t;
      }
      const t = new Date(s).getTime();
      return isNaN(t) ? 0 : t;
    }

    function sortChronologically(list, ascending = false) {
      return list.slice().sort((a, b) => {
        const ta = getTxTimestamp(a);
        const tb = getTxTimestamp(b);
        if (ta !== tb) return ascending ? (ta - tb) : (tb - ta);
        const ida = String(getVal(a, ['TransID', 'transid', 'id', 'transaction_id']) || '');
        const idb = String(getVal(b, ['TransID', 'transid', 'id', 'transaction_id']) || '');
        return ascending ? ida.localeCompare(idb) : idb.localeCompare(ida);
      });
    }

    function getPersianDayName(dateStr) {
      try {
        const d = new Date(dateStr + 'T12:00:00');
        if (isNaN(d.getTime())) return '';
        const days = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
        return days[d.getDay()];
      } catch (e) { return ''; }
    }

    function getNotificationMode() {
      const m = localStorage.getItem('karimi_notif_mode') || 'sound_vibration';
      if (['sound_vibration', 'vibration_only', 'silent', 'off'].includes(m)) return m;
      return 'sound_vibration';
    }

    function getNotificationModeLabel(mode) {
      switch (mode) {
        case 'sound_vibration': return 'اعلان با صدا و لرزش';
        case 'vibration_only': return 'اعلان فقط با لرزش';
        case 'silent': return 'اعلان بی‌صدا و بدون لرزش';
        case 'off': return 'خاموش (اعلان غیرفعال)';
        default: return 'اعلان با صدا و لرزش';
      }
    }

    function openNotificationModeModal() {
      playSound('click');
      const cur = getNotificationMode();
      document.getElementById('notifOptSoundVib').classList.toggle('active', cur === 'sound_vibration');
      document.getElementById('notifOptVibOnly').classList.toggle('active', cur === 'vibration_only');
      document.getElementById('notifOptSilent').classList.toggle('active', cur === 'silent');
      document.getElementById('notifOptOff').classList.toggle('active', cur === 'off');
      document.getElementById('notifSettingsModal').classList.remove('hidden');
      ensureSentinelHistory();
    }

    function closeNotificationModeModal() {
      document.getElementById('notifSettingsModal').classList.add('hidden');
    }

    async function selectNotificationMode(mode) {
      localStorage.setItem('karimi_notif_mode', mode);
      updateNotifModeLabel();
      closeNotificationModeModal();
      if (mode !== 'off') {
        await requestExternalNotificationPermission();
        await ensureNativeNotificationChannels();
      }
    }

    function updateNotifModeLabel() {
      const el = document.getElementById('notifModeSub');
      if (el) el.innerText = getNotificationModeLabel(getNotificationMode());
    }

    function triggerFeedbackByMode(type) {
      const mode = getNotificationMode();
      if (mode === 'off') return;

      const allowSound = (mode === 'sound_vibration');
      const allowVibration = (mode === 'sound_vibration' || mode === 'vibration_only');

      if (allowSound) {
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.setValueAtTime(type === 'success' ? 760 : 520, ctx.currentTime);
          gain.gain.setValueAtTime(0.03, ctx.currentTime);
          osc.start();
          osc.stop(ctx.currentTime + 0.06);
        } catch (e) {}
      }

      if (allowVibration) {
        try {
          if (navigator.vibrate) {
            navigator.vibrate(type === 'alert' ? [120, 60, 120] : 40);
          }
        } catch (e) {}
        try {
          const cap = window.Capacitor;
          const haptics = cap && cap.Plugins && cap.Plugins.Haptics;
          if (haptics && typeof haptics.vibrate === 'function') {
            haptics.vibrate({ duration: type === 'alert' ? 220 : 60 }).catch(() => {});
          }
        } catch (e) {}
      }
    }

    function playSound(type) {
      triggerFeedbackByMode(type);
    }

    async function hashPin(plain) {
      const clean = String(plain || '').trim();
      if (!window.crypto || !window.crypto.subtle) return clean;
      const enc = new TextEncoder().encode(clean);
      const buf = await window.crypto.subtle.digest('SHA-256', enc);
      return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    function getStoredPinHashForAccount(accObj, accId) {
      if (accObj) {
        const colPin = getVal(accObj, ['PinHash', 'pinhash', 'pin_hash']);
        if (colPin) return String(colPin).trim();
      }
      const found = accountsList.find(a =>
        String(getVal(a, ['AccountID', 'accountid', 'ID', 'account_id'])).trim().toLowerCase() === String(accId || '').trim().toLowerCase()
      );
      return found ? String(getVal(found, ['PinHash', 'pinhash', 'pin_hash']) || '').trim() : '';
    }

    // ذخیره و بررسی رمز مستقیم در ستون PinHash جدول accounts از طریق RPC سوپابیس و ستون PinHash
    async function setPinInDatabaseColumn(accId, pinValue) {
      const cleanId = String(accId || '').trim();
      const cleanVal = String(pinValue || '').trim();
      if (!cleanId || !cleanVal) return false;
      const ready = await initSupabaseFromEnv();
      if (!ready || !_supabase) return false;

      let rpcSucceeded = false;
      try {
        const { data, error } = await _supabase.rpc('set_account_pin', {
          p_account_id: cleanId,
          p_new_pin: cleanVal
        });
        if (!error && data === true) {
          rpcSucceeded = true;
        }
      } catch (e) {}

      if (!rpcSucceeded) {
        let res = await _supabase
          .from('accounts')
          .update({ PinHash: cleanVal })
          .eq('AccountID', cleanId)
          .select('AccountID, PinHash');

        if (res.error) {
          const alt = await _supabase
            .from('accounts')
            .update({ pin_hash: cleanVal })
            .eq('AccountID', cleanId)
            .select('AccountID, pin_hash');
          if (alt.error) {
            return false;
          }
          res = alt;
        }

        if (!Array.isArray(res.data) || res.data.length === 0) {
          const phoneVal = currentFoundUser ? String(getVal(currentFoundUser, ['Phone', 'phone']) || '').trim() : '';
          const nameVal = currentFoundUser ? String(getVal(currentFoundUser, ['Name', 'name']) || '').trim() : '';
          if (phoneVal) {
            const byPhone = await _supabase
              .from('accounts')
              .update({ PinHash: cleanVal })
              .eq('Phone', phoneVal)
              .select('AccountID, PinHash');
            if (!byPhone.error && Array.isArray(byPhone.data) && byPhone.data.length > 0) {
              res = byPhone;
            } else if (nameVal) {
              const ins = await _supabase
                .from('accounts')
                .insert([{ AccountID: cleanId, Name: nameVal, Phone: phoneVal, PinHash: cleanVal }])
                .select('AccountID, PinHash');
              if (!ins.error && Array.isArray(ins.data) && ins.data.length > 0) {
                res = ins;
              }
            }
          }
        }
        if (!Array.isArray(res.data) || res.data.length === 0) {
          return false;
        }
      }

      accountsList = accountsList.map(a => {
        const aid = String(getVal(a, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
        return aid.toLowerCase() === cleanId.toLowerCase() ? { ...a, PinHash: cleanVal } : a;
      });
      try { localStorage.setItem('karimi_cache_accounts', JSON.stringify(accountsList)); } catch (e) {}
      if (currentFoundUser && String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim().toLowerCase() === cleanId.toLowerCase()) {
        currentFoundUser = { ...currentFoundUser, PinHash: cleanVal };
      }
      return true;
    }

    async function verifyPinAgainstDatabaseColumn(accId, inputPin, accObj = null) {
      const cleanId = String(accId || '').trim();
      const cleanPin = String(inputPin || '').trim();
      if (!cleanId || !cleanPin) return false;

      const ready = await initSupabaseFromEnv();
      if (ready && _supabase) {
        try {
          const { data, error } = await _supabase.rpc('verify_account_pin', {
            p_account_id: cleanId,
            p_pin: cleanPin
          });
          if (!error && typeof data === 'boolean') {
            if (data === true) return true;
          }
        } catch (e) {}
      }

      const storedHash = getStoredPinHashForAccount(accObj || currentFoundUser, cleanId);
      if (!storedHash) return false;
      const hashedInput = await hashPin(cleanPin);
      return (cleanPin === storedHash || hashedInput === storedHash);
    }

    function showRealLoading(titleText = 'در حال دریافت اطلاعات...', subText = 'لطفاً صبر کنید') {
      document.getElementById('loadingOverlayTitle').innerText = titleText;
      document.getElementById('loadingOverlaySub').innerText = subText;
      document.getElementById('realLoadingOverlay').classList.remove('hidden');
    }

    function hideRealLoading() {
      document.getElementById('realLoadingOverlay').classList.add('hidden');
    }

    function getCapacitorLocalNotifications() {
      try {
        const cap = window.Capacitor;
        if (!cap) return null;
        if (cap.Plugins && cap.Plugins.LocalNotifications) return cap.Plugins.LocalNotifications;
        if (typeof cap.registerPlugin === 'function') {
          return cap.registerPlugin('LocalNotifications');
        }
      } catch (e) {}
      return null;
    }

    function getCapacitorAppPlugin() {
      try {
        const cap = window.Capacitor;
        if (!cap) return null;
        if (cap.Plugins && cap.Plugins.App) return cap.Plugins.App;
        if (typeof cap.registerPlugin === 'function') {
          return cap.registerPlugin('App');
        }
      } catch (e) {}
      return null;
    }

    async function ensureNativeNotificationChannels() {
      const localNotif = getCapacitorLocalNotifications();
      if (!localNotif || typeof localNotif.createChannel !== 'function') return;
      try {
        await localNotif.createChannel({
          id: 'karimi_tx_sound_vib',
          name: 'اعلان تراکنش (صدا و لرزش)',
          description: 'اعلان واریز و برداشت با صدا و لرزش',
          importance: 5,
          visibility: 1,
          sound: 'default',
          vibration: true
        }).catch(() => {});

        await localNotif.createChannel({
          id: 'karimi_tx_vib_only',
          name: 'اعلان تراکنش (فقط لرزش)',
          description: 'اعلان واریز و برداشت فقط با لرزش',
          importance: 4,
          visibility: 1,
          sound: null,
          vibration: true
        }).catch(() => {});

        await localNotif.createChannel({
          id: 'karimi_tx_silent',
          name: 'اعلان تراکنش (بی‌صدا)',
          description: 'اعلان بدون صدا و لرزش',
          importance: 2,
          visibility: 1,
          sound: null,
          vibration: false
        }).catch(() => {});
      } catch (e) {}
    }

    async function requestExternalNotificationPermission() {
      if (getNotificationMode() === 'off') return false;
      const localNotif = getCapacitorLocalNotifications();
      if (localNotif) {
        try {
          if (typeof localNotif.checkPermissions === 'function') {
            const st = await localNotif.checkPermissions();
            if (st && st.display === 'granted') {
              await ensureNativeNotificationChannels();
              return true;
            }
          }
          if (typeof localNotif.requestPermissions === 'function') {
            const res = await localNotif.requestPermissions();
            if (res && res.display === 'granted') {
              await ensureNativeNotificationChannels();
              return true;
            }
          }
        } catch (e) {}
      }

      try {
        if ('Notification' in window) {
          if (Notification.permission === 'granted') return true;
          if (Notification.permission === 'default') {
            const p = await Notification.requestPermission();
            return p === 'granted';
          }
        }
      } catch (e) {}
      return false;
    }

    function stripHtmlToPlain(htmlStr) {
      return String(htmlStr || '')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/div>|<\/p>|<\/li>/gi, '\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
    }

    function getChannelIdForCurrentMode(mode) {
      if (mode === 'vibration_only') return 'karimi_tx_vib_only';
      if (mode === 'silent') return 'karimi_tx_silent';
      return 'karimi_tx_sound_vib';
    }

    async function sendExternalSystemNotification(titleText, htmlOrPlainBody) {
      const mode = getNotificationMode();
      if (mode === 'off') return;

      const title = stripHtmlToPlain(titleText) || 'امانت‌داری کریمی';
      const body = stripHtmlToPlain(htmlOrPlainBody);
      if (!body) return;

      triggerFeedbackByMode('alert');

      const notifId = Math.floor(100000 + (Date.now() % 899999));
      const channelId = getChannelIdForCurrentMode(mode);
      const isSilent = (mode === 'silent' || mode === 'vibration_only');

      const localNotif = getCapacitorLocalNotifications();
      if (localNotif && typeof localNotif.schedule === 'function') {
        try {
          await ensureNativeNotificationChannels();
          if (typeof localNotif.checkPermissions === 'function' && typeof localNotif.requestPermissions === 'function') {
            const perm = await localNotif.checkPermissions();
            if (!perm || perm.display !== 'granted') {
              await localNotif.requestPermissions();
            }
          }
          await localNotif.schedule({
            notifications: [{
              id: notifId,
              title: title,
              body: body,
              channelId: channelId,
              sound: mode === 'sound_vibration' ? 'default' : undefined,
              schedule: { at: new Date(Date.now() + 200), allowWhileIdle: true }
            }]
          });
          return;
        } catch (e) {}
      }

      try {
        const bridges = [window.AndroidBridge, window.Android, window.NativeBridge, window.AppInterface];
        for (const br of bridges) {
          if (!br) continue;
          if (typeof br.showNotificationWithMode === 'function') { br.showNotificationWithMode(title, body, mode); return; }
          if (typeof br.showNotification === 'function') { br.showNotification(title, body); return; }
          if (typeof br.sendNotification === 'function') { br.sendNotification(title, body); return; }
        }
      } catch (e) {}

      try {
        if ('serviceWorker' in navigator && 'Notification' in window && Notification.permission === 'granted') {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg && typeof reg.showNotification === 'function') {
            await reg.showNotification(title, {
              body: body,
              silent: isSilent,
              tag: 'karimi-notif-' + notifId,
              renotify: true
            });
            return;
          }
        }
      } catch (e) {}

      try {
        if ('Notification' in window) {
          if (Notification.permission === 'granted') {
            new Notification(title, { body: body, silent: isSilent, tag: 'karimi-notif-' + notifId });
          } else if (Notification.permission === 'default') {
            const perm = await Notification.requestPermission();
            if (perm === 'granted') {
              new Notification(title, { body: body, silent: isSilent, tag: 'karimi-notif-' + notifId });
            }
          }
        }
      } catch (e) {}
    }

    function notifyAccountEvent(titleText, descText) {
      sendExternalSystemNotification(titleText, descText);
    }

    function ensureSentinelHistory() {
      try {
        if (!window.history.state || !window.history.state.karimiGuard) {
          window.history.pushState({ karimiGuard: true, ts: Date.now() }, '', window.location.href);
        }
      } catch (e) {}
    }

    function isChargeTransaction(tx) {
      if (!tx) return false;
      const op = String(getVal(tx, ['OperationType', 'operationtype', 'type']) || '').trim();
      const desc = String(getVal(tx, ['Description', 'description', 'desc']) || '').trim();
      return (
        op.includes('شارژ') ||
        op.includes('کردیت') ||
        op.toLowerCase().includes('topup') ||
        op.toLowerCase().includes('charge') ||
        desc.includes('شارژ') ||
        desc.includes('کردیت')
      );
    }

    function getCustomerChargeTransactions() {
      return sortChronologically(customerTransactions.filter(tx => isChargeTransaction(tx)), false);
    }

    function updateChargeTransactionsBadge() {
      const list = getCustomerChargeTransactions();
      const cntStr = toEnglishDigits(list.length);
      const b2 = document.getElementById('chargeModalCountBadge');
      if (b2) b2.innerText = cntStr;
    }

    function closeChargeTransactionsView() {
      playSound('click');
      document.getElementById('chargeTxModal')?.classList.remove('open');
    }

    function closeAnyOpenModal() {
      const txModal = document.getElementById('txDetailModal');
      if (txModal && txModal.classList.contains('open')) {
        txModal.classList.remove('open');
        selectedTxItem = null;
        return true;
      }
      const chargeModal = document.getElementById('chargeTxModal');
      if (chargeModal && chargeModal.classList.contains('open')) {
        chargeModal.classList.remove('open');
        return true;
      }
      const ids = ['txPinConfirmModal', 'setPinModal', 'legacyPinActivationModal', 'biometricPromptModal', 'errorModal', 'notifSettingsModal', 'topupRawErrorModal', 'managementModal', 'chargeAccountModal'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && !el.classList.contains('hidden')) {
          el.classList.add('hidden');
          if (id === 'txPinConfirmModal') pendingAction = null;
          return true;
        }
      }
      return false;
    }

    function collapseServiceForms() {
      if (!activeServiceMode) return false;
      activeServiceMode = null;
      resetAllOperationForms();
      document.getElementById('panelTransfer')?.classList.add('collapsed');
      document.getElementById('panelTopupAfn')?.classList.add('collapsed');
      document.getElementById('panelTopupBundles')?.classList.add('collapsed');
      document.getElementById('panelTopupIq')?.classList.add('collapsed');
      document.getElementById('serviceEmptyPlaceholder')?.classList.remove('hidden');
      document.getElementById('qTileTransfer')?.classList.remove('active-mode');
      document.getElementById('qTileAfn')?.classList.remove('active-mode');
      document.getElementById('qTileIq')?.classList.remove('active-mode');
      document.getElementById('srvSubTransfer')?.classList.remove('active');
      document.getElementById('srvSubAfn')?.classList.remove('active');
      document.getElementById('srvSubIq')?.classList.remove('active');
      return true;
    }

    function handleBackNavigation() {
      if (isHandlingBack) return;
      isHandlingBack = true;

      try {
        if (closeAnyOpenModal()) {
          ensureSentinelHistory();
          return;
        }
        if (collapseServiceForms()) {
          ensureSentinelHistory();
          return;
        }

        if (currentStep === 'dashboard') {
          if (activeBottomTab !== 'home') {
            switchBottomTab('home');
            ensureSentinelHistory();
            return;
          }
          return;
        }

        if (currentStep === 'account' || currentStep === 'register') {
          navigateToStep('phone');
          return;
        }
      } finally {
        setTimeout(() => { isHandlingBack = false; }, 120);
      }
    }

    window.addEventListener('popstate', () => {
      handleBackNavigation();
    });

    document.addEventListener('backbutton', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      handleBackNavigation();
    }, false);

    (function setupBackListeners() {
      ensureSentinelHistory();
      const bindCap = () => {
        const capApp = getCapacitorAppPlugin();
        if (capApp && typeof capApp.addListener === 'function') {
          try {
            capApp.removeAllListeners?.('backButton').catch(() => {});
            capApp.addListener('backButton', () => {
              handleBackNavigation();
            });
          } catch (e) {}
        }
      };
      document.addEventListener('deviceready', bindCap, { once: true });
      window.addEventListener('DOMContentLoaded', () => {
        ensureSentinelHistory();
        initAdminContactFromDataCode();
        updateNotifModeLabel();
        applyAppSettingsToUi();
        requestExternalNotificationPermission();
        setTimeout(bindCap, 300);
        setTimeout(bindCap, 1200);
      }, { once: true });
    })();

    function updateLastSyncLabel() {
      const el = document.getElementById('lastSyncTimeText');
      if (!el) return;
      const now = new Date();
      el.innerText = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    }

    function getUserVisibleTransactions(accId) {
      if (!accId) return [];
      return transactionsList.filter(tx => {
        const matchAcc = String(getVal(tx, ['AccountID', 'accountid', 'ID', 'account_id'])).trim().toLowerCase() === String(accId).trim().toLowerCase();
        const op = String(getVal(tx, ['OperationType', 'operationtype'])).trim();
        return matchAcc && op !== 'SECURITY_PIN';
      });
    }

    function getUserTransactionIds(accId) {
      return getUserVisibleTransactions(accId).map(tx =>
        String(getVal(tx, ['TransID', 'transid', 'id', 'transaction_id']) || JSON.stringify(tx))
      );
    }

    function checkAndAnnounceNewTransactions(accId, previousIds, isOnInitialOpen = false) {
      if (!accId) return;
      const currentTxs = getUserVisibleTransactions(accId);
      const seenKey = `karimi_seen_tx_ids_${String(accId).trim().toLowerCase()}`;

      let baselineIds = Array.isArray(previousIds) ? previousIds : [];
      if (baselineIds.length === 0) {
        try {
          baselineIds = JSON.parse(localStorage.getItem(seenKey) || '[]');
        } catch (e) {
          baselineIds = [];
        }
      }

      const allCurrentIds = currentTxs.map(tx =>
        String(getVal(tx, ['TransID', 'transid', 'id', 'transaction_id']) || JSON.stringify(tx))
      );

      if (isOnInitialOpen && baselineIds.length === 0) {
        try { localStorage.setItem(seenKey, JSON.stringify(allCurrentIds)); } catch (e) {}
        return;
      }

      const knownSet = new Set(baselineIds);
      const newlyAdded = currentTxs.filter(tx => {
        const tid = String(getVal(tx, ['TransID', 'transid', 'id', 'transaction_id']) || JSON.stringify(tx));
        return !knownSet.has(tid);
      });

      try { localStorage.setItem(seenKey, JSON.stringify(allCurrentIds)); } catch (e) {}

      if (newlyAdded.length > 0) {
        newlyAdded.forEach(tx => {
          const op = getVal(tx, ['OperationType', 'operationtype', 'type']) || 'تراکنش';
          const amt = formatEnMoney(getVal(tx, ['Amount', 'amount', 'value']) || 0);
          const curr = getVal(tx, ['Currency', 'currency']) || 'IQD';
          const dir = String(getVal(tx, ['Direction', 'direction']));
          const isCredit = dir.includes('بستانکار') || dir.includes('دریافت');
          const date = extractDateOnly(getVal(tx, ['Date', 'date', 'created_at']));
          notifyAccountEvent(
            'اعلان جدید — امانت‌داری کریمی',
            `${op}: ${amt} ${curr} (${isCredit ? 'واریز +' : 'برداشت -'}) — تاریخ ${date}`
          );
        });
      }
    }

    function subscribeRealtimeAccountEvents(accId) {
      if (!_supabase || !accId) return;
      if (realtimeTxChannel) {
        try { _supabase.removeChannel(realtimeTxChannel); } catch (e) {}
        realtimeTxChannel = null;
      }
      const cleanId = String(accId).trim();
      try {
        realtimeTxChannel = _supabase
          .channel('karimi-tx-live-' + cleanId)
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'transactions' },
            async (payload) => {
              const prevIds = getUserTransactionIds(cleanId);
              const evType = payload && payload.eventType ? String(payload.eventType).toUpperCase() : '';
              const rec = (payload && (payload.new || payload.old)) || {};
              const recAccId = String(getVal(rec, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim().toLowerCase();
              const belongsToUser = !recAccId || recAccId === cleanId.toLowerCase();

              await fetchDataFromSupabaseFresh();
              if (currentFoundUser) {
                processDashboard(cleanId, false);
                updateLastSyncLabel();
                if (belongsToUser && evType === 'UPDATE') {
                  const op = getVal(rec, ['OperationType', 'operationtype', 'type']) || 'تراکنش';
                  const amt = formatEnMoney(getVal(rec, ['Amount', 'amount', 'value']) || 0);
                  const curr = getVal(rec, ['Currency', 'currency']) || 'IQD';
                  notifyAccountEvent('تغییر تراکنش — امانت‌داری کریمی', `${op}: ${amt} ${curr} ویرایش شد.`);
                } else if (belongsToUser && evType === 'DELETE') {
                  const op = getVal(rec, ['OperationType', 'operationtype', 'type']) || 'تراکنش';
                  const amt = formatEnMoney(getVal(rec, ['Amount', 'amount', 'value']) || 0);
                  const curr = getVal(rec, ['Currency', 'currency']) || 'IQD';
                  notifyAccountEvent('حذف تراکنش — امانت‌داری کریمی', `${op}: ${amt} ${curr} حذف شد.`);
                } else {
                  checkAndAnnounceNewTransactions(cleanId, prevIds, false);
                }
              }
            }
          )
          .subscribe();
      } catch (e) {}
    }

    function navigateToStep(step) {
      currentStep = step;
      document.getElementById('phoneSection').classList.add('hidden');
      document.getElementById('accountSection').classList.add('hidden');
      document.getElementById('registerSection').classList.add('hidden');
      document.getElementById('dashboardSection').classList.add('hidden');
      document.getElementById('bottomNavBar').classList.add('hidden');
      document.getElementById('headerRefreshBtn').classList.add('hidden');

      if (step === 'phone') {
        document.getElementById('phoneSection').classList.remove('hidden');
        document.getElementById('headerSubtitleText').innerText = 'ورود به حساب';
      } else if (step === 'account') {
        document.getElementById('accountSection').classList.remove('hidden');
        document.getElementById('headerSubtitleText').innerText = 'تایید رمز حساب';
      } else if (step === 'register') {
        document.getElementById('registerSection').classList.remove('hidden');
        document.getElementById('headerSubtitleText').innerText = 'افتتاح حساب جدید';
      } else if (step === 'dashboard') {
        document.getElementById('dashboardSection').classList.remove('hidden');
        document.getElementById('bottomNavBar').classList.remove('hidden');
        document.getElementById('headerRefreshBtn').classList.remove('hidden');
      }
      ensureSentinelHistory();
    }

    function renderChargeTabList() {
      const container = document.getElementById('chargeTabTransactionsContainer');
      const list = getCustomerChargeTransactions();
      const badge = document.getElementById('chargeTabCountBadge');
      if (badge) badge.innerText = toEnglishDigits(list.length);
      if (!container) return;

      if (list.length === 0) {
        container.innerHTML = `<div class="empty-state-box"><div style="font-size:0.86rem; font-weight:800; color:var(--slate-500);">تراکنش شارژی ثبت نشده است</div></div>`;
        return;
      }

      let html = '';
      list.forEach(tx => {
        const tid = String(getVal(tx, ['TransID', 'transid', 'id', 'transaction_id']) || '');
        const dir = String(getVal(tx, ['Direction', 'direction']));
        const isCredit = dir.includes('بستانکار') || dir.includes('دریافت');
        const amt = parseFloat(getVal(tx, ['Amount', 'amount', 'value'])) || 0;
        const opType = getVal(tx, ['OperationType', 'operationtype', 'type']) || 'شارژ';
        const dateOnly = extractDateOnly(getVal(tx, ['Date', 'date', 'created_at']) || '');
        const descStr = String(getVal(tx, ['Description', 'description', 'desc']) || '').replaceAll('+', ' ');
        const currStr = getVal(tx, ['Currency', 'currency']) || 'IQD';
        const origIdx = tid
          ? customerTransactions.findIndex(item => String(getVal(item, ['TransID', 'transid', 'id', 'transaction_id'])) === tid)
          : customerTransactions.indexOf(tx);
        html += `
          <div class="tx-item-row" onclick="openDetailModal(${origIdx >= 0 ? origIdx : 0})">
            <div class="tx-badge-icon ${(String(getVal(tx, ['Status', 'status']) || '').includes('تایید') || String(getVal(tx, ['Status', 'status']) || '').includes('موفق')) ? 'verified-green' : (isCredit ? 'credit' : 'debit')}">${(String(getVal(tx, ['Status', 'status']) || '').includes('تایید') || String(getVal(tx, ['Status', 'status']) || '').includes('موفق')) ? '✓' : (isCredit ? '↓' : '↑')}</div>
            <div class="tx-main-info">
              <div class="tx-op-title">${opType}</div>
              <div class="tx-desc-sub">${descStr}</div>
            </div>
            <div class="tx-amount-col">
              <span class="tx-amt-val ${isCredit ? 'credit' : 'debit'} eng-num">${isCredit ? '+' : '-'}${formatEnMoney(amt)} ${currStr}</span>
              <span class="tx-time-meta eng-num">${dateOnly}</span>
            </div>
          </div>`;
      });
      container.innerHTML = html;
    }

    function switchBottomTab(tab) {
      playSound('click');
      requestExternalNotificationPermission();
      activeBottomTab = tab;

      document.getElementById('tabHomeView').classList.add('hidden');
      document.getElementById('tabTxView').classList.add('hidden');
      document.getElementById('tabChargeTxView')?.classList.add('hidden');
      document.getElementById('tabServicesView').classList.add('hidden');
      document.getElementById('tabProfileView').classList.add('hidden');

      document.getElementById('navHomeBtn').classList.remove('active');
      document.getElementById('navTxBtn').classList.remove('active');
      document.getElementById('navChargeTxBtn')?.classList.remove('active');
      document.getElementById('navServicesBtn').classList.remove('active');
      document.getElementById('navProfileBtn').classList.remove('active');

      if (tab === 'home') {
        document.getElementById('tabHomeView').classList.remove('hidden');
        document.getElementById('navHomeBtn').classList.add('active');
        document.getElementById('headerSubtitleText').innerText = 'صفحه اصلی';
        collapseServiceForms();
      } else if (tab === 'tx') {
        document.getElementById('tabTxView').classList.remove('hidden');
        document.getElementById('navTxBtn').classList.add('active');
        document.getElementById('headerSubtitleText').innerText = 'تراکنش‌ها';
        renderTransactionsList();
      } else if (tab === 'charge_tx') {
        document.getElementById('tabChargeTxView')?.classList.remove('hidden');
        document.getElementById('navChargeTxBtn')?.classList.add('active');
        document.getElementById('headerSubtitleText').innerText = 'تراکنش‌های شارژ';
        renderChargeTabList();
      } else if (tab === 'services') {
        document.getElementById('tabServicesView').classList.remove('hidden');
        document.getElementById('navServicesBtn').classList.add('active');
        document.getElementById('headerSubtitleText').innerText = 'انتقال و شارژ';
        if (activeServiceMode) {
          openServiceForm(activeServiceMode);
        } else {
          collapseServiceForms();
        }
      } else if (tab === 'profile') {
        document.getElementById('tabProfileView').classList.remove('hidden');
        document.getElementById('navProfileBtn').classList.add('active');
        document.getElementById('headerSubtitleText').innerText = 'حساب کاربری';
        syncProfileTabData();
      }
      ensureSentinelHistory();
    }

    function isServiceEnabledBySettings(mode) {
      if (mode === 'bundles') return true;
      if (mode === 'transfer') return Boolean(appSettingsState.transfer_enabled);
      if (mode === 'afn') return Boolean(appSettingsState.topup_afn_enabled);
      if (mode === 'iq') return Boolean(appSettingsState.topup_iq_enabled);
      return true;
    }

    async function openServiceForm(mode) {
      playSound('click');
      requestExternalNotificationPermission();

      if (mode === 'bundles') {
        activeServiceMode = 'bundles';
        switchBottomTab('services');
        document.getElementById('serviceEmptyPlaceholder').classList.add('hidden');
        document.getElementById('panelTransfer')?.classList.add('collapsed');
        document.getElementById('panelTopupAfn')?.classList.add('collapsed');
        document.getElementById('panelTopupIq')?.classList.add('collapsed');
        document.getElementById('panelTopupBundles')?.classList.remove('collapsed');
        ensureSentinelHistory();
        return;
      }

      resetMandatorySyncState(mode);
      const accId = localStorage.getItem('karimi_accId') ||
        (currentFoundUser ? String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim() : '');
      if (accId) {
        await forceSyncBeforeOperation(accId);
      } else {
        await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);
        applyAppSettingsToUi();
      }

      if (!isServiceEnabledBySettings(mode)) {
        alert('این بخش در حال حاضر توسط مدیریت غیرفعال است.');
        return;
      }

      activeServiceMode = mode;

      if (activeBottomTab !== 'services') {
        activeBottomTab = 'services';
        document.getElementById('tabHomeView').classList.add('hidden');
        document.getElementById('tabTxView').classList.add('hidden');
        document.getElementById('tabChargeTxView')?.classList.add('hidden');
        document.getElementById('tabServicesView').classList.remove('hidden');
        document.getElementById('tabProfileView').classList.add('hidden');

        document.getElementById('navHomeBtn').classList.remove('active');
        document.getElementById('navTxBtn').classList.remove('active');
        document.getElementById('navChargeTxBtn')?.classList.remove('active');
        document.getElementById('navServicesBtn').classList.add('active');
        document.getElementById('navProfileBtn').classList.remove('active');
        document.getElementById('headerSubtitleText').innerText = 'انتقال و شارژ';
      }

      document.getElementById('serviceEmptyPlaceholder').classList.add('hidden');

      const pT = document.getElementById('panelTransfer');
      const pA = document.getElementById('panelTopupAfn');
      const pB = document.getElementById('panelTopupBundles');
      const pI = document.getElementById('panelTopupIq');

      pT.classList.toggle('collapsed', mode !== 'transfer');
      pA.classList.toggle('collapsed', mode !== 'afn');
      pB?.classList.toggle('collapsed', mode !== 'bundles');
      pI.classList.toggle('collapsed', mode !== 'iq');

      document.getElementById('srvSubTransfer').classList.toggle('active', mode === 'transfer');
      document.getElementById('srvSubAfn').classList.toggle('active', mode === 'afn');
      document.getElementById('srvSubIq').classList.toggle('active', mode === 'iq');

      document.getElementById('qTileTransfer').classList.toggle('active-mode', mode === 'transfer');
      document.getElementById('qTileAfn').classList.toggle('active-mode', mode === 'afn');
      document.getElementById('qTileIq').classList.toggle('active-mode', mode === 'iq');

      resetAllOperationForms();
      if (mode === 'transfer') {
        populateTransferCurrencies();
        previewTransferRecipient();
        recalcTransferBox();
      } else {
        recalcTopupCost();
      }
      ensureSentinelHistory();
    }

    function toggleBalanceVisibility() {
      playSound('click');
      balanceHidden = !balanceHidden;
      document.getElementById('eyeToggleIcon').innerText = balanceHidden ? '🙈' : '👁️';
      updateBalanceDisplay();
    }

    function copyAccountId() {
      copyTextValue(document.getElementById('dashAccountId').innerText.trim(), 'کد حساب');
    }

    function copyPhoneNumber() {
      copyTextValue(document.getElementById('profilePhoneVal').innerText.trim(), 'شماره تماس');
    }

    window.addEventListener('DOMContentLoaded', async () => {
      requestExternalNotificationPermission();
      const savedPhone = localStorage.getItem('karimi_phone');
      const savedAccId = localStorage.getItem('karimi_accId');

      if (savedPhone && savedAccId) {
        if (accountsList.length > 0) {
          autoLogin(savedPhone, savedAccId, false);
        }
        showRealLoading('در حال همگام‌سازی حساب...', 'دریافت آخرین اطلاعات و تنظیمات');
        const prevIds = getUserTransactionIds(savedAccId);
        await initSupabaseFromEnv();
        await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);
        autoLogin(savedPhone, savedAccId, false);
        subscribeRealtimeAccountEvents(savedAccId);
        subscribeRealtimeSettings();
        hideRealLoading();
        updateLastSyncLabel();
        checkAndAnnounceNewTransactions(savedAccId, prevIds, true);
      } else {
        navigateToStep('phone');
        if (localStorage.getItem('karimi_biometric_enabled') === 'true') {
          document.getElementById('biometricBtnWrapper').classList.remove('hidden');
        }
        await initSupabaseFromEnv();
        fetchDataFromSupabaseFresh();
        fetchAppSettingsFromSupabase();
        subscribeRealtimeSettings();
      }
    });

    async function fetchDataFromSupabaseFresh() {
      const ready = await initSupabaseFromEnv();
      if (!ready || !_supabase) return false;
      try {
        const [accRes, txRes] = await Promise.all([
          _supabase.from('accounts').select('*'),
          _supabase.from('transactions').select('*')
        ]);
        if (accRes.data) {
          accountsList = accRes.data;
          localStorage.setItem('karimi_cache_accounts', JSON.stringify(accRes.data));
        }
        if (txRes.data) {
          transactionsList = txRes.data;
          localStorage.setItem('karimi_cache_transactions', JSON.stringify(txRes.data));
        }
        return true;
      } catch (e) {
        return false;
      }
    }

    async function refreshAccountData() {
      playSound('click');
      requestExternalNotificationPermission();
      const savedAccId = localStorage.getItem('karimi_accId') ||
        (currentFoundUser ? String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim() : '');
      const prevIds = getUserTransactionIds(savedAccId);

      showRealLoading('در حال بروزرسانی...', 'دریافت آخرین تراکنش‌ها و نرخ‌ها');
      await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);

      if (savedAccId) {
        const found = accountsList.find(u =>
          String(getVal(u, ['AccountID', 'accountid', 'ID', 'account_id'])).trim().toLowerCase() === savedAccId.toLowerCase()
        );
        if (found) currentFoundUser = found;
        processDashboard(savedAccId, false);
        subscribeRealtimeAccountEvents(savedAccId);
      }
      subscribeRealtimeSettings();
      hideRealLoading();
      updateLastSyncLabel();
      checkAndAnnounceNewTransactions(savedAccId, prevIds, false);
    }

    async function checkPhone() {
      playSound('click');
      requestExternalNotificationPermission();
      const rawInput = toEnglishDigits(document.getElementById('phoneInput').value.trim());
      if (!rawInput) return;

      const userLast9 = getLast9Digits(rawInput);
      if (userLast9.length < 9) {
        alert('شماره تماس را کامل وارد کنید.');
        return;
      }

      showRealLoading('در حال بررسی شماره...', 'جستجو در سامانه');
      await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);
      hideRealLoading();

      const found = accountsList.find(u =>
        getLast9Digits(getVal(u, ['Phone', 'phone', 'تلفن', 'mobile'])) === userLast9
      );

      if (found) {
        currentFoundUser = found;
        const accIdVal = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
        const hasExistingPin = Boolean(getStoredPinHashForAccount(currentFoundUser, accIdVal));
        const nameVal = getVal(currentFoundUser, ['Name', 'name', 'fullname']) || 'مشتری';
        const cpName = resolveCounterpartyName(currentFoundUser);
        document.getElementById('greetingMsg').innerText = `${nameVal}`;
        document.getElementById('candidateManagerHint').innerText = `طرف حساب: ${cpName}`;
        document.getElementById('accountIdInput').value = '';
        const loginPinInp = document.getElementById('loginAccountPinInput');
        if (loginPinInp) loginPinInp.value = '';
        const lPin1 = document.getElementById('legacyInitialPinInput');
        const lPin2 = document.getElementById('legacyInitialPinConfirmInput');
        if (lPin1) lPin1.value = '';
        if (lPin2) lPin2.value = '';
        document.getElementById('loginPinRequiredBox')?.classList.toggle('hidden', !hasExistingPin);
        document.getElementById('legacyNoPinSetupBox')?.classList.toggle('hidden', hasExistingPin);
        navigateToStep('account');
        setTimeout(() => {
          if (hasExistingPin) {
            document.getElementById('loginAccountPinInput')?.focus();
          } else {
            document.getElementById('legacyInitialPinInput')?.focus();
          }
        }, 100);
      } else {
        const enc = encodeURIComponent(`شماره تماس: ${rawInput}`);
        document.getElementById('modalWhatsAppErrorBtn').href = `https://wa.me/${OWNER_WHATSAPP}?text=${enc}`;
        document.getElementById('errorModal').classList.remove('hidden');
        ensureSentinelHistory();
      }
    }

    function closeErrorModal() {
      playSound('click');
      document.getElementById('errorModal').classList.add('hidden');
    }

    async function verifyAccount() {
      playSound('click');
      if (!currentFoundUser) {
        alert('ابتدا شماره تماس را بررسی کنید.');
        return;
      }
      const sheetAccId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();

      const existingPin = getStoredPinHashForAccount(currentFoundUser, sheetAccId);
      const legacyBox = document.getElementById('legacyNoPinSetupBox');
      const loginPinBox = document.getElementById('loginPinRequiredBox');
      if (!existingPin) {
        if (legacyBox) legacyBox.classList.remove('hidden');
        if (loginPinBox) loginPinBox.classList.add('hidden');
        const p1 = toEnglishDigits((document.getElementById('legacyInitialPinInput')?.value || '').trim());
        const p2 = toEnglishDigits((document.getElementById('legacyInitialPinConfirmInput')?.value || '').trim());
        if (!p1 && !p2) {
          alert('این حساب رمز یا پسورد فعالی ندارد. لطفاً یک پسورد/پین جدید ایجاد کنید.');
          return;
        }
        if (p1.length < 6 || !/[a-z]/.test(p1) || !/[A-Z]/.test(p1) || !/[0-9]/.test(p1)) {
          alert('پسورد جدید باید حداقل ۶ کاراکتر و شامل حروف کوچک، حروف بزرگ و عدد باشد.');
          return;
        }
        if (p1 !== p2) {
          alert('پسورد تعیین‌شده و تکرار آن یکسان نیست.');
          return;
        }
        showRealLoading('در حال ثبت پسورد حساب...', 'ذخیره پسورد جدید در ستون PinHash');
        await initSupabaseFromEnv();
        const savedOk = await setPinInDatabaseColumn(sheetAccId, p1);
        if (!savedOk) {
          hideRealLoading();
          alert('خطا در ذخیره رمز در ستون PinHash دیتابیس. لطفاً اتصال یا دسترسی جدول accounts را بررسی کنید.');
          return;
        }
        await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);
        const refreshedAcc = accountsList.find(u =>
          String(getVal(u, ['AccountID', 'accountid', 'ID', 'account_id'])).trim().toLowerCase() === sheetAccId.toLowerCase()
        );
        if (refreshedAcc) currentFoundUser = refreshedAcc;
        hideRealLoading();
        alert('پسورد حساب شما با موفقیت ایجاد و ثبت شد. لطفاً آن را حفظ کنید و در اختیار دیگران قرار ندهید.');
      } else {
        if (legacyBox) legacyBox.classList.add('hidden');
        if (loginPinBox) loginPinBox.classList.remove('hidden');
        const enteredPin = toEnglishDigits((document.getElementById('loginAccountPinInput')?.value || '').trim());
        if (!enteredPin) {
          alert('ورود این حساب از طریق پین/پسورد است. لطفاً پسورد یا پین خود را وارد کنید.');
          return;
        }
        const isValidPin = await verifyPinAgainstDatabaseColumn(sheetAccId, enteredPin, currentFoundUser);
        if (!isValidPin) {
          alert('پین یا پسورد واردشده صحیح نیست.');
          return;
        }
      }

      showRealLoading('در حال ورود...', 'دریافت اطلاعات حساب');
      await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);
      hideRealLoading();

      const phoneVal = getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']);
      localStorage.setItem('karimi_phone', phoneVal);
      localStorage.setItem('karimi_accId', sheetAccId);

      const seenKey = `karimi_seen_tx_ids_${sheetAccId.trim().toLowerCase()}`;
      const existingIds = getUserTransactionIds(sheetAccId);
      try { localStorage.setItem(seenKey, JSON.stringify(existingIds)); } catch (e) {}

      playSound('success');
      processDashboard(sheetAccId, true);
      subscribeRealtimeAccountEvents(sheetAccId);
      subscribeRealtimeSettings();
      updateLastSyncLabel();
    }

    function openSelfRegister() {
      playSound('click');
      document.getElementById('regAccId').value = 'ACC-' + Math.floor(10000 + Math.random() * 90000);
      document.getElementById('regFullName').value = '';
      document.getElementById('regPhone').value = '';
      document.getElementById('regPin').value = '';
      document.getElementById('regPinConfirm').value = '';
      navigateToStep('register');
    }

    async function submitRealAccountCreation() {
      const accId = document.getElementById('regAccId').value.trim();
      const name = document.getElementById('regFullName').value.trim();
      const phone = toEnglishDigits(document.getElementById('regPhone').value.trim());
      const pin = toEnglishDigits(document.getElementById('regPin').value.trim());
      const pinConfirm = toEnglishDigits(document.getElementById('regPinConfirm').value.trim());

      if (!name || !phone || !pin) {
        alert('همه موارد را تکمیل کنید.');
        return;
      }
      if (!/^\+\d{7,16}$/.test(phone)) {
        alert('شماره همراه باید با علامت مثبت (+) و کد کشور وارد شود.');
        return;
      }
      if (pin.length < 6 || !/[a-z]/.test(pin) || !/[A-Z]/.test(pin) || !/[0-9]/.test(pin)) {
        alert('رمز ثابت باید حداقل ۶ کاراکتر و شامل حروف کوچک، حروف بزرگ و عدد باشد.');
        return;
      }
      if (pin !== pinConfirm) {
        alert('رمز و تکرار آن یکسان نیست.');
        return;
      }

      showRealLoading('در حال ثبت حساب...', 'ذخیره اطلاعات در ستون PinHash');
      await fetchDataFromSupabaseFresh();

      const last9 = getLast9Digits(phone);
      if (last9.length >= 9 && accountsList.some(a => getLast9Digits(getVal(a, ['Phone', 'phone'])) === last9)) {
        hideRealLoading();
        alert('این شماره قبلاً ثبت شده است.');
        return;
      }

      const { error } = await _supabase.from('accounts').insert([{
        AccountID: accId,
        Name: name,
        Phone: phone,
        AssignedUserEmail: OWNER_EMAIL,
        CreatedBy: OWNER_EMAIL
      }]);

      if (!error) {
        await setPinInDatabaseColumn(accId, pin);
      }

      await fetchDataFromSupabaseFresh();
      hideRealLoading();

      if (error) {
        alert('خطا در ثبت حساب: ' + error.message);
        return;
      }

      playSound('success');
      alert(`حساب شما با موفقیت ثبت شد.
کد حساب: ${accId}
رمز ثابت انتخابی شما هم برای ورود و هم برای تایید تراکنش‌ها استفاده می‌شود. لطفاً رمز را به خاطر بسپارید و در اختیار کسی قرار ندهید.`);
      document.getElementById('phoneInput').value = phone;
      navigateToStep('phone');
    }

    function autoLogin(phone, accId, announce = false) {
      const userLast9 = getLast9Digits(phone);
      const found = accountsList.find(u => getLast9Digits(getVal(u, ['Phone', 'phone', 'تلفن', 'mobile'])) === userLast9);
      if (found) {
        const sheetAccId = String(getVal(found, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
        if (sheetAccId.toLowerCase() === accId.trim().toLowerCase()) {
          currentFoundUser = found;
          const prevIds = getUserTransactionIds(sheetAccId);
          processDashboard(sheetAccId, false);
          if (announce) checkAndAnnounceNewTransactions(sheetAccId, prevIds, false);
          return;
        }
      }
      localStorage.removeItem('karimi_phone');
      localStorage.removeItem('karimi_accId');
      navigateToStep('phone');
    }

    function logout() {
      playSound('click');
      localStorage.removeItem('karimi_phone');
      localStorage.removeItem('karimi_accId');
      if (realtimeTxChannel && _supabase) {
        try { _supabase.removeChannel(realtimeTxChannel); } catch (e) {}
        realtimeTxChannel = null;
      }
      currentFoundUser = null;
      collapseServiceForms();
      navigateToStep('phone');
      if (localStorage.getItem('karimi_biometric_enabled') === 'true') {
        document.getElementById('biometricBtnWrapper').classList.remove('hidden');
      }
    }

    function processDashboard(sheetAccId, isFreshLogin = false) {
      navigateToStep('dashboard');

      const rawName = String(getVal(currentFoundUser, ['Name', 'name', 'fullname']) || 'مشتری').trim();
      const phoneVal = toEnglishDigits(getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']) || '---');
      const cpName = resolveCounterpartyName(currentFoundUser);
      const firstChar = rawName.charAt(0) || 'م';

      document.getElementById('userAvatarLetter').innerText = firstChar;
      document.getElementById('profileAvatarLetter').innerText = firstChar;
      document.getElementById('dashName').innerText = rawName;
      document.getElementById('profileFullName').innerText = rawName;
      document.getElementById('dashCounterpartyName').innerText = cpName;
      document.getElementById('profileCounterpartyName').innerText = cpName;
      document.getElementById('dashAccountId').innerText = sheetAccId;
      document.getElementById('profileAccIdVal').innerText = sheetAccId;
      document.getElementById('profilePhoneVal').innerText = phoneVal;

      const rawUserTxs = getUserVisibleTransactions(sheetAccId);
      customerTransactions = sortChronologically(rawUserTxs, false);

      customerBalances = {};
      customerTransactions.forEach(tx => {
        const curr = String(getVal(tx, ['Currency', 'currency']) || 'IQD').toUpperCase();
        const amt = parseFloat(getVal(tx, ['Amount', 'amount', 'value'])) || 0;
        const dir = String(getVal(tx, ['Direction', 'direction'])).trim();
        if (!customerBalances[curr]) customerBalances[curr] = { credit: 0, debit: 0, net: 0 };
        if (dir.includes('بستانکار') || dir.includes('دریافت')) customerBalances[curr].credit += amt;
        else if (dir.includes('بدهکار') || dir.includes('پرداخت')) customerBalances[curr].debit += amt;
      });

      for (let c in customerBalances) {
        customerBalances[c].net = customerBalances[c].credit - customerBalances[c].debit;
      }

      currencyList = Object.keys(customerBalances);
      if (currencyList.length === 0) {
        currencyList = ['IQD'];
        customerBalances['IQD'] = { credit: 0, debit: 0, net: 0 };
      }

      if (activeCurrencyIndex >= currencyList.length) activeCurrencyIndex = 0;

      updatePinMenuLabel(sheetAccId);
      updateBioStatusLabel();
      updateTxBioStatusLabel();
      updateNotifModeLabel();
      applyAppSettingsToUi();
      renderCurrencyTabs();
      renderTransactionsList();
      populateTransferCurrencies();
      previewTransferRecipient();
      recalcTransferBox();
      recalcTopupCost();
      updateCreditWalletUi();
      ensureCreditWalletRow(sheetAccId).then(() => {
        fetchCreditWalletTransactions(sheetAccId).then(() => {
          updateCreditWalletUi();
          recalcTopupCost();
        });
      });
      switchBottomTab(activeBottomTab);

      if (isFreshLogin && localStorage.getItem('karimi_biometric_enabled') !== 'true') {
        setTimeout(() => {
          document.getElementById('biometricPromptModal').classList.remove('hidden');
          ensureSentinelHistory();
        }, 350);
      }
    }

    function renderCurrencyTabs() {
      let html = '';
      currencyList.forEach((curr, idx) => {
        const activeCls = idx === activeCurrencyIndex ? 'active' : '';
        html += `<button type="button" class="curr-pill-btn ${activeCls}" onclick="switchCurrency(${idx})">${curr}</button>`;
      });
      document.getElementById('currencyTabs').innerHTML = html;
      updateBalanceDisplay();
    }

    function switchCurrency(idx) {
      playSound('click');
      activeCurrencyIndex = idx;
      renderCurrencyTabs();
    }

    function updateBalanceDisplay() {
      const currName = currencyList[activeCurrencyIndex] || 'IQD';
      const b = customerBalances[currName] || { credit: 0, debit: 0, net: 0 };

      document.getElementById('odometerCurrencyLabel').innerText = currName;
      document.getElementById('walletCurrBadge').innerText = currName;
      document.getElementById('odometerValue').innerText = formatBalanceDisplay(b.net);
      document.getElementById('odometerCredit').innerText = formatBalanceDisplay(b.credit);
      document.getElementById('odometerDebit').innerText = formatBalanceDisplay(b.debit);
    }

    let mandatorySyncCompletedForMode = { transfer: false, afn: false, iq: false };

    function resetMandatorySyncState(specificMode = null) {
      if (specificMode) {
        mandatorySyncCompletedForMode[specificMode] = false;
      } else {
        mandatorySyncCompletedForMode = { transfer: false, afn: false, iq: false };
      }
      updateMandatoryBannerUi();
    }

    function updateMandatoryBannerUi() {
      const map = [
        { mode: 'transfer', bannerId: 'mandatoryBannerTransfer', textId: 'mandatoryBannerTextTransfer', btnId: 'mandatoryBtnTransfer' },
        { mode: 'afn', bannerId: 'mandatoryBannerAfn', textId: 'mandatoryBannerTextAfn', btnId: 'mandatoryBtnAfn' },
        { mode: 'iq', bannerId: 'mandatoryBannerIq', textId: 'mandatoryBannerTextIq', btnId: 'mandatoryBtnIq' }
      ];
      map.forEach(item => {
        const done = Boolean(mandatorySyncCompletedForMode[item.mode]);
        const banner = document.getElementById(item.bannerId);
        const txt = document.getElementById(item.textId);
        const btn = document.getElementById(item.btnId);
        if (banner) {
          banner.style.background = done ? 'var(--emerald-50)' : 'var(--warning-soft)';
          banner.style.borderColor = done ? '#6ee7b7' : '#fcd34d';
        }
        if (txt) {
          txt.style.color = done ? 'var(--emerald-800)' : '#92400e';
          txt.innerText = done
            ? 'حساب شما به‌روزرسانی شد؛ می‌توانید تراکنش را انجام دهید.'
            : 'قبل از انجام تراکنش حسابت را به‌روزرسانی کن. (اجباری)';
        }
        if (btn) {
          btn.style.background = done ? 'var(--emerald-600)' : 'var(--warning)';
          btn.innerText = done ? 'به‌روز شد ✓' : 'به‌روزرسانی اجباری';
        }
      });
    }

    function hasCompletedMandatorySync(mode) {
      if (mandatorySyncCompletedForMode[mode]) return true;
      alert('قبل از انجام تراکنش حسابت را به‌روزرسانی کن.');
      return false;
    }

    async function mandatoryRefreshBeforeForm(mode) {
      playSound('click');
      const accId = localStorage.getItem('karimi_accId') ||
        (currentFoundUser ? String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim() : '');
      if (accId) {
        await forceSyncBeforeOperation(accId);
      } else {
        await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);
      }
      if (mode) {
        mandatorySyncCompletedForMode[mode] = true;
      } else {
        mandatorySyncCompletedForMode = { transfer: true, afn: true, iq: true };
      }
      updateMandatoryBannerUi();
      playSound('success');
    }

    function recomputeCustomerBalances(sheetAccId) {
      const rawUserTxs = getUserVisibleTransactions(sheetAccId);
      customerTransactions = sortChronologically(rawUserTxs, false);
      customerBalances = {};
      customerTransactions.forEach(tx => {
        const curr = String(getVal(tx, ['Currency', 'currency']) || 'IQD').toUpperCase();
        const amt = parseFloat(getVal(tx, ['Amount', 'amount', 'value'])) || 0;
        const dir = String(getVal(tx, ['Direction', 'direction'])).trim();
        if (!customerBalances[curr]) customerBalances[curr] = { credit: 0, debit: 0, net: 0 };
        if (dir.includes('بستانکار') || dir.includes('دریافت')) customerBalances[curr].credit += amt;
        else if (dir.includes('بدهکار') || dir.includes('پرداخت')) customerBalances[curr].debit += amt;
      });
      for (let c in customerBalances) {
        customerBalances[c].net = customerBalances[c].credit - customerBalances[c].debit;
      }
      currencyList = Object.keys(customerBalances);
      if (currencyList.length === 0) {
        currencyList = ['IQD'];
        customerBalances['IQD'] = { credit: 0, debit: 0, net: 0 };
      }
      if (activeCurrencyIndex >= currencyList.length) activeCurrencyIndex = 0;
      renderCurrencyTabs();
      recalcTransferBox();
      recalcTopupCost();
    }

    async function forceSyncBeforeOperation(accId) {
      showRealLoading('در حال تازه‌سازی اجباری حساب...', 'بررسی آخرین موجودی و نرخ‌ها');
      await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);
      if (accId) {
        const found = accountsList.find(u =>
          String(getVal(u, ['AccountID', 'accountid', 'ID', 'account_id'])).trim().toLowerCase() === String(accId).trim().toLowerCase()
        );
        if (found) currentFoundUser = found;
        recomputeCustomerBalances(accId);
        renderTransactionsList();
        updateLastSyncLabel();
      }
      hideRealLoading();
    }

    function populateTransferCurrencies() {
      const sel = document.getElementById('transferCurrencySelect');
      if (!sel) return;
      const prevVal = sel.value;
      const allCurrs = Array.from(new Set(['IQD', 'AFN', 'USD', ...currencyList]));
      sel.innerHTML = allCurrs.map(c => `<option value="${c}">${c}</option>`).join('');
      if (prevVal && allCurrs.includes(prevVal)) sel.value = prevVal;
      else if (allCurrs.includes('IQD')) sel.value = 'IQD';
    }

    function findRecipientByAccountId(accIdRaw) {
      if (!currentFoundUser) return null;
      const idQ = toEnglishDigits(String(accIdRaw || '')).trim().toLowerCase();
      if (!idQ) return null;

      const myAccId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim().toLowerCase();

      return accountsList.find(acc => {
        const accId = String(getVal(acc, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim().toLowerCase();
        if (!accId || accId === myAccId) return false;
        return accId === idQ;
      }) || null;
    }

    function previewTransferRecipient() {
      const idQ = document.getElementById('transferTargetAccIdInput').value.trim();
      const box = document.getElementById('transferRecipientPreview');
      if (!box) return null;

      if (!idQ) {
        box.className = 'recipient-preview-box invalid';
        box.innerHTML = '<span>مقصد</span><span>کد حساب مقصد (Account ID) را وارد کنید</span>';
        return null;
      }

      const target = findRecipientByAccountId(idQ);
      if (!target) {
        box.className = 'recipient-preview-box invalid';
        box.innerHTML = '<span>مقصد</span><span>حسابی با این Account ID یافت نشد</span>';
        return null;
      }

      const tName = getVal(target, ['Name', 'name', 'fullname']) || 'حساب مقصد';
      const tId = getVal(target, ['AccountID', 'accountid', 'ID', 'account_id']);
      box.className = 'recipient-preview-box';
      box.innerHTML = `<span><b>${tName}</b></span><span class="eng-num">${tId}</span>`;
      return target;
    }

    function recalcTransferBox() {
      const curr = document.getElementById('transferCurrencySelect').value || 'IQD';
      const amt = parseFloat(toEnglishDigits(document.getElementById('transferAmountInput').value)) || 0;
      const avail = (customerBalances[curr] && customerBalances[curr].net) ? customerBalances[curr].net : 0;
      const box = document.getElementById('transferCalcBox');
      const btn = document.getElementById('btnExecuteTransfer');

      if (!appSettingsState.transfer_enabled) {
        box.className = 'calc-summary-box error';
        box.innerHTML = 'انتقال موجودی در جدول تنظیمات غیرفعال است';
        if (btn) btn.disabled = true;
        return;
      }

      if (avail <= 0 || amt > avail) {
        box.className = 'calc-summary-box error';
        box.innerHTML = `موجودی قابل انتقال (<span class="eng-num">${curr}</span>): <b class="eng-num">${formatEnMoney(avail)}</b>`;
        if (btn) btn.disabled = true;
        return;
      }

      box.className = 'calc-summary-box';
      box.innerHTML = `موجودی قابل انتقال (<span class="eng-num">${curr}</span>): <b class="eng-num">${formatEnMoney(avail)}</b>`;
      if (btn) btn.disabled = false;
    }

    function openOperationAuthModal(headingText, summaryHtml, actionObj) {
      pendingAction = actionObj;
      const txBioEnabled = isTxBiometricEnabled();
      document.getElementById('pinModalHeading').innerText = headingText;
      document.getElementById('txPinSummaryText').innerHTML = summaryHtml;
      document.getElementById('txBiometricActionBox').classList.toggle('hidden', !txBioEnabled);
      document.getElementById('txVerifyPinInput').value = '';
      document.getElementById('txPinConfirmModal').classList.remove('hidden');
      ensureSentinelHistory();
      setTimeout(() => document.getElementById('txVerifyPinInput').focus(), 100);
    }

    async function prepareTransferWithPin() {
      if (!currentFoundUser) return;
      // optional sync
      if (!appSettingsState.transfer_enabled) {
        alert('انتقال موجودی توسط مدیریت غیرفعال است.');
        return;
      }
      const myAccId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
      await forceSyncBeforeOperation(myAccId);
      const idQ = document.getElementById('transferTargetAccIdInput').value.trim();
      const targetAcc = findRecipientByAccountId(idQ);
      const curr = document.getElementById('transferCurrencySelect').value || 'IQD';
      const amt = parseFloat(toEnglishDigits(document.getElementById('transferAmountInput').value));
      const avail = (customerBalances[curr] && customerBalances[curr].net) ? customerBalances[curr].net : 0;
      const myName = String(getVal(currentFoundUser, ['Name', 'name', 'fullname']) || 'مشتری').trim();

      if (!targetAcc) {
        alert('کد حساب مقصد (Account ID) صحیح نیست یا حسابی با این شناسه وجود ندارد.');
        return;
      }
      if (isNaN(amt) || amt <= 0) {
        alert('مبلغ را وارد کنید.');
        return;
      }
      if (avail <= 0 || amt > avail) {
        alert('موجودی کافی نیست.');
        return;
      }

      if (!isTxBiometricEnabled()) {
        const hasPin = await ensureAccountHasPin(myAccId);
        if (!hasPin) return;
      }

      const tId = String(getVal(targetAcc, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
      const tName = String(getVal(targetAcc, ['Name', 'name', 'fullname']) || 'مشتری مقصد').trim();
      const tAssigned = getVal(targetAcc, ['AssignedUserEmail', 'assigneduseremail']) || getVal(currentFoundUser, ['AssignedUserEmail', 'assigneduseremail']) || OWNER_EMAIL;

      openOperationAuthModal(
        'تایید انتقال موجودی',
        `انتقال <b class="eng-num">${formatEnMoney(amt)} ${curr}</b> به <b>${tName}</b> (<span class="eng-num">${tId}</span>)`,
        { kind: 'transfer', data: { fromId: myAccId, fromName: myName, toId: tId, toName: tName, curr, amt, assignedEmail: tAssigned } }
      );
    }

    function getNetIqdBalance() {
      return (customerBalances['IQD'] && customerBalances['IQD'].net) ? customerBalances['IQD'].net : 0;
    }


    // =========================================================================
    // بخش کیف پول ارسال کردیت (credit_wallets و credit_wallet_transactions)
    // =========================================================================

    let allCreditWalletsList = [];
    let currentCreditWallet = null;
    let currentCreditWalletTxs = [];
    let activeCreditWalletModalTab = 'from_main';

    function buildDefaultCreditWalletId(accId) {
      const clean = String(accId || '').trim();
      if (!clean) return 'CW-UNKNOWN';
      return clean.toUpperCase().startsWith('CW-') ? clean.toUpperCase() : `CW-${clean}`;
    }

    function getCurrentCreditWalletBalanceIqd() {
      const raw = currentCreditWallet ? parseFloat(toEnglishDigits(currentCreditWallet.balance_iqd ?? currentCreditWallet.balance ?? 0)) : 0;
      return isNaN(raw) || raw < 0 ? 0 : raw;
    }

    function getCurrentCreditWalletId() {
      if (currentCreditWallet && currentCreditWallet.wallet_id) {
        return String(currentCreditWallet.wallet_id).trim();
      }
      const accId = currentFoundUser
        ? String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim()
        : (localStorage.getItem('karimi_accId') || '').trim();
      return buildDefaultCreditWalletId(accId);
    }

    async function ensureCreditWalletRow(accId) {
      const cleanAccId = String(accId || '').trim();
      if (!cleanAccId) return null;
      const defaultWalletId = buildDefaultCreditWalletId(cleanAccId);

      const ready = await initSupabaseFromEnv();
      if (!ready || !_supabase) {
        const localRow = { wallet_id: defaultWalletId, account_id: cleanAccId, balance_iqd: 0 };
        currentCreditWallet = localRow;
        return localRow;
      }

      try {
        const { data: allW, error: listErr } = await _supabase
          .from('credit_wallets')
          .select('*');

        if (!listErr && Array.isArray(allW)) {
          allCreditWalletsList = allW;
        }

        const existing = allCreditWalletsList.find(w =>
          String(w.account_id || '').trim().toLowerCase() === cleanAccId.toLowerCase()
        );

        if (existing) {
          const safeBal = Math.max(0, parseFloat(toEnglishDigits(existing.balance_iqd ?? 0)) || 0);
          currentCreditWallet = { ...existing, balance_iqd: safeBal };
          return currentCreditWallet;
        }

        const newRow = {
          wallet_id: defaultWalletId,
          account_id: cleanAccId,
          balance_iqd: 0,
          updated_at: new Date().toISOString()
        };
        const { data: inserted, error: insErr } = await _supabase
          .from('credit_wallets')
          .insert([newRow])
          .select('*');

        if (!insErr && Array.isArray(inserted) && inserted.length > 0) {
          currentCreditWallet = inserted[0];
          allCreditWalletsList.push(inserted[0]);
          return currentCreditWallet;
        }

        currentCreditWallet = newRow;
        return newRow;
      } catch (e) {
        const fallback = { wallet_id: defaultWalletId, account_id: cleanAccId, balance_iqd: 0 };
        currentCreditWallet = fallback;
        return fallback;
      }
    }

    async function fetchCreditWalletTransactions(accId) {
      const cleanAccId = String(accId || '').trim();
      if (!cleanAccId) {
        currentCreditWalletTxs = [];
        return [];
      }
      const ready = await initSupabaseFromEnv();
      if (!ready || !_supabase) return currentCreditWalletTxs;

      try {
        const { data, error } = await _supabase
          .from('credit_wallet_transactions')
          .select('*')
          .eq('account_id', cleanAccId)
          .order('created_at', { ascending: false });

        if (!error && Array.isArray(data)) {
          currentCreditWalletTxs = data;
        }
      } catch (e) {}
      return currentCreditWalletTxs;
    }

    async function refreshCreditWalletData(includeTxs = false) {
      const accId = currentFoundUser
        ? String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim()
        : (localStorage.getItem('karimi_accId') || '').trim();
      if (!accId) return;
      await ensureCreditWalletRow(accId);
      if (includeTxs) {
        await fetchCreditWalletTransactions(accId);
      }
      updateCreditWalletUi();
      recalcTopupCost();
    }

    function updateCreditWalletUi() {
      const wId = getCurrentCreditWalletId();
      const balIqd = getCurrentCreditWalletBalanceIqd();
      const rate = getAfnExchangeRate();
      const mainIqd = getNetIqdBalance();

      const balDisp = document.getElementById('creditWalletBalanceDisplay');
      const idDisp = document.getElementById('dashCreditWalletId');
      const rateDisp = document.getElementById('dashCreditWalletRate');
      const profIdDisp = document.getElementById('profileCreditWalletId');
      const profBalDisp = document.getElementById('profileCreditWalletBal');
      const modalIdDisp = document.getElementById('cwModalMyWalletId');
      const modalBalDisp = document.getElementById('cwModalBalanceIqd');
      const mainAvailDisp = document.getElementById('cwMainAccountIqdAvail');

      if (balDisp) balDisp.innerText = formatBalanceDisplay(balIqd);
      if (idDisp) idDisp.innerText = wId;
      if (rateDisp) rateDisp.innerText = String(rate);
      if (profIdDisp) profIdDisp.innerText = wId;
      if (profBalDisp) profBalDisp.innerText = formatBalanceDisplay(balIqd);
      if (modalIdDisp) modalIdDisp.innerText = wId;
      if (modalBalDisp) modalBalDisp.innerText = formatEnMoney(balIqd);
      if (mainAvailDisp) mainAvailDisp.innerText = formatEnMoney(mainIqd);

      renderCreditWalletTransactionsBox();
    }

    function copyCreditWalletId() {
      copyTextValue(getCurrentCreditWalletId(), 'آیدی کیف پول کردیت');
    }

    async function openCreditWalletModal(initialTab = 'from_main') {
      playSound('click');
      await refreshCreditWalletData(true);
      switchCreditWalletModalTab(initialTab);
      document.getElementById('creditWalletModal')?.classList.remove('hidden');
      ensureSentinelHistory();
    }

    function closeCreditWalletModal() {
      playSound('click');
      document.getElementById('creditWalletModal')?.classList.add('hidden');
    }

    function switchCreditWalletModalTab(tabName) {
      playSound('click');
      activeCreditWalletModalTab = tabName;

      document.getElementById('cwTabFromMain')?.classList.toggle('active', tabName === 'from_main');
      document.getElementById('cwTabWalletTransfer')?.classList.toggle('active', tabName === 'wallet_transfer');
      document.getElementById('cwTabHistory')?.classList.toggle('active', tabName === 'tx_history');

      document.getElementById('cwPaneFromMain')?.classList.toggle('hidden', tabName !== 'from_main');
      document.getElementById('cwPaneWalletTransfer')?.classList.toggle('hidden', tabName !== 'wallet_transfer');
      document.getElementById('cwPaneHistory')?.classList.toggle('hidden', tabName !== 'tx_history');

      updateCreditWalletUi();
      if (tabName === 'tx_history') {
        refreshCreditWalletData(true);
      }
    }

    function getCreditWalletOpLabel(opType) {
      switch (String(opType || '')) {
        case 'credit_topup': return 'خرید/ارسال کردیت';
        case 'topup_from_main': return 'انتقال از حساب اصلی به کیف کردیت';
        case 'admin_grant_debt': return 'افزایش کیف کردیت توسط مدیریت (بدهکار حساب اصلی)';
        case 'wallet_transfer_out': return 'ارسال به کیف پول کردیت دیگر';
        case 'wallet_transfer_in': return 'دریافت از کیف پول کردیت دیگر';
        default: return opType || 'تراکنش کیف کردیت';
      }
    }

    function renderCreditWalletTransactionsBox() {
      const box = document.getElementById('cwTransactionsListBox');
      if (!box) return;
      if (!currentCreditWalletTxs || currentCreditWalletTxs.length === 0) {
        box.innerHTML = '<div style="font-size:0.72rem; color:var(--slate-500); text-align:center;">تراکنشی در کیف پول کردیت ثبت نشده است.</div>';
        return;
      }
      box.innerHTML = currentCreditWalletTxs.map(tx => {
        const isCredit = String(tx.direction || '').toLowerCase() === 'credit';
        const amtIqd = parseFloat(toEnglishDigits(tx.amount_iqd ?? 0)) || 0;
        const amtAfn = parseFloat(toEnglishDigits(tx.amount_afn ?? 0)) || 0;
        const label = getCreditWalletOpLabel(tx.operation_type);
        const dt = extractDateOnly(tx.created_at || '');
        const afnPart = amtAfn > 0 ? ` (${formatEnMoney(amtAfn)} AFN)` : '';
        return `
          <div class="admin-mini-item">
            <div>
              <div><b>${label}</b></div>
              <div style="color:var(--slate-500);">${tx.description || tx.tx_id || ''} • <span class="eng-num">${dt}</span></div>
            </div>
            <strong class="eng-num" style="color:${isCredit ? 'var(--emerald-800)' : 'var(--danger)'};">${isCredit ? '+' : '-'}${formatEnMoney(amtIqd)} IQD${afnPart}</strong>
          </div>`;
      }).join('');
    }

    async function insertCreditWalletTxRow(rowObj) {
      const ready = await initSupabaseFromEnv();
      if (!ready || !_supabase) return { ok: false, error: 'اتصال به دیتابیس برقرار نیست' };
      const { error } = await _supabase.from('credit_wallet_transactions').insert([rowObj]);
      if (error) return { ok: false, error: error.message };
      return { ok: true };
    }

    async function updateCreditWalletBalanceInDb(walletId, accId, nextBalanceIqd) {
      const safeBal = Math.max(0, Number(nextBalanceIqd) || 0);
      const ready = await initSupabaseFromEnv();
      if (!ready || !_supabase) return { ok: false, error: 'اتصال به دیتابیس برقرار نیست', balance: safeBal };

      const wId = String(walletId || buildDefaultCreditWalletId(accId)).trim();
      const { error } = await _supabase
        .from('credit_wallets')
        .upsert([{
          wallet_id: wId,
          account_id: String(accId).trim(),
          balance_iqd: safeBal,
          updated_at: new Date().toISOString()
        }], { onConflict: 'account_id' });

      if (error) return { ok: false, error: error.message, balance: safeBal };
      return { ok: true, balance: safeBal };
    }

    async function executeTransferMainToCreditWallet() {
      playSound('click');
      if (!currentFoundUser) return;
      const accId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
      const accName = String(getVal(currentFoundUser, ['Name', 'name', 'fullname']) || 'مشتری').trim();
      const amtIqd = parseFloat(toEnglishDigits(document.getElementById('cwFromMainAmountIqd')?.value || '0'));

      if (isNaN(amtIqd) || amtIqd <= 0) {
        alert('مبلغ انتقال را به دینار وارد کنید.');
        return;
      }

      await forceSyncBeforeOperation(accId);
      await ensureCreditWalletRow(accId);
      const mainAvail = getNetIqdBalance();
      if (mainAvail <= 0 || amtIqd > mainAvail) {
        alert('موجودی دینار (IQD) در حساب اصلی کافی نیست.');
        return;
      }

      const wId = getCurrentCreditWalletId();
      const curWalletBal = getCurrentCreditWalletBalanceIqd();
      const nextWalletBal = Math.max(0, curWalletBal + amtIqd);
      const txCode = 'CW-TX-' + Math.floor(100000 + Math.random() * 900000);
      const mainTxId = 'TX-' + Math.floor(100000 + Math.random() * 900000);
      const nowIso = new Date().toISOString();
      const assigned = getVal(currentFoundUser, ['AssignedUserEmail', 'assigneduseremail']) || OWNER_EMAIL;

      showRealLoading('در حال انتقال به کیف کردیت...', 'کسر از حساب اصلی و افزایش کیف پول کردیت');

      const mainDebitRow = {
        TransID: mainTxId,
        AccountID: accId,
        Date: nowIso,
        Amount: Number(amtIqd),
        Currency: 'IQD',
        Direction: 'بدهکار',
        OperationType: 'انتقال به کیف کردیت',
        Description: `انتقال ${formatEnMoney(amtIqd)} IQD از حساب اصلی به کیف پول کردیت (${wId})`,
        AssignedUserEmail: assigned,
        Status: 'ثبت شده'
      };

      const { error: mainErr } = await _supabase.from('transactions').insert([mainDebitRow]);
      if (mainErr) {
        hideRealLoading();
        alert('خطا در ثبت تراکنش حساب اصلی: ' + mainErr.message);
        return;
      }

      const balRes = await updateCreditWalletBalanceInDb(wId, accId, nextWalletBal);
      if (!balRes.ok) {
        hideRealLoading();
        alert('خطا در بروزرسانی موجودی کیف پول کردیت: ' + balRes.error);
        return;
      }

      await insertCreditWalletTxRow({
        tx_id: txCode,
        wallet_id: wId,
        account_id: accId,
        target_wallet_id: wId,
        target_account_id: accId,
        operation_type: 'topup_from_main',
        direction: 'credit',
        amount_iqd: Number(amtIqd),
        amount_afn: 0,
        exchange_rate: Number(getAfnExchangeRate()),
        main_tx_id: mainTxId,
        description: `واریز ${formatEnMoney(amtIqd)} IQD از حساب اصلی (${accName}) به کیف پول کردیت`,
        created_at: nowIso
      });

      document.getElementById('cwFromMainAmountIqd').value = '';

      await fetchDataFromSupabaseFresh();
      processDashboard(accId, false);
      await refreshCreditWalletData(true);
      hideRealLoading();
      playSound('success');
      alert(`مبلغ ${formatEnMoney(amtIqd)} IQD با موفقیت به کیف پول کردیت (${wId}) منتقل شد.`);
    }

    function findTargetCreditWallet(rawWalletId) {
      const q = String(rawWalletId || '').trim().toLowerCase();
      if (!q) return null;
      const myWId = getCurrentCreditWalletId().toLowerCase();
      return allCreditWalletsList.find(w => {
        const wid = String(w.wallet_id || '').trim().toLowerCase();
        return wid && wid === q && wid !== myWId;
      }) || null;
    }

    function previewTargetCreditWallet() {
      const box = document.getElementById('cwTargetWalletPreview');
      const inp = document.getElementById('cwTargetWalletIdInput');
      if (!box || !inp) return null;
      const q = inp.value.trim();
      if (!q) {
        box.className = 'recipient-preview-box invalid';
        box.innerHTML = '<span>مقصد کیف</span><span>آیدی کیف پول مقصد را وارد کنید</span>';
        return null;
      }
      const foundW = findTargetCreditWallet(q);
      if (!foundW) {
        box.className = 'recipient-preview-box invalid';
        box.innerHTML = '<span>مقصد کیف</span><span>کیف پول مقصد یافت نشد یا آیدی خودتان است</span>';
        return null;
      }
      const accObj = accountsList.find(a =>
        String(getVal(a, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim().toLowerCase() === String(foundW.account_id || '').trim().toLowerCase()
      );
      const ownerName = accObj ? (getVal(accObj, ['Name', 'name', 'fullname']) || foundW.account_id) : foundW.account_id;
      box.className = 'recipient-preview-box';
      box.innerHTML = `<span><b>${ownerName}</b></span><span class="eng-num">${foundW.wallet_id}</span>`;
      return foundW;
    }

    async function executeWalletToWalletTransfer() {
      playSound('click');
      if (!currentFoundUser) return;
      const myAccId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
      const targetWalletIdRaw = (document.getElementById('cwTargetWalletIdInput')?.value || '').trim();
      const amtIqd = parseFloat(toEnglishDigits(document.getElementById('cwWalletTransferAmountIqd')?.value || '0'));

      if (!targetWalletIdRaw) {
        alert('آیدی کیف پول مقصد را وارد کنید.');
        return;
      }
      if (isNaN(amtIqd) || amtIqd <= 0) {
        alert('مبلغ انتقال را به دینار وارد کنید.');
        return;
      }

      await refreshCreditWalletData(true);
      const targetW = findTargetCreditWallet(targetWalletIdRaw);
      if (!targetW) {
        alert('آیدی کیف پول مقصد معتبر نیست.');
        return;
      }

      const myWId = getCurrentCreditWalletId();
      const myBal = getCurrentCreditWalletBalanceIqd();
      if (myBal <= 0 || amtIqd > myBal) {
        alert('موجودی کیف پول کردیت شما کافی نیست.');
        return;
      }

      const targetAccId = String(targetW.account_id || '').trim();
      const targetWId = String(targetW.wallet_id || '').trim();
      const targetCurBal = Math.max(0, parseFloat(toEnglishDigits(targetW.balance_iqd ?? 0)) || 0);
      const nextMyBal = Math.max(0, myBal - amtIqd);
      const nextTargetBal = Math.max(0, targetCurBal + amtIqd);

      const nowIso = new Date().toISOString();
      const baseCode = 'CW-TR-' + Math.floor(100000 + Math.random() * 900000);

      showRealLoading('در حال انتقال بین کیف پول‌ها...', 'به‌روزرسانی موجودی کیف مبدا و مقصد');

      const outRes = await updateCreditWalletBalanceInDb(myWId, myAccId, nextMyBal);
      const inRes = await updateCreditWalletBalanceInDb(targetWId, targetAccId, nextTargetBal);

      if (!outRes.ok || !inRes.ok) {
        hideRealLoading();
        alert('خطا در انتقال بین کیف پول‌ها.');
        return;
      }

      await insertCreditWalletTxRow({
        tx_id: `${baseCode}-OUT`,
        wallet_id: myWId,
        account_id: myAccId,
        target_wallet_id: targetWId,
        target_account_id: targetAccId,
        operation_type: 'wallet_transfer_out',
        direction: 'debit',
        amount_iqd: Number(amtIqd),
        amount_afn: 0,
        exchange_rate: Number(getAfnExchangeRate()),
        description: `انتقال ${formatEnMoney(amtIqd)} IQD به کیف پول ${targetWId}`,
        created_at: nowIso
      });

      await insertCreditWalletTxRow({
        tx_id: `${baseCode}-IN`,
        wallet_id: targetWId,
        account_id: targetAccId,
        target_wallet_id: myWId,
        target_account_id: myAccId,
        operation_type: 'wallet_transfer_in',
        direction: 'credit',
        amount_iqd: Number(amtIqd),
        amount_afn: 0,
        exchange_rate: Number(getAfnExchangeRate()),
        description: `دریافت ${formatEnMoney(amtIqd)} IQD از کیف پول ${myWId}`,
        created_at: nowIso
      });

      document.getElementById('cwTargetWalletIdInput').value = '';
      document.getElementById('cwWalletTransferAmountIqd').value = '';
      previewTargetCreditWallet();

      await refreshCreditWalletData(true);
      hideRealLoading();
      playSound('success');
      alert(`مبلغ ${formatEnMoney(amtIqd)} IQD به کیف پول ${targetWId} منتقل شد.`);
    }

    async function adminGrantCreditWalletWithMainDebt() {
      playSound('click');
      if (!activeManagementAdmin) {
        alert('ابتدا وارد بخش مدیریت شوید.');
        return;
      }

      const queryRaw = toEnglishDigits((document.getElementById('mgmtCwTargetAccOrPhone')?.value || '').trim());
      const grantAmtIqd = parseFloat(toEnglishDigits(document.getElementById('mgmtCwGrantAmountIqd')?.value || '0'));
      const customDesc = String((document.getElementById('mgmtCwGrantDesc')?.value || '')).trim();
      const resEl = document.getElementById('mgmtCwGrantResult');

      if (!queryRaw) {
        alert('کد حساب (Account ID) یا شماره تماس مشتری را وارد کنید.');
        return;
      }
      if (isNaN(grantAmtIqd) || grantAmtIqd <= 0) {
        alert('مبلغ افزایش موجودی کیف کردیت (IQD) باید بیشتر از صفر باشد.');
        return;
      }

      showRealLoading('در حال افزایش کیف کردیت...', 'ثبت بدهکاری در حساب اصلی و افزایش کیف پول کردیت');
      await fetchDataFromSupabaseFresh();

      const qLower = queryRaw.toLowerCase();
      const qLast9 = getLast9Digits(queryRaw);
      const targetAcc = accountsList.find(acc => {
        const aid = String(getVal(acc, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim().toLowerCase();
        const ph = String(getVal(acc, ['Phone', 'phone', 'تلفن', 'mobile']) || '').trim();
        return aid === qLower || (qLast9.length >= 9 && getLast9Digits(ph) === qLast9);
      });

      if (!targetAcc) {
        hideRealLoading();
        alert('حسابی با این شناسه یا شماره تماس یافت نشد.');
        return;
      }

      const targetAccId = String(getVal(targetAcc, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
      const targetName = String(getVal(targetAcc, ['Name', 'name', 'fullname']) || 'مشتری').trim();
      const assigned = getVal(targetAcc, ['AssignedUserEmail', 'assigneduseremail']) || OWNER_EMAIL;

      const wRow = await ensureCreditWalletRow(targetAccId);
      const targetWId = String((wRow && wRow.wallet_id) || buildDefaultCreditWalletId(targetAccId)).trim();
      const prevWBal = Math.max(0, parseFloat(toEnglishDigits((wRow && wRow.balance_iqd) ?? 0)) || 0);
      const nextWBal = Math.max(0, prevWBal + grantAmtIqd);

      const mainTxId = 'TX-' + Math.floor(100000 + Math.random() * 900000);
      const cwTxId = 'CW-GR-' + Math.floor(100000 + Math.random() * 900000);
      const nowIso = new Date().toISOString();

      const mainDebtRow = {
        TransID: mainTxId,
        AccountID: targetAccId,
        Date: nowIso,
        Amount: Number(grantAmtIqd),
        Currency: 'IQD',
        Direction: 'بدهکار',
        OperationType: 'ارسال به کیف پول کردیت',
        Description: customDesc || `ارسال ${formatEnMoney(grantAmtIqd)} IQD به کیف پول کردیت (${targetWId}) بابت تامین شارژ`,
        AssignedUserEmail: assigned,
        Status: 'ثبت شده'
      };

      const { error: mainTxErr } = await _supabase.from('transactions').insert([mainDebtRow]);
      if (mainTxErr) {
        hideRealLoading();
        alert('خطا در ثبت بدهکاری در حساب اصلی: ' + mainTxErr.message);
        return;
      }

      const wUpd = await updateCreditWalletBalanceInDb(targetWId, targetAccId, nextWBal);
      if (!wUpd.ok) {
        hideRealLoading();
        alert('خطا در افزایش موجودی کیف پول کردیت: ' + wUpd.error);
        return;
      }

      await insertCreditWalletTxRow({
        tx_id: cwTxId,
        wallet_id: targetWId,
        account_id: targetAccId,
        operation_type: 'admin_grant_debt',
        direction: 'credit',
        amount_iqd: Number(grantAmtIqd),
        amount_afn: 0,
        exchange_rate: Number(getAfnExchangeRate()),
        main_tx_id: mainTxId,
        description: customDesc || `افزایش ${formatEnMoney(grantAmtIqd)} IQD به کیف کردیت و ثبت بدهکار در حساب اصلی (${mainTxId})`,
        created_at: nowIso
      });

      document.getElementById('mgmtCwGrantAmountIqd').value = '';
      document.getElementById('mgmtCwGrantDesc').value = '';

      await fetchDataFromSupabaseFresh();
      if (currentFoundUser) {
        const curId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
        processDashboard(curId, false);
        await refreshCreditWalletData(true);
      }
      hideRealLoading();
      playSound('success');

      const summaryMsg = `حساب: ${targetName} (${targetAccId}) | افزایش کیف کردیت: ${formatEnMoney(grantAmtIqd)} IQD (موجودی جدید کیف: ${formatEnMoney(nextWBal)} IQD) | بدهکار ثبت‌شده در حساب اصلی: ${formatEnMoney(grantAmtIqd)} IQD`;
      if (resEl) resEl.innerText = summaryMsg;
      alert(summaryMsg);
    }

    function recalcTopupCost() {
      const netIqd = getNetIqdBalance();
      const creditWalletIqd = getCurrentCreditWalletBalanceIqd();
      const rate = getAfnExchangeRate();

      const afnAmt = parseFloat(toEnglishDigits(document.getElementById('afnAmountInput').value)) || 0;
      const reqIqd = Math.round(afnAmt * rate);
      const afnBox = document.getElementById('afnCalcBox');
      const afnErr = document.getElementById('topupAfnEligibilityMsg');
      const afnBtn = document.getElementById('btnExecuteTopupAfn');
      document.getElementById('afnCalculatedIqd').innerText = `${formatEnMoney(reqIqd)} (موجودی کیف کردیت: ${formatEnMoney(creditWalletIqd)} IQD)`;

      if (!appSettingsState.topup_afn_enabled) {
        afnBox.classList.add('error');
        afnErr.innerText = 'ارسال کردیت در جدول تنظیمات غیرفعال است.';
        if (afnBtn) afnBtn.disabled = true;
      } else if (creditWalletIqd <= 0 || reqIqd > creditWalletIqd) {
        afnBox.classList.add('error');
        afnErr.innerText = 'موجودی کیف پول کردیت کافی نیست. ابتدا از حساب اصلی به کیف کردیت منتقل کنید.';
        if (afnBtn) afnBtn.disabled = true;
      } else {
        afnBox.classList.remove('error');
        afnErr.innerText = '';
        if (afnBtn) afnBtn.disabled = false;
      }

      const iqPkgInfo = getSelectedIraqPackageInfo();
      const cardAmt = iqPkgInfo.cardAmount;
      const chargeAmt = iqPkgInfo.chargeAmount;
      const iqBox = document.getElementById('iqCalcBox');
      const iqErr = document.getElementById('topupIqEligibilityMsg');
      const iqBtn = document.getElementById('btnExecuteTopupIq');
      document.getElementById('iqCalculatedIqd').innerText = formatEnMoney(chargeAmt);

      if (!appSettingsState.topup_iq_enabled) {
        iqBox.classList.add('error');
        iqErr.innerText = 'شارژ عراق در جدول تنظیمات غیرفعال است.';
        if (iqBtn) iqBtn.disabled = true;
      } else if (netIqd <= 0 || chargeAmt > netIqd) {
        iqBox.classList.add('error');
        iqErr.innerText = 'موجودی دینار کافی نیست.';
        if (iqBtn) iqBtn.disabled = true;
      } else {
        iqBox.classList.remove('error');
        iqErr.innerText = '';
        if (iqBtn) iqBtn.disabled = false;
      }
    }

    const AFN_PREFIX_OPERATOR_MAP = {
      '070': { code: 'awcc', label: 'افغان بی‌سیم' },
      '071': { code: 'awcc', label: 'افغان بی‌سیم' },
      '072': { code: 'roshan', label: 'روشن' },
      '079': { code: 'roshan', label: 'روشن' },
      '073': { code: 'etisalat', label: 'اتصالات' },
      '078': { code: 'etisalat', label: 'اتصالات' },
      '074': { code: 'salam', label: 'سلام' },
      '077': { code: 'atoma', label: 'ام‌تی‌ان' },
      '076': { code: 'atoma', label: 'ام‌تی‌ان' }
    };

    function detectAfnOperatorFromPhone(rawPhone) {
      const digits = toEnglishDigits(String(rawPhone || '')).replace(/\D/g, '');
      let localPhone = '';
      if (/^07\d{8}$/.test(digits)) {
        localPhone = digits;
      } else if (/^937\d{8}$/.test(digits)) {
        localPhone = '0' + digits.slice(2);
      } else {
        return null;
      }
      const prefix = localPhone.slice(0, 3);
      const matched = AFN_PREFIX_OPERATOR_MAP[prefix];
      if (!matched) return null;
      return {
        localPhone: localPhone,
        intlPhone: '93' + localPhone.slice(1),
        prefix: prefix,
        operatorCode: matched.code,
        networkLabel: matched.label
      };
    }

    async function executeCustomerTopup(mode) {
      if (!currentFoundUser) return;
      // optional sync
      if (mode === 'afn' && !appSettingsState.topup_afn_enabled) {
        alert('ارسال کردیت توسط مدیریت غیرفعال است.');
        return;
      }
      if (mode === 'iq' && !appSettingsState.topup_iq_enabled) {
        alert('شارژ عراق توسط مدیریت غیرفعال است.');
        return;
      }

      const accId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
      await forceSyncBeforeOperation(accId);
      const netIqd = getNetIqdBalance();
      const rate = getAfnExchangeRate();
      const accName = String(getVal(currentFoundUser, ['Name', 'name', 'fullname']) || 'مشتری').trim();
      const accPhone = toEnglishDigits(getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']) || '---');

      let payloadData = null;
      let summaryHtml = '';
      if (mode === 'afn') {
        const rawPhoneInput = toEnglishDigits(document.getElementById('afnTargetPhone').value.trim());
        const detectedOp = detectAfnOperatorFromPhone(rawPhoneInput);
        const afnAmt = parseFloat(toEnglishDigits(document.getElementById('afnAmountInput').value));
        if (!detectedOp) {
          alert('شماره واردشده باید شماره معتبر شبکه‌های تایید شده افغانستان باشد (مانند 070، 071، 072، 073، 074، 076، 077، 078، 079).');
          return;
        }
        const targetPhone = detectedOp.localPhone;
        const afnNetwork = detectedOp.networkLabel;
        const operatorCode = detectedOp.operatorCode;
        if (isNaN(afnAmt) || afnAmt <= 0) {
          alert('مبلغ را وارد کنید.');
          return;
        }
        await refreshCreditWalletData(false);
        const creditWalletIqd = getCurrentCreditWalletBalanceIqd();
        const requiredIqd = Math.round(afnAmt * rate);
        if (requiredIqd > creditWalletIqd || creditWalletIqd <= 0) {
          alert('موجودی کیف پول کردیت کافی نیست.');
          return;
        }
        payloadData = { mode: 'afn', accId, accName, afnNetwork, operatorCode, targetPhone, intlPhone: detectedOp.intlPhone, afnAmt, requiredIqd, rate };
        summaryHtml = `ارسال کردیت (${afnNetwork}) — <b class="eng-num">${formatEnMoney(afnAmt)} AFN</b> به <span class="eng-num">${targetPhone}</span> (<b class="eng-num">${formatEnMoney(requiredIqd)} IQD</b>)`;
      } else {
        const network = document.getElementById('iqNetworkSelect').value;
        const iqPkgInfo = getSelectedIraqPackageInfo();
        const cardAmt = iqPkgInfo.cardAmount;
        const chargeAmt = iqPkgInfo.chargeAmount;
        if (cardAmt <= 0 || chargeAmt <= 0 || chargeAmt > netIqd) {
          alert('موجودی دینار کافی نیست.');
          return;
        }
        payloadData = { mode: 'iq', accId, accName, accPhone, network, cardAmt, chargeAmt, pkgLabel: iqPkgInfo.label };
        summaryHtml = `شارژ <b>${network}</b> — مقدار شارژ: <b class="eng-num">${formatEnMoney(cardAmt)} IQD</b> (کسر از حساب: <b class="eng-num">${formatEnMoney(chargeAmt)} IQD</b>)`;
      }

      if (!isTxBiometricEnabled()) {
        const hasPin = await ensureAccountHasPin(accId);
        if (!hasPin) return;
      }

      openOperationAuthModal('تایید عملیات شارژ', summaryHtml, { kind: 'topup', data: payloadData });
    }

    async function ensureAccountHasPin(accId) {
      showRealLoading('در حال بررسی رمز...', 'بررسی امنیت');
      await fetchDataFromSupabaseFresh();
      const refreshed = accountsList.find(u =>
        String(getVal(u, ['AccountID', 'accountid', 'ID', 'account_id'])).trim().toLowerCase() === String(accId).toLowerCase()
      );
      if (refreshed) currentFoundUser = refreshed;
      hideRealLoading();

      const stored = getStoredPinHashForAccount(currentFoundUser, accId);
      if (!stored) {
        openLegacyPinActivationModal(accId);
        return false;
      }
      return true;
    }

    function closeTxPinConfirmModal() {
      document.getElementById('txPinConfirmModal').classList.add('hidden');
      pendingAction = null;
    }

    async function executeConfirmedAction(actionObj) {
      document.getElementById('txPinConfirmModal').classList.add('hidden');
      pendingAction = null;
      if (actionObj.kind === 'transfer') {
        await runAccountTransfer(actionObj.data);
      } else if (actionObj.kind === 'topup') {
        await runTopupAfterPin(actionObj.data);
      }
    }

    async function confirmOperationWithDeviceLock() {
      if (!pendingAction || !currentFoundUser) return;
      const ok = await triggerBiometricAuth('تایید انجام تراکنش با اثر انگشت یا قفل گوشی');
      if (!ok) {
        alert('تایید اثر انگشت/قفل گوشی انجام نشد. می‌توانید از رمز ثابت استفاده کنید.');
        return;
      }
      const actionObj = pendingAction;
      await executeConfirmedAction(actionObj);
    }

    async function confirmPendingOperation() {
      if (!pendingAction || !currentFoundUser) return;
      const accId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
      const hasPin = await ensureAccountHasPin(accId);
      if (!hasPin) return;

      const pinRaw = toEnglishDigits(document.getElementById('txVerifyPinInput').value.trim());
      if (!pinRaw) {
        alert('رمز ثابت را وارد کنید.');
        return;
      }

      const isValidPin = await verifyPinAgainstDatabaseColumn(accId, pinRaw, currentFoundUser);
      if (!isValidPin) {
        alert('رمز ثابت اشتباه است.');
        return;
      }

      const actionObj = pendingAction;
      await executeConfirmedAction(actionObj);
    }

    async function runAccountTransfer(d) {
      await forceSyncBeforeOperation(d.fromId);
      if (!appSettingsState.transfer_enabled) {
        alert('انتقال موجودی در تنظیمات غیرفعال است.');
        return;
      }
      showRealLoading('در حال انتقال...', 'ثبت تراکنش');
      const prevIds = getUserTransactionIds(d.fromId);
      const nowIso = new Date().toISOString();
      const baseCode = 'TR-' + Math.floor(100000 + Math.random() * 900000);
      const assigned = getVal(currentFoundUser, ['AssignedUserEmail', 'assigneduseremail']) || d.assignedEmail || OWNER_EMAIL;

      const debitRow = {
        TransID: `${baseCode}-D`,
        AccountID: d.fromId,
        Date: nowIso,
        Amount: Number(d.amt),
        Currency: d.curr,
        Direction: 'بدهکار',
        OperationType: 'انتقال موجودی',
        Description: `به ${d.toName} (${d.toId})`,
        AssignedUserEmail: assigned,
        Status: 'ثبت شده'
      };

      const creditRow = {
        TransID: `${baseCode}-C`,
        AccountID: d.toId,
        Date: nowIso,
        Amount: Number(d.amt),
        Currency: d.curr,
        Direction: 'بستانکار',
        OperationType: 'دریافت انتقال',
        Description: `از ${d.fromName} (${d.fromId})`,
        AssignedUserEmail: d.assignedEmail || assigned,
        Status: 'ثبت شده'
      };

      const { error } = await _supabase.from('transactions').insert([debitRow, creditRow]);
      hideRealLoading();

      if (error) {
        alert('خطا در انتقال: ' + error.message);
        return;
      }

      resetAllOperationForms();
      resetMandatorySyncState();
      collapseServiceForms();
      await fetchDataFromSupabaseFresh();
      processDashboard(d.fromId, false);
      resetAllOperationForms();
      collapseServiceForms();
      updateLastSyncLabel();
      const curIds = getUserTransactionIds(d.fromId);
      try { localStorage.setItem(`karimi_seen_tx_ids_${d.fromId.trim().toLowerCase()}`, JSON.stringify(curIds)); } catch (e) {}
      if (curIds.length > prevIds.length) {
        notifyAccountEvent('انتقال موجودی انجام شد', `${formatEnMoney(d.amt)} ${d.curr} به ${d.toName} منتقل شد.`);
      }
      showReceiptForTransactionData(debitRow);
    }

    async function runTopupAfterPin(payload) {
      await forceSyncBeforeOperation(payload.accId);
      if (payload.mode === 'afn' && !appSettingsState.topup_afn_enabled) {
        alert('ارسال کردیت در تنظیمات غیرفعال است.');
        return;
      }
      if (payload.mode === 'iq' && !appSettingsState.topup_iq_enabled) {
        alert('شارژ عراق در تنظیمات غیرفعال است.');
        return;
      }
      if (payload.mode === 'afn') {
        const prevIds = getUserTransactionIds(payload.accId);
        const nowIso = new Date().toISOString();
        const txId = 'AFN-' + Math.floor(100000 + Math.random() * 900000);
        const assigned = getVal(currentFoundUser, ['AssignedUserEmail', 'assigneduseremail']) || OWNER_EMAIL;

        showRealLoading('در حال ارسال کردیت...', 'تشخیص خودکار شبکه و ارتباط با شرکت سرویس‌دهنده');
        const detectedOp = detectAfnOperatorFromPhone(payload.targetPhone);
        if (!detectedOp) {
          hideRealLoading();
          showTopupRawErrorModal('Unsupported Afghan mobile prefix or network');
          return;
        }
        const intlPhone = payload.intlPhone || detectedOp.intlPhone;
        const resolvedNetwork = payload.afnNetwork || detectedOp.networkLabel;
        const resolvedOperatorCode = payload.operatorCode || detectedOp.operatorCode;

        const endpointUrl = (appSettingsState.afn_api_endpoint || '/api/iimobile-topup').trim() || '/api/iimobile-topup';
        const modeVal = (appSettingsState.afn_api_mode || 'proxy_api').trim() || 'proxy_api';

        function extractRealProviderErrorMessage(respObj, rawBodyStr, parsedJson) {
          const candidates = [
            parsedJson && parsedJson.company_message,
            parsedJson && parsedJson.initiate_company_message,
            parsedJson && parsedJson.execute_company_message,
            parsedJson && parsedJson.error_message,
            parsedJson && parsedJson.error,
            parsedJson && parsedJson.message,
            parsedJson && parsedJson.msg,
            parsedJson && parsedJson.detail,
            parsedJson && parsedJson.description,
            parsedJson && parsedJson.reason,
            parsedJson && parsedJson.raw && parsedJson.raw.company_message,
            parsedJson && parsedJson.raw && parsedJson.raw.msg,
            parsedJson && parsedJson.raw && parsedJson.raw.message,
            parsedJson && parsedJson.raw && parsedJson.raw.error,
            parsedJson && parsedJson.raw && parsedJson.raw.detail,
            parsedJson && parsedJson.initiate_raw && parsedJson.initiate_raw.msg,
            parsedJson && parsedJson.initiate_raw && parsedJson.initiate_raw.message,
            parsedJson && parsedJson.initiate_raw && parsedJson.initiate_raw.error,
            parsedJson && parsedJson.execute_raw && parsedJson.execute_raw.msg,
            parsedJson && parsedJson.execute_raw && parsedJson.execute_raw.message,
            parsedJson && parsedJson.execute_raw && parsedJson.execute_raw.error
          ];

          let picked = '';
          for (const c of candidates) {
            if (c !== undefined && c !== null) {
              const s = typeof c === 'string' ? c.trim() : JSON.stringify(c);
              if (s && s !== 'null' && s !== 'undefined') {
                picked = s;
                break;
              }
            }
          }

          const stagePrefix = (parsedJson && parsedJson.stage) ? `[${String(parsedJson.stage).trim()}] ` : '';
          if (picked && picked !== 'Bad Request') {
            return `${stagePrefix}${picked}`;
          }

          const bodyFallback = (rawBodyStr && rawBodyStr.trim()) ? rawBodyStr.trim() : (parsedJson ? JSON.stringify(parsedJson) : '');
          const httpPart = `HTTP ${respObj.status}${respObj.statusText ? ' ' + respObj.statusText : ''}`.trim();
          return bodyFallback ? `${stagePrefix}${httpPart} | ${bodyFallback}` : `${stagePrefix}${httpPart}`;
        }

        function evaluateStrictProviderSuccess(respObj, parsedJson) {
          if (!respObj || !respObj.ok) {
            return { confirmed: false, txCode: '', companyMsg: '' };
          }
          if (!parsedJson || typeof parsedJson !== 'object') {
            return { confirmed: false, txCode: '', companyMsg: '' };
          }
          if (parsedJson.ok !== true) {
            return { confirmed: false, txCode: '', companyMsg: '' };
          }
          if (parsedJson.success === false || parsedJson.failed === true || parsedJson.error) {
            return { confirmed: false, txCode: '', companyMsg: '' };
          }

          const statusNorm = String(
            parsedJson.status ||
            parsedJson.tx_status ||
            parsedJson.state ||
            (parsedJson.raw && (parsedJson.raw.status || parsedJson.raw.state)) ||
            ''
          ).trim().toLowerCase();

          const negativeStatuses = ['failed', 'fail', 'error', 'rejected', 'declined', 'denied', 'cancelled', 'canceled', 'invalid', 'timeout', 'expired', 'reversed'];
          if (statusNorm && negativeStatuses.includes(statusNorm)) {
            return { confirmed: false, txCode: '', companyMsg: '' };
          }

          const rawTxCode = (
            parsedJson.txid ||
            parsedJson.txnid ||
            parsedJson.transaction_id ||
            parsedJson.reference_id ||
            parsedJson.tracking_code ||
            parsedJson.ref ||
            parsedJson.id ||
            (parsedJson.raw && (parsedJson.raw.txid || parsedJson.raw.txnid || parsedJson.raw.transaction_id || parsedJson.raw.reference_id || parsedJson.raw.tracking_code || parsedJson.raw.ref || parsedJson.raw.id)) ||
            ''
          );
          const txCodeStr = String(rawTxCode || '').trim() || ('II-' + Date.now().toString().slice(-6));

          const rawMsg = (
            parsedJson.company_message ||
            parsedJson.message ||
            parsedJson.msg ||
            (parsedJson.raw && (parsedJson.raw.company_message || parsedJson.raw.msg || parsedJson.raw.message)) ||
            ''
          );
          const companyMsgStr = typeof rawMsg === 'string' ? rawMsg.trim() : (rawMsg ? JSON.stringify(rawMsg) : '');

          return { confirmed: true, txCode: txCodeStr, companyMsg: companyMsgStr };
        }

        let apiOk = false;
        let apiRef = '';
        let lastErr = '';

        try {
          const resp = await fetch(endpointUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              operator: resolvedOperatorCode,
              mode: modeVal,
              network: resolvedNetwork,
              phone: intlPhone,
              amount: Number(payload.afnAmt),
              rate: Number(payload.rate || getAfnExchangeRate())
            })
          });

          const rawText = await resp.text();
          let json = null;
          try {
            json = rawText ? JSON.parse(rawText) : null;
          } catch (parseErr) {
            json = null;
          }

          const verdict = evaluateStrictProviderSuccess(resp, json);
          if (verdict.confirmed) {
            apiOk = true;
            apiRef = verdict.txCode;
            payload.companyResponse = verdict.companyMsg;
          } else {
            apiOk = false;
            lastErr = extractRealProviderErrorMessage(resp, rawText, json);
          }
        } catch (err) {
          apiOk = false;
          lastErr = (err && err.message) ? String(err.message) : 'Network connection failed';
        }

        if (!apiOk || !apiRef) {
          hideRealLoading();
          notifyAccountEvent('ارسال کردیت ناموفق', lastErr || 'پاسخ منفی یا خطا در ارتباط با شرکت سرویس‌دهنده');
          showTopupRawErrorModal(lastErr || 'Provider rejected transaction or connection failed');
          return;
        }

        await ensureCreditWalletRow(payload.accId);
        const wId = getCurrentCreditWalletId();
        const curWBal = getCurrentCreditWalletBalanceIqd();
        if (curWBal < Number(payload.requiredIqd)) {
          hideRealLoading();
          alert('موجودی کیف پول کردیت کافی نیست.');
          return;
        }
        const nextWBal = Math.max(0, curWBal - Number(payload.requiredIqd));
        const wUpdateRes = await updateCreditWalletBalanceInDb(wId, payload.accId, nextWBal);
        if (!wUpdateRes.ok) {
          hideRealLoading();
          alert('خطا در کسر مبلغ از کیف پول کردیت: ' + wUpdateRes.error);
          return;
        }

        const companyRespNote = payload.companyResponse ? ` | پاسخ شرکت: ${payload.companyResponse}` : '';
        const officialAfnDesc = `رسید رسمی ارسال کردیت افغانستان (از کیف پول کردیت ${wId}) — صاحب حساب: ${payload.accName} | مبلغ ${formatEnMoney(payload.afnAmt)} AFN (معادل ${formatEnMoney(payload.requiredIqd)} IQD) به شماره ${payload.targetPhone} (${resolvedNetwork}) با کد پیگیری ${apiRef} موفقانه ارسال شد.${companyRespNote}`;

        const cwInsertRes = await insertCreditWalletTxRow({
          tx_id: txId,
          wallet_id: wId,
          account_id: payload.accId,
          operation_type: 'credit_topup',
          direction: 'debit',
          amount_iqd: Number(payload.requiredIqd),
          amount_afn: Number(payload.afnAmt),
          exchange_rate: Number(payload.rate),
          target_phone: String(payload.targetPhone),
          operator_code: String(resolvedOperatorCode),
          external_ref: String(apiRef),
          description: officialAfnDesc,
          created_at: nowIso
        });

        const afnTxRow = {
          TransID: txId,
          AccountID: payload.accId,
          Date: nowIso,
          Amount: Number(payload.requiredIqd),
          Currency: 'IQD',
          Direction: 'بدهکار',
          OperationType: 'ارسال کردیت',
          Description: officialAfnDesc,
          AssignedUserEmail: assigned,
          Status: 'تایید شده'
        };

        const { error: mainTxInsertErr } = await _supabase.from('transactions').insert([afnTxRow]);
        if (mainTxInsertErr) {
          hideRealLoading();
          alert('خطا در ثبت تراکنش در جدول تراکنش‌ها: ' + mainTxInsertErr.message);
          return;
        }

        hideRealLoading();
        resetAllOperationForms();
        collapseServiceForms();
        await fetchDataFromSupabaseFresh();
        processDashboard(payload.accId, false);
        await refreshCreditWalletData(true);
        resetAllOperationForms();
        collapseServiceForms();
        updateLastSyncLabel();
        const curIds = getUserTransactionIds(payload.accId);
        try { localStorage.setItem(`karimi_seen_tx_ids_${payload.accId.trim().toLowerCase()}`, JSON.stringify(curIds)); } catch (e) {}
        if (curIds.length > prevIds.length || (cwInsertRes && cwInsertRes.ok)) {
          notifyAccountEvent('ارسال کردیت انجام شد', `کد پیگیری: ${apiRef}`);
        }
        showReceiptForTransactionData(afnTxRow);
      } else {
        const prevIds = getUserTransactionIds(payload.accId);
        const nowIso = new Date().toISOString();
        const txId = 'IQ-' + Math.floor(100000 + Math.random() * 900000);
        const assigned = getVal(currentFoundUser, ['AssignedUserEmail', 'assigneduseremail']) || OWNER_EMAIL;
        const iqChargeAmt = Number(payload.chargeAmt ?? payload.cardAmt) || Number(payload.cardAmt) || 0;
        const iqCardAmt = Number(payload.cardAmt) || iqChargeAmt;
        const apiResult = await callExternalTopupApi({
          txId,
          accountId: payload.accId,
          accountName: payload.accName,
          network: payload.network,
          amount: iqChargeAmt,
          cardAmount: iqCardAmt,
          currency: 'IQD'
        });
        const refSuffix = (apiResult.handledByExternalApi && apiResult.referenceId) ? ` | کد پیگیری: ${apiResult.referenceId}` : '';
        const iqTxRow = {
          TransID: txId,
          AccountID: payload.accId,
          Date: nowIso,
          Amount: iqChargeAmt,
          Currency: 'IQD',
          Direction: 'بدهکار',
          OperationType: 'شارژ عراق',
          Description: `رسید رسمی شارژ عراق — صاحب حساب: ${payload.accName} | شبکه: ${payload.network} | مبلغ شارژ: ${formatEnMoney(iqCardAmt)} IQD | مبلغ کسر: ${formatEnMoney(iqChargeAmt)} IQD${refSuffix} موفقانه ثبت شد.`,
          AssignedUserEmail: assigned,
          Status: apiResult.handledByExternalApi ? (apiResult.ok ? 'تایید شده' : 'ناموفق') : 'ثبت شده'
        };
        const { error } = await _supabase.from('transactions').insert([iqTxRow]);
        hideRealLoading();

        if (error) {
          alert('خطا در ثبت تراکنش: ' + error.message);
          return;
        }

        resetAllOperationForms();
        collapseServiceForms();
        await fetchDataFromSupabaseFresh();
        processDashboard(payload.accId, false);
        resetAllOperationForms();
        collapseServiceForms();
        updateLastSyncLabel();
        const curIds = getUserTransactionIds(payload.accId);
        try { localStorage.setItem(`karimi_seen_tx_ids_${payload.accId.trim().toLowerCase()}`, JSON.stringify(curIds)); } catch (e) {}
        if (curIds.length > prevIds.length) {
          notifyAccountEvent('شارژ عراق ثبت شد', `${payload.network} — ${formatEnMoney(payload.cardAmt)} IQD`);
        }

        const dateOnlyNow = extractDateOnly(nowIso);
        const timeOnlyNow = extractTimeOnly(nowIso) || '';
        const waAdminUrl = buildIraqTopupAdminWhatsAppUrl({
          accName: payload.accName,
          accId: payload.accId,
          accPhone: payload.accPhone || toEnglishDigits(getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']) || '---'),
          network: payload.network,
          cardAmt: payload.cardAmt,
          txId: txId,
          dateStr: `${dateOnlyNow} ${timeOnlyNow}`.trim()
        });
        lastIraqTopupAdminUrl = waAdminUrl;

        showReceiptForTransactionData(iqTxRow);
        window.open(waAdminUrl, '_blank');
      }
    }

    function openLegacyPinActivationModal(accId) {
      const nameVal = getVal(currentFoundUser, ['Name', 'name', 'fullname']) || 'مشتری';
      const phoneVal = getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']) || '';
      const msg = encodeURIComponent(`فعال‌سازی رمز ثابت\nنام: ${nameVal}\nکد حساب: ${accId}\nشماره: ${phoneVal}`);
      document.getElementById('legacyActivateWhatsAppBtn').href = `https://wa.me/${OWNER_WHATSAPP}?text=${msg}`;
      document.getElementById('legacyPinActivationModal').classList.remove('hidden');
      ensureSentinelHistory();
    }

    function closeLegacyPinActivationModal() {
      document.getElementById('legacyPinActivationModal').classList.add('hidden');
    }

    function openSetPinModal() {
      playSound('click');
      if (!currentFoundUser) return;
      const accId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
      if (!getStoredPinHashForAccount(currentFoundUser, accId)) {
        openLegacyPinActivationModal(accId);
        return;
      }
      document.getElementById('oldAccountPinInput').value = '';
      document.getElementById('newAccountPinInput').value = '';
      document.getElementById('confirmAccountPinInput').value = '';
      document.getElementById('setPinModal').classList.remove('hidden');
      ensureSentinelHistory();
    }

    function closeSetPinModal() {
      document.getElementById('setPinModal').classList.add('hidden');
    }

    async function saveAccountPassword() {
      if (!currentFoundUser) return;
      const accId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
      const oldPin = toEnglishDigits(document.getElementById('oldAccountPinInput').value.trim());
      const p1 = toEnglishDigits(document.getElementById('newAccountPinInput').value.trim());
      const p2 = toEnglishDigits(document.getElementById('confirmAccountPinInput').value.trim());

      const validOld = await verifyPinAgainstDatabaseColumn(accId, oldPin, currentFoundUser);
      if (!validOld) {
        alert('رمز فعلی صحیح نیست.');
        return;
      }
      if (p1.length < 4 || p1 !== p2) {
        alert('رمز جدید حداقل ۴ کاراکتر و یکسان باشد.');
        return;
      }

      showRealLoading('در حال ذخیره...', 'به‌روزرسانی ستون PinHash');
      const ok = await setPinInDatabaseColumn(accId, p1);
      await fetchDataFromSupabaseFresh();
      const refreshed = accountsList.find(u =>
        String(getVal(u, ['AccountID', 'accountid', 'ID', 'account_id'])).trim().toLowerCase() === accId.toLowerCase()
      );
      if (refreshed) currentFoundUser = refreshed;
      hideRealLoading();

      if (!ok) {
        alert('خطا در ذخیره رمز.');
        return;
      }
      closeSetPinModal();
      updatePinMenuLabel(accId);
      notifyAccountEvent('رمز ثابت تغییر کرد', 'رمز ثابت حساب شما با موفقیت بروزرسانی شد.');
    }

    function updatePinMenuLabel(accId) {
      const hasPin = Boolean(getStoredPinHashForAccount(currentFoundUser, accId));
      document.getElementById('setPinMenuTitle').innerText = hasPin ? 'تغییر رمز ثابت' : 'فعال‌سازی رمز ثابت';
    }

    function isTxBiometricEnabled() {
      const saved = localStorage.getItem('karimi_tx_biometric_enabled');
      if (saved === null) return true;
      return saved === 'true';
    }

    function updateBioStatusLabel() {
      const enabled = localStorage.getItem('karimi_biometric_enabled') === 'true';
      document.getElementById('bioStatusSub').innerText = enabled ? 'فعال (اثر انگشت / قفل گوشی)' : 'غیرفعال';
    }

    function updateTxBioStatusLabel() {
      const enabled = isTxBiometricEnabled();
      document.getElementById('txBioStatusSub').innerText = enabled
        ? 'فعال — تایید با قفل گوشی (رمز ثابت پشتیبان)'
        : 'غیرفعال — فقط رمز ثابت';
    }

    function getCapacitorBiometricPlugin() {
      try {
        const cap = window.Capacitor;
        if (!cap) return null;
        if (cap.Plugins) {
          return cap.Plugins.NativeBiometric || cap.Plugins.BiometricAuth || cap.Plugins.Biometric || null;
        }
        if (typeof cap.registerPlugin === 'function') {
          return cap.registerPlugin('NativeBiometric');
        }
      } catch (e) {}
      return null;
    }

    async function triggerBiometricAuth(reasonText = 'تایید هویت با اثر انگشت یا قفل گوشی (PIN / الگو / رمز)') {
      const bioPlugin = getCapacitorBiometricPlugin();
      if (bioPlugin) {
        try {
          if (typeof bioPlugin.isAvailable === 'function') {
            await bioPlugin.isAvailable().catch(() => null);
          }
          if (typeof bioPlugin.verifyIdentity === 'function') {
            await bioPlugin.verifyIdentity({
              reason: reasonText,
              title: 'امانت‌داری کریمی',
              subtitle: 'قفل گوشی (اثر انگشت، PIN، الگو یا رمز عبور)',
              description: reasonText,
              negativeButtonText: 'رمز ثابت برنامه',
              useFallback: true,
              allowDeviceCredential: true,
              deviceCredentialTitle: 'قفل صفحه گوشی',
              deviceCredentialSubtitle: 'پین، الگو یا رمز عبور دستگاه را وارد کنید'
            });
            return true;
          }
          if (typeof bioPlugin.authenticate === 'function') {
            await bioPlugin.authenticate({
              reason: reasonText,
              title: 'امانت‌داری کریمی',
              allowDeviceCredential: true,
              fallbackTitle: 'استفاده از قفل گوشی'
            });
            return true;
          }
        } catch (err) {
          return false;
        }
      }

      try {
        const bridges = [window.AndroidBridge, window.Android, window.NativeBridge];
        for (const br of bridges) {
          if (br && typeof br.requestDeviceAuth === 'function') {
            const res = br.requestDeviceAuth(reasonText);
            return Boolean(res);
          }
        }
      } catch (e) {}

      if (window.PublicKeyCredential && navigator.credentials && typeof navigator.credentials.get === 'function') {
        try {
          const cred = await navigator.credentials.get({
            publicKey: {
              challenge: new Uint8Array([14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182, 196, 210, 224]),
              timeout: 60000,
              userVerification: 'required'
            }
          });
          if (cred) return true;
        } catch (e) {
          return false;
        }
      }

      return true;
    }

    async function loginWithBiometric() {
      playSound('click');
      requestExternalNotificationPermission();
      const bioPhone = localStorage.getItem('karimi_biometric_phone');
      const bioAccId = localStorage.getItem('karimi_biometric_accId');
      if (localStorage.getItem('karimi_biometric_enabled') !== 'true' || !bioPhone || !bioAccId) {
        alert('اثر انگشت فعال نیست.');
        return;
      }
      const ok = await triggerBiometricAuth('ورود به حساب با اثر انگشت یا قفل گوشی');
      if (!ok) {
        alert('احراز هویت با قفل گوشی تایید نشد.');
        return;
      }
      showRealLoading('در حال ورود...', 'دریافت اطلاعات');
      await Promise.all([fetchDataFromSupabaseFresh(), fetchAppSettingsFromSupabase()]);
      hideRealLoading();
      autoLogin(bioPhone, bioAccId, true);
      subscribeRealtimeAccountEvents(bioAccId);
      subscribeRealtimeSettings();
      updateLastSyncLabel();
    }

    async function confirmEnableBiometric() {
      playSound('success');
      const ok = await triggerBiometricAuth('فعال‌سازی اثر انگشت یا قفل گوشی برای حساب');
      if (!ok) {
        alert('تایید قفل گوشی انجام نشد.');
        return;
      }
      const phoneVal = getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']);
      const sheetAccId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
      localStorage.setItem('karimi_biometric_enabled', 'true');
      localStorage.setItem('karimi_biometric_phone', phoneVal);
      localStorage.setItem('karimi_biometric_accId', sheetAccId);
      if (localStorage.getItem('karimi_tx_biometric_enabled') === null) {
        localStorage.setItem('karimi_tx_biometric_enabled', 'true');
      }
      document.getElementById('biometricPromptModal').classList.add('hidden');
      updateBioStatusLabel();
      updateTxBioStatusLabel();
    }

    function dismissBiometricPrompt() {
      playSound('click');
      document.getElementById('biometricPromptModal').classList.add('hidden');
    }

    async function toggleBiometricSetting() {
      playSound('click');
      const enabled = localStorage.getItem('karimi_biometric_enabled') === 'true';
      if (enabled) {
        localStorage.setItem('karimi_biometric_enabled', 'false');
        updateBioStatusLabel();
      } else {
        await confirmEnableBiometric();
      }
    }

    async function toggleTxBiometricSetting() {
      playSound('click');
      const current = isTxBiometricEnabled();
      if (current) {
        localStorage.setItem('karimi_tx_biometric_enabled', 'false');
        updateTxBioStatusLabel();
      } else {
        const ok = await triggerBiometricAuth('فعال‌سازی تایید تراکنش با اثر انگشت یا قفل گوشی');
        if (!ok) {
          alert('تایید قفل گوشی انجام نشد.');
          return;
        }
        localStorage.setItem('karimi_tx_biometric_enabled', 'true');
        if (currentFoundUser) {
          const phoneVal = getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']);
          const sheetAccId = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
          localStorage.setItem('karimi_biometric_enabled', 'true');
          localStorage.setItem('karimi_biometric_phone', phoneVal);
          localStorage.setItem('karimi_biometric_accId', sheetAccId);
        }
        updateBioStatusLabel();
        updateTxBioStatusLabel();
      }
    }

    function syncProfileTabData() {
      if (!currentFoundUser) return;
      document.getElementById('profileFullName').innerText = getVal(currentFoundUser, ['Name', 'name', 'fullname']) || '---';
      document.getElementById('profileCounterpartyName').innerText = resolveCounterpartyName(currentFoundUser);
      document.getElementById('profileAccIdVal').innerText = String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id'])).trim();
      document.getElementById('profilePhoneVal').innerText = toEnglishDigits(getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']) || '---');
      updateBioStatusLabel();
      updateTxBioStatusLabel();
      updateNotifModeLabel();
      updateManagementBadgeUi();
      updateChargeTransactionsBadge();
    }

    function renderTransactionsList() {
      const homeContainer = document.getElementById('transactionsContainer');
      document.getElementById('txCountBadge').innerText = `${toEnglishDigits(customerTransactions.length)}`;

      if (customerTransactions.length === 0) {
        homeContainer.innerHTML = `<div class="empty-state-box"><div style="font-size:0.86rem; font-weight:800; color:var(--slate-500);">تراکنشی ثبت نشده است</div></div>`;
        return;
      }

      const sortedList = sortChronologically(customerTransactions, false);
      const groups = [];
      const groupMap = {};

      sortedList.forEach(tx => {
        const dayKey = extractDateOnly(getVal(tx, ['Date', 'date', 'created_at', 'CreatedAt']) || '');
        if (!groupMap[dayKey]) {
          groupMap[dayKey] = { date: dayKey, items: [] };
          groups.push(groupMap[dayKey]);
        }
        groupMap[dayKey].items.push(tx);
      });

      let html = '';
      groups.forEach(group => {
        const dayName = getPersianDayName(group.date);
        const dayTitle = dayName ? `${dayName} — ${toEnglishDigits(group.date)}` : toEnglishDigits(group.date);
        html += `<div class="day-divider"><span>${dayTitle}</span><span class="eng-num">${toEnglishDigits(group.items.length)}</span></div>`;

        group.items.forEach(tx => {
          const tid = String(getVal(tx, ['TransID', 'transid', 'id', 'transaction_id']) || '');
          const dir = String(getVal(tx, ['Direction', 'direction']));
          const isCredit = dir.includes('بستانکار') || dir.includes('دریافت');
          const amt = parseFloat(getVal(tx, ['Amount', 'amount', 'value'])) || 0;
          const opType = getVal(tx, ['OperationType', 'operationtype', 'type']) || 'تراکنش';
          const timeStr = extractTimeOnly(getVal(tx, ['Date', 'date', 'created_at'])) || '';
          const descStr = String(getVal(tx, ['Description', 'description', 'desc']) || '').replaceAll('+', ' ');
          const currStr = getVal(tx, ['Currency', 'currency']) || 'IQD';

          const origIdx = tid
            ? customerTransactions.findIndex(item => String(getVal(item, ['TransID', 'transid', 'id', 'transaction_id'])) === tid)
            : customerTransactions.indexOf(tx);

          html += `
            <div class="tx-item-row" onclick="openDetailModal(${origIdx >= 0 ? origIdx : 0})">
              <div class="tx-badge-icon ${(String(getVal(tx, ['Status', 'status']) || '').includes('تایید') || String(getVal(tx, ['Status', 'status']) || '').includes('موفق')) ? 'verified-green' : (isCredit ? 'credit' : 'debit')}">${(String(getVal(tx, ['Status', 'status']) || '').includes('تایید') || String(getVal(tx, ['Status', 'status']) || '').includes('موفق')) ? '✓' : (isCredit ? '↓' : '↑')}</div>
              <div class="tx-main-info">
                <div class="tx-op-title">${opType}</div>
                <div class="tx-desc-sub">${descStr}</div>
              </div>
              <div class="tx-amount-col">
                <span class="tx-amt-val ${isCredit ? 'credit' : 'debit'} eng-num">${isCredit ? '+' : '-'}${formatEnMoney(amt)} ${currStr}</span>
                <span class="tx-time-meta eng-num">${timeStr}</span>
              </div>
            </div>`;
        });
      });

      homeContainer.innerHTML = html;
      updateChargeTransactionsBadge();
      renderChargeTabList();
    }

    function openDetailModal(idx) {
      playSound('click');
      selectedTxItem = customerTransactions[idx];
      if (!selectedTxItem) return;
      showReceiptForTransactionData(selectedTxItem);
    }

    function closeTxDetailModal() {
      playSound('click');
      document.getElementById('txDetailModal').classList.remove('open');
    }

    function shareReceiptToWhatsApp() {
      playSound('click');
      if (!selectedTxItem) return;
      const tx = selectedTxItem;
      const amt = formatEnMoney(getVal(tx, ['Amount', 'amount', 'value']) || 0);
      const curr = getVal(tx, ['Currency', 'currency']) || 'IQD';
      const op = getVal(tx, ['OperationType', 'operationtype', 'type']) || 'تراکنش';
      const tid = getVal(tx, ['TransID', 'transid', 'id']) || '---';
      const date = extractDateOnly(getVal(tx, ['Date', 'date', 'created_at']));
      const name = getVal(currentFoundUser, ['Name', 'name']) || 'مشتری';

      const msg = `امانت‌داری کریمی\nنام: ${name}\nعملیات: ${op}\nمبلغ: ${amt} ${curr}\nسند: ${tid}\nتاریخ: ${date}`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
    }

    function openChargeAccountModal() {
      playSound('click');
      const phoneEl = document.getElementById('chargeAccAdminPhone');
      const waBtn = document.getElementById('chargeAccountWhatsAppBtn');
      if (phoneEl) phoneEl.innerText = OWNER_WHATSAPP;

      const accName = currentFoundUser ? (getVal(currentFoundUser, ['Name', 'name', 'fullname']) || 'مشتری') : 'مشتری';
      const accId = currentFoundUser ? String(getVal(currentFoundUser, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim() : (localStorage.getItem('karimi_accId') || '---');
      const accPhone = currentFoundUser ? toEnglishDigits(getVal(currentFoundUser, ['Phone', 'phone', 'تلفن']) || '') : (localStorage.getItem('karimi_phone') || '');
      const msg = `درخواست شارژ کردن حساب — امانت‌داری کریمی
نام: ${accName}
کد حساب: ${accId}
شماره: ${accPhone || '---'}
توضیح: لطفاً نحوه واریز وجه از طریق فرد دارای حساب یا هماهنگی شارژ حساب را اعلام فرمایید.`;

      if (waBtn) {
        waBtn.href = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
      }
      const modal = document.getElementById('chargeAccountModal');
      if (modal) modal.classList.remove('hidden');
      ensureSentinelHistory();
    }

    function closeChargeAccountModal() {
      playSound('click');
      const modal = document.getElementById('chargeAccountModal');
      if (modal) modal.classList.add('hidden');
    }

    function parseAfnAmountFromTx(tx) {
      const desc = String(getVal(tx, ['Description', 'description', 'desc']) || '');
      const matchAfn = toEnglishDigits(desc).match(/مبلغ\s*([0-9,.]+)\s*AFN/i);
      if (matchAfn && matchAfn[1]) {
        const n = parseFloat(matchAfn[1].replace(/,/g, ''));
        if (!isNaN(n) && n > 0) return n;
      }
      const curr = String(getVal(tx, ['Currency', 'currency']) || '').toUpperCase();
      const amt = parseFloat(getVal(tx, ['Amount', 'amount', 'value'])) || 0;
      if (curr === 'AFN') return amt > 0 ? amt : 0;
      if (curr === 'IQD' && amt > 0) {
        const rate = getAfnExchangeRate();
        return rate > 0 ? Math.round((amt / rate) * 100) / 100 : amt;
      }
      return 0;
    }

    function renderAdminAfnReports() {
      const stockInput = document.getElementById('mgmtAfnCompanyStockInput');
      const totalSalesEl = document.getElementById('mgmtTotalSalesAfn');
      const todaySalesEl = document.getElementById('mgmtTodaySalesAfn');
      const remStockEl = document.getElementById('mgmtRemainingStockAfn');
      const statusEl = document.getElementById('mgmtStockStatusAfn');
      const buyersBox = document.getElementById('mgmtBuyersListBox');
      const nonBuyersBox = document.getElementById('mgmtNonBuyersListBox');
      if (!totalSalesEl || !todaySalesEl || !remStockEl || !buyersBox || !nonBuyersBox) return;

      const initialStock = parseFloat(toEnglishDigits(stockInput ? stockInput.value : '50000')) || 0;
      const todayStr = extractDateOnly(new Date().toISOString());

      let totalSalesAfn = 0;
      let todaySalesAfn = 0;
      const buyerTotalsByAcc = {};

      transactionsList.forEach(tx => {
        const op = String(getVal(tx, ['OperationType', 'operationtype', 'type']) || '').trim();
        const isTopup = isChargeTransaction(tx) || op.includes('شارژ') || op.includes('کردیت');
        if (!isTopup) return;
        const afnVal = parseAfnAmountFromTx(tx);
        if (afnVal <= 0) return;

        totalSalesAfn += afnVal;
        const txDate = extractDateOnly(getVal(tx, ['Date', 'date', 'created_at', 'CreatedAt']) || '');
        if (txDate === todayStr) {
          todaySalesAfn += afnVal;
        }
        const accId = String(getVal(tx, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
        if (accId) {
          buyerTotalsByAcc[accId.toLowerCase()] = (buyerTotalsByAcc[accId.toLowerCase()] || 0) + afnVal;
        }
      });

      const remStock = initialStock - totalSalesAfn;
      totalSalesEl.innerText = `${formatEnMoney(Math.round(totalSalesAfn * 100) / 100)} AFN`;
      todaySalesEl.innerText = `${formatEnMoney(Math.round(todaySalesAfn * 100) / 100)} AFN`;
      remStockEl.innerText = `${formatEnMoney(Math.round(remStock * 100) / 100)} AFN`;

      if (statusEl) {
        if (remStock <= 0) {
          statusEl.innerText = 'اتمام شارژ شرکت';
          statusEl.style.color = 'var(--danger)';
        } else if (initialStock > 0 && remStock <= initialStock * 0.15) {
          statusEl.innerText = 'شارژ شرکت رو به اتمام';
          statusEl.style.color = 'var(--warning)';
        } else {
          statusEl.innerText = 'شارژ شرکت در دسترس';
          statusEl.style.color = 'var(--emerald-800)';
        }
      }

      const buyers = [];
      const nonBuyers = [];
      accountsList.forEach(acc => {
        const accId = String(getVal(acc, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
        if (!accId) return;
        const accName = String(getVal(acc, ['Name', 'name', 'fullname']) || 'بدون نام').trim();
        const sumAfn = buyerTotalsByAcc[accId.toLowerCase()] || 0;
        if (sumAfn > 0) {
          buyers.push({ accId, accName, sumAfn });
        } else {
          nonBuyers.push({ accId, accName });
        }
      });

      buyers.sort((a, b) => b.sumAfn - a.sumAfn);

      if (buyers.length === 0) {
        buyersBox.innerHTML = '<div style="font-size:0.7rem; color:var(--slate-500);">هنوز خریدی ثبت نشده است.</div>';
      } else {
        buyersBox.innerHTML = buyers.map(b =>
          `<div class="admin-mini-item"><span>${b.accName} (<span class="eng-num">${b.accId}</span>)</span><strong class="eng-num" style="color:var(--emerald-800);">${formatEnMoney(Math.round(b.sumAfn * 100) / 100)} AFN</strong></div>`
        ).join('');
      }

      if (nonBuyers.length === 0) {
        nonBuyersBox.innerHTML = '<div style="font-size:0.7rem; color:var(--slate-500);">همه حساب‌ها خرید داشته‌اند.</div>';
      } else {
        nonBuyersBox.innerHTML = nonBuyers.map(nb =>
          `<div class="admin-mini-item"><span>${nb.accName} (<span class="eng-num">${nb.accId}</span>)</span><span style="color:var(--slate-500);">بدون خرید</span></div>`
        ).join('');
      }
    }

    async function adminResetAndGenerateAccountPin() {
      playSound('click');
      if (!activeManagementAdmin) {
        alert('ابتدا وارد بخش مدیریت شوید.');
        return;
      }
      const queryRaw = toEnglishDigits((document.getElementById('mgmtResetAccOrPhoneInput')?.value || '').trim());
      const customPin = toEnglishDigits((document.getElementById('mgmtCustomOrGeneratedPinInput')?.value || '').trim());
      const resEl = document.getElementById('mgmtGeneratedPinResult');

      if (!queryRaw) {
        alert('شناسه حساب (Account ID) یا شماره تماس مشتری را وارد کنید.');
        return;
      }

      showRealLoading('در حال ریست و تولید رمز...', 'جستجو و به‌روزرسانی ستون PinHash در دیتابیس');
      await fetchDataFromSupabaseFresh();

      const qLower = queryRaw.toLowerCase();
      const qLast9 = getLast9Digits(queryRaw);
      const targetAcc = accountsList.find(acc => {
        const aid = String(getVal(acc, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim().toLowerCase();
        const ph = String(getVal(acc, ['Phone', 'phone', 'تلفن', 'mobile']) || '').trim();
        return aid === qLower || (qLast9.length >= 9 && getLast9Digits(ph) === qLast9);
      });

      if (!targetAcc) {
        hideRealLoading();
        alert('حسابی با این شناسه یا شماره تماس یافت نشد.');
        return;
      }

      const targetAccId = String(getVal(targetAcc, ['AccountID', 'accountid', 'ID', 'account_id']) || '').trim();
      const targetName = String(getVal(targetAcc, ['Name', 'name', 'fullname']) || 'مشتری').trim();
      const newPinValue = customPin || String(Math.floor(100000 + Math.random() * 900000));

      const savedOk = await setPinInDatabaseColumn(targetAccId, newPinValue);
      await fetchDataFromSupabaseFresh();
      hideRealLoading();

      if (!savedOk) {
        alert('خطا در ذخیره رمز جدید در ستون PinHash دیتابیس.');
        return;
      }

      if (resEl) {
        resEl.innerText = `حساب: ${targetName} (${targetAccId}) | رمز جدید: ${newPinValue}`;
      }
      playSound('success');
      alert(`رمز حساب ${targetName} (${targetAccId}) با موفقیت ریست و ذخیره شد.\nرمز جدید: ${newPinValue}`);
    }
  </script>
</body>
</html>
